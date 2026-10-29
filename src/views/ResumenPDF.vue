<template>
  <div class="px-6 mt-6 flex flex-col gap-4 w-full max-w-4xl mx-auto mb-6">
    
<!-- Botón PDF existente -->
    <button @click="generarPDF" :disabled="generando" class="w-full border-2 border-acento text-acento rounded-full min-h-[56px] text-[15px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform bg-acento/10">
      <svg v-if="!generando" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      {{ generando ? 'Generando PDF...' : 'Generar Reporte PDF del Sondeo' }}
    </button>

    <!-- NUEVO: Botón Excel -->
    <button @click="exportarExcel" class="w-full border-2 border-[#10B981] text-[#10B981] rounded-full min-h-[56px] text-[15px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform bg-[#10B981]/10">
      📊 Exportar Registro a Excel
    </button>

    <div class="bg-superficie rounded-[24px] overflow-hidden w-full overflow-x-auto shadow-lg">
      <table class="w-full text-center text-[12px]">
        <thead class="bg-fondo text-etiqueta text-[10px] uppercase tracking-wider">
          <tr>
            <th class="p-3">Prof (m)</th>
            <th class="p-3">N°</th>
            <th class="p-3">Tipo</th>
            <th class="p-3">Recup</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-fondo text-white">
          <tr v-for="reg in registros" :key="reg.id" @click="abrirEdicion(reg)" class="active:bg-superficie/80 transition-colors cursor-pointer">
            <td class="p-3 border-r border-fondo font-medium text-acento">{{ reg.profIni }} - {{ reg.profFin }}</td>
            <td class="p-3 border-r border-fondo">{{ reg.muestraNum || '-' }}</td>
            <td class="p-3 border-r border-fondo">{{ reg.tipoMuestra || '-' }}</td>
            <td class="p-3">{{ reg.recuperacion || '-' }}</td>
          </tr>
          <tr v-if="registros.length === 0">
            <td colspan="4" class="p-4 text-etiqueta text-center">No hay datos en este sondeo.</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p class="text-center text-[10px] text-etiqueta mt-1">Toca cualquier registro en la tabla para editarlo. (Modal de edición próximamente)</p>

<!-- MODAL DE EDICIÓN FLOTANTE -->
    <ModalEdicion 
      :visible="modalVisible" 
      :registroData="registroSeleccionado"
      :idProyecto="idProyecto"
      :idSondeo="idSondeo"
      @close="modalVisible = false"
    />
  </div> <!-- Fin del div principal de ResumenPDF -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { db } from '../services/firebase';
import { collection, onSnapshot, query, orderBy, doc, getDoc } from 'firebase/firestore';
import * as XLSX from 'xlsx';

const props = defineProps({
  idProyecto: String,
  idSondeo: String
});

const registros = ref([]);
const generando = ref(false);
// NUEVO: Agregamos sndEquipo a la estructura reactiva
const metadata = ref({ pryNombre: '', sndNombre: '', sndProf: '', sndEquipo: '' });

let unsubscribeDocs = null;

