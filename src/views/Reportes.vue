<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6">
    
    <!-- Selector de Proyecto -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg">
      <h2 class="text-[12px] text-acento font-bold uppercase tracking-widest mb-4">Generar Reporte de Avance</h2>
      <div class="bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50">
        <select v-model="proyectoSeleccionado" @change="calcularReporte" class="text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer">
          <option value="" disabled>-- Seleccionar Proyecto --</option>
          <option v-for="pry in proyectos" :key="pry.id" :value="pry.id"class="text-black">{{ pry.nombre }}</option>
        </select>
      </div>
    </div>

    <!-- Estado de Carga -->
    <div v-if="cargando" class="text-center text-acento font-bold animate-pulse">
      Calculando avance real de perforación...
    </div>

    <!-- El Reporte Corporativo -->
    <div v-if="reporteGenerado && !cargando" id="cuadro_reporte" class="bg-white text-black rounded-[32px] p-6 shadow-lg">
      <h2 class="text-[18px] font-bold text-center uppercase mb-4 border-b-2 border-gray-200 pb-2">Reporte de Avance: {{ nombreProyectoActivo }}</h2>

      <!-- Tarjetas de Totales -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-100 p-4 rounded-[16px] text-center border border-gray-200">
          <div class="text-[10px] uppercase font-bold text-gray-500">Total SPT (Incl. Manual/Shelby)</div>
          <div class="text-[24px] font-black text-[#10B981]">{{ totales.spt.toFixed(2) }} m</div>
        </div>
        <div class="bg-gray-100 p-4 rounded-[16px] text-center border border-gray-200">
          <div class="text-[10px] uppercase font-bold text-gray-500">Total Corazonamiento NQ</div>
          <div class="text-[24px] font-black text-[#38BDF8]">{{ totales.nq.toFixed(2) }} m</div>
        </div>
      </div>

      <!-- Tabla de Desglose Exacta -->
      <div class="overflow-x-auto">
        <table class="w-full text-center text-[12px] border-collapse">
          <thead>
            <tr class="bg-gray-200 text-gray-700 uppercase tracking-wider text-[10px]">
              <th class="p-2 border border-gray-300">Sondeo</th>
              <th class="p-2 border border-gray-300">SPT (m)</th>
              <th class="p-2 border border-gray-300">NQ (m)</th>
              <th class="p-2 border border-gray-300 font-bold bg-[#10B981]/20 text-[#047857]">TOTAL (m)</th>
              <th class="p-2 border border-gray-300 bg-gray-300">Prof. Final</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="snd in desgloseSondeos" :key="snd.nombre">
              <td class="p-2 border border-gray-300 font-bold text-left pl-2">{{ snd.nombre }}</td>
              <td class="p-2 border border-gray-300">{{ snd.spt.toFixed(2) }}</td>
              <td class="p-2 border border-gray-300">{{ snd.nq.toFixed(2) }}</td>
              <td class="p-2 border border-gray-300 font-bold bg-gray-50 text-[#047857]">{{ snd.total.toFixed(2) }}</td>
              <td class="p-2 border border-gray-300 font-bold">{{ snd.profFinal.toFixed(2) }} m</td>
            </tr>
            <!-- Fila de Sumatoria Final -->
            <tr class="bg-[#0F172A] text-white font-bold text-[12px]">
              <td class="p-2 border border-[#0F172A] text-right pr-2">TOTAL GRAL:</td>
              <td class="p-2 border border-[#0F172A] text-[#10B981]">{{ totales.spt.toFixed(2) }}</td>
              <td class="p-2 border border-[#0F172A] text-[#38BDF8]">{{ totales.nq.toFixed(2) }}</td>
              <td class="p-2 border border-[#0F172A] text-white">{{ (totales.spt + totales.nq).toFixed(2) }} m</td>
              <td class="p-2 border border-[#0F172A] text-gray-400">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

<!-- Botones de Acción -->
    <div v-if="reporteGenerado && !cargando" class="flex flex-col gap-3">
      <button @click="copiarWhatsApp" class="w-full bg-[#25D366] text-white rounded-full min-h-[50px] font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
         📋 Copiar Resumen para WhatsApp
      </button>
      
      <!-- NUEVO: Botón Excel Avance -->
      <button @click="exportarExcelReporte" class="w-full bg-[#10B981] text-white rounded-full min-h-[50px] font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
         📊 Descargar Excel de Avance
      </button>

      <button @click="exportarPDFReporte" class="w-full bg-acento text-fondo rounded-full min-h-[50px] font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
         📄 Exportar PDF
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
// NUEVO: Importar XLSX
import * as XLSX from 'xlsx';

const proyectos = ref([]);
const proyectoSeleccionado = ref('');
const nombreProyectoActivo = ref('');
const cargando = ref(false);
const reporteGenerado = ref(false);

const totales = ref({ spt: 0, nq: 0 });
const desgloseSondeos = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "Proyectos"));
  proyectos.value = querySnapshot.docs.map(doc => ({ id: doc.id, nombre: doc.data().nombre }));
});

const calcularReporte = async () => {
  if (!proyectoSeleccionado.value) return;
  
  cargando.value = true;
  reporteGenerado.value = false;
  totales.value = { spt: 0, nq: 0 };
  desgloseSondeos.value = [];

  try {
    const pryObj = proyectos.value.find(p => p.id === proyectoSeleccionado.value);
    nombreProyectoActivo.value = pryObj ? pryObj.nombre : 'Desconocido';

    const sondeosSnap = await getDocs(collection(db, `Proyectos/${proyectoSeleccionado.value}/Sondeos`));
    
    for (const sndDoc of sondeosSnap.docs) {
      const idSnd = sndDoc.id;
      const nombreSnd = sndDoc.data().nombre;
      
      let sndSpt = 0; 
      let sndNq = 0; 
      let profAnterior = 0; // Inicia en la superficie (0 metros)

      const registrosSnap = await getDocs(collection(db, `Proyectos/${proyectoSeleccionado.value}/Sondeos/${idSnd}/Registros`));
      
      // Extraer y ordenar los registros por Profundidad Final para calcular el avance real
      let registros = [];
      registrosSnap.forEach(r => registros.push(r.data()));
      registros.sort((a, b) => (parseFloat(a.profFin) || 0) - (parseFloat(b.profFin) || 0));

      registros.forEach(r => {
        const pFin = parseFloat(r.profFin) || 0;
        
        // El avance real es desde donde terminó la muestra anterior hasta donde termina esta
        const metrosAvanzados = pFin - profAnterior;

        if (metrosAvanzados > 0) {
          const tipo = r.tipoMuestra ? r.tipoMuestra.toLowerCase() : 'standard';
          
          if (tipo.includes('nq')) {
            sndNq += metrosAvanzados;
          } else {
            // Standard, Manual y Shelby caen todos aquí
            sndSpt += metrosAvanzados;
          }
          
          // Actualizamos la marca de profundidad para el siguiente cálculo
          profAnterior = pFin;
        }
      });

      const sndTotal = sndSpt + sndNq;
      
      // Se añade el sondeo al desglose sin importar si tiene registros o no
      desgloseSondeos.value.push({
          nombre: nombreSnd,
          spt: sndSpt, 
          nq: sndNq, 
          total: sndTotal,
          profFinal: profAnterior // La profAnterior final es la profundidad total alcanzada
      });

      totales.value.spt += sndSpt;
      totales.value.nq += sndNq;
    }
    reporteGenerado.value = true;
  } catch (error) {
    alert("Error al calcular: " + error.message);
  } finally {
    cargando.value = false;
  }
};

const copiarWhatsApp = () => {
  const tGeneral = totales.value.spt + totales.value.nq;
  let txt = `📊 *Reporte de Avance*\n🏗️ *Proyecto:* ${nombreProyectoActivo.value}\n\n`;
  txt += `*TOTAL PERFORADO: ${tGeneral.toFixed(2)} m*\n`;
  txt += `(SPT/Manual/Shelby: ${totales.value.spt.toFixed(2)}m | NQ: ${totales.value.nq.toFixed(2)}m)\n\n`;
  txt += `*Desglose por Sondeo:*\n`;
  
  desgloseSondeos.value.forEach(s => {
    txt += `• *${s.nombre}*: ${s.total.toFixed(2)}m (Prof. Alcanzada: ${s.profFinal.toFixed(2)}m)\n`;
  });
  
  navigator.clipboard.writeText(txt).then(() => {
    alert("¡Reporte copiado al portapapeles! Abre WhatsApp y dale Pegar.");
  });
};

const exportarPDFReporte = () => {
  const el = document.getElementById('cuadro_reporte');
  const opt = {
      margin: 0.3,
      filename: `Avance_${nombreProyectoActivo.value.replace(/ /g,"_")}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      pagebreak: { mode: 'css', avoid: 'tr' }
  };
  
  window.html2pdf().set(opt).from(el).save();
};
// NUEVO: Exportar Avance a Excel
const exportarExcelReporte = () => {
  if (desgloseSondeos.value.length === 0) return alert("No hay datos para exportar.");
  
  try {
    // 1. Extraer los datos reactivos del desglose
    const data = desgloseSondeos.value.map(snd => ({
      "Sondeo": snd.nombre,
      "SPT / Manual / Shelby (m)": snd.spt.toFixed(2),
      "Corazonamiento NQ (m)": snd.nq.toFixed(2),
      "TOTAL PERFORADO (m)": snd.total.toFixed(2),
      "Profundidad Final Alcanzada (m)": snd.profFinal.toFixed(2)
    }));

    // 2. Agregar la fila de totales al final del arreglo
    data.push({
      "Sondeo": "TOTAL GENERAL",
      "SPT / Manual / Shelby (m)": totales.value.spt.toFixed(2),
      "Corazonamiento NQ (m)": totales.value.nq.toFixed(2),
      "TOTAL PERFORADO (m)": (totales.value.spt + totales.value.nq).toFixed(2),
      "Profundidad Final Alcanzada (m)": "-"
    });

    // 3. Crear hoja y formatear
    const ws = XLSX.utils.json_to_sheet(data);
    ws['!cols'] = [{wch:20}, {wch:25}, {wch:25}, {wch:25}, {wch:30}];
    
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Avance Perforación");
    
    const nombreArchivo = `Avance_${nombreProyectoActivo.value.replace(/ /g, "_")}.xlsx`;
    XLSX.writeFile(wb, nombreArchivo);
  } catch(e) {
    alert("Error al generar Excel: " + e.message);
  }
};
</script>