// Escuchar los registros y metadatos en tiempo real
onMounted(async () => {
  if (!props.idProyecto || !props.idSondeo) return;

  // 1. Obtener metadatos completos para el Excel y PDF
  try {
    const snapPry = await getDoc(doc(db, "Proyectos", props.idProyecto));
    if(snapPry.exists()) metadata.value.pryNombre = snapPry.data().nombre;

    const snapSnd = await getDoc(doc(db, `Proyectos/${props.idProyecto}/Sondeos`, props.idSondeo));
    if(snapSnd.exists()) {
      metadata.value.sndNombre = snapSnd.data().nombre;
      metadata.value.sndProf = snapSnd.data().profEstimada;
      metadata.value.sndEquipo = snapSnd.data().equipo || 'No especificado'; // Extraemos el equipo
    }
  } catch(e) { console.error("Error leyendo metadatos:", e); }

  // 2. Escuchar la tabla de muestras
  const q = query(
    collection(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/Registros`),
    orderBy("profIni", "asc")
  );

  unsubscribeDocs = onSnapshot(q, (snapshot) => {
    const arr = [];
    snapshot.forEach(docSnap => arr.push({ id: docSnap.id, ...docSnap.data() }));
    registros.value = arr;
  });
});

onUnmounted(() => {
  if (unsubscribeDocs) unsubscribeDocs();
});

// NUEVO: Exportación a Excel con Encabezado Corporativo Blindado
const exportarExcel = () => {
  if (registros.value.length === 0) return alert("No hay datos para exportar.");
  
  try {
    // 1. Extraer el primer y último registro de forma segura
    const primerReg = registros.value[0] || {};
    const ultimoReg = registros.value[registros.value.length - 1] || {};
    
    // Función segura para formatear fechas (evita que falle si un registro no tiene fecha)
    const formatFecha = (timestamp) => {
      if (!timestamp) return 'N/A';
      try {
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
      } catch (e) {
        return 'N/A';
      }
    };

    const fechaInicio = formatFecha(primerReg.creadoEn);
    const fechaFin = formatFecha(ultimoReg.creadoEn);

    // 2. Construir la estructura del Excel (Fila por fila - aoa_to_sheet)
    const wsData = [
      ["REGISTRO DE CAMPO - PERFORACIÓN GEOTÉCNICA"],
      [], 
      ["Proyecto:", metadata.value.pryNombre || 'N/A', "", "Equipo:", metadata.value.sndEquipo],
      ["Sondeo:", metadata.value.sndNombre || 'N/A', "", "Fecha Inicio:", fechaInicio],
      ["Prof. Estimada:", (metadata.value.sndProf || 0) + " m", "", "Fecha Fin:", fechaFin],
      [], 
      ["Prof. Inicial (m)", "Prof. Final (m)", "Tipo Muestra", "Muestra N°", "SPT 1", "SPT 2", "SPT 3", "N.F.", "Recuperación (cm)", "Descripción Visual"]
    ];

    // 3. Insertar los registros de campo
    registros.value.forEach(r => {
      wsData.push([
        r.profIni,
        r.profFin,
        r.tipoMuestra || '',
        r.muestraNum || '',
        r.spt1 || '',
        r.spt2 || '',
        r.spt3 || '',
        r.nf || '',
        r.recuperacion || '',
        r.descripcion || ''
      ]);
    });

    // 4. Crear la hoja
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // 5. Estética: Combinar celdas del título y ajustar anchos
    ws['!merges'] = [ { s: { r: 0, c: 0 }, e: { r: 0, c: 9 } } ];
    ws['!cols'] = [ {wch:15}, {wch:15}, {wch:15}, {wch:12}, {wch:8}, {wch:8}, {wch:8}, {wch:8}, {wch:18}, {wch:60} ];
    
    // 6. Generar archivo
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Registro de Campo");
    
    const nombreArchivo = `Registro_${metadata.value.sndNombre || 'Sondeo'}.xlsx`;
    XLSX.writeFile(wb, nombreArchivo);
  } catch(e) {
    alert("Error al generar Excel: " + e.message);
  }
};

// Generar PDF (Se mantiene igual a tu versión funcional)
const generarPDF = () => {
  if (registros.value.length === 0) return alert("No hay datos para exportar.");
  generando.value = true;

  document.getElementById('pdf_pry_nom').innerText = metadata.value.pryNombre || '-';
  document.getElementById('pdf_snd_nom').innerText = metadata.value.sndNombre || '-';
  document.getElementById('pdf_snd_prof').innerText = (metadata.value.sndProf || '-') + " m";
  
  const hd = new Date();
  document.getElementById('pdf_fecha').innerText = `${hd.getDate()}/${hd.getMonth() + 1}/${hd.getFullYear()}`;

  let h = '';
  registros.value.forEach(r => {
    h += `<tr>
            <td>${r.profIni} - ${r.profFin}</td>
            <td>${r.tipoMuestra || ''}</td>
            <td>${r.muestraNum || ''}</td>
            <td>${r.spt1 || ''}</td>
            <td>${r.spt2 || ''}</td>
            <td>${r.spt3 || ''}</td>
            <td>${r.nf || ''}</td>
            <td>${r.recuperacion || ''}</td>
            <td style="text-align:left;">${r.descripcion || ''}</td>
          </tr>`;
  });
  document.getElementById('pdf_body_table').innerHTML = h;

  const el = document.getElementById('pdf_template');
  el.style.display = 'block';
  
  const opt = {
      margin: 0.5,
      filename: `Sondeo_${metadata.value.sndNombre || 'Desconocido'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' },
      pagebreak: { mode: 'css', avoid: 'tr' }
  };
  
  window.html2pdf().set(opt).from(el).save().then(() => {
      el.style.display = 'none';
      generando.value = false;
  }).catch(err => {
      alert("Error al generar PDF: " + err.message);
      el.style.display = 'none';
      generando.value = false;
  });
};
</script>