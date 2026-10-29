<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto">
    
    <!-- PANEL DE SOBRANTE ACTUAL -->
    <div class="bg-fondo border-2 border-superficie rounded-[32px] p-8 text-center shadow-lg">
      <div class="text-[12px] uppercase text-acento font-bold tracking-widest mb-1">Sobrante Actual</div>
      <div class="text-[72px] font-black leading-none text-white">{{ sobranteActual.toFixed(2) }}</div>
    </div>

    <!-- FORMULARIO DE INGRESO -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg flex flex-col gap-4">
      <h2 class="text-[12px] text-acento font-bold uppercase tracking-widest">Registrar Tubería NQ</h2>
      
      <div class="bg-fondo rounded-[20px] p-3">
        <label class="block text-[11px] uppercase text-etiqueta text-center font-semibold mb-1">Tubería NQ (m)</label>
        <input type="number" v-model.number="inputTuberia" @input="calcSobrante" class="text-[28px] font-bold text-center w-full" placeholder="0.00">
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="bg-fondo rounded-[20px] p-3">
          <label class="block text-[11px] uppercase text-etiqueta text-center font-semibold mb-1">Profundidad (m)</label>
          <input type="number" v-model.number="inputProfundidad" @input="calcSobrante" class="text-[20px] font-bold text-center w-full">
        </div>
        <div class="bg-fondo rounded-[20px] p-3">
          <label class="block text-[11px] uppercase text-acento text-center font-semibold mb-1">Altura Suelo (m)</label>
          <input type="number" v-model.number="inputAltura" @input="calcSobrante" class="text-[20px] font-bold text-center text-acento w-full">
        </div>
      </div>

      <button @click="guardarNQ" :disabled="cargando" class="w-full bg-acento text-fondo rounded-full min-h-[56px] text-[16px] font-bold tracking-wide active:scale-95 transition-transform mt-2">
        {{ cargando ? 'Guardando...' : 'Agregar Tubería' }}
      </button>
    </div>

    <!-- HISTORIAL COMPLETO -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg mb-6">
      <div class="flex justify-between items-center mb-4">
        <div class="text-[12px] uppercase text-acento font-bold tracking-widest">Historial de Tubería Instalada</div>
        <span class="text-[11px] text-etiqueta">Total tubos: {{ listaTubos.length }}</span>
      </div>

      <div class="flex flex-col gap-3">
        <!-- Bucle reactivo: Muestra todos los tubos -->
        <div v-for="(tubo, index) in listaTubos" :key="tubo.id" class="bg-fondo rounded-[16px] p-4 flex justify-between items-center border border-superficie">
          <div class="flex items-center gap-3">
            <button @click="eliminarTuboNQ(tubo.id)" class="text-[11px] bg-[#EF4444]/10 text-[#EF4444] px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform">🗑 Borrar</button>
            <span class="text-[15px] text-white font-semibold">{{ tubo.tuberia }} m</span>
          </div>
          <!-- Consecutivo dinámico invertido -->
          <span class="text-[12px] text-acento font-bold uppercase tracking-widest"># {{ listaTubos.length - index }}</span>
        </div>

        <div v-if="listaTubos.length === 0" class="text-[12px] text-etiqueta text-center py-4">
          No hay registros de tubería NQ.
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { db } from '../services/firebase';
import { collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'firebase/firestore';

// Recibe el proyecto y sondeo seleccionados desde App.vue
const props = defineProps({
  idProyecto: String,
  idSondeo: String
});

const inputTuberia = ref(null);
const inputProfundidad = ref(null);
const inputAltura = ref(null);
const sobranteActual = ref(0);
const listaTubos = ref([]);
const totalTuberiaBD = ref(0);
const cargando = ref(false);

let unsubscribeNQ = null;

const calcSobrante = () => {
  const tActual = parseFloat(inputTuberia.value) || 0;
  const p = parseFloat(inputProfundidad.value) || 0;
  const a = parseFloat(inputAltura.value) || 0;
  sobranteActual.value = (totalTuberiaBD.value + tActual) - (p + a);
};

const guardarNQ = async () => {
  if (!props.idSondeo) return alert("Selecciona un sondeo primero en la pestaña de Inicio.");
  const tV = parseFloat(inputTuberia.value);
  if (!tV) return alert("Ingresa un valor válido para la tubería.");

  cargando.value = true;
  try {
    await addDoc(collection(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/NQ`), {
      tuberia: tV,
      profundidad: parseFloat(inputProfundidad.value) || 0,
      altura: parseFloat(inputAltura.value) || 0,
      creadoEn: serverTimestamp()
    });
    inputTuberia.value = null; 
  } catch (error) {
    alert("Error al guardar: " + error.message);
  }
  cargando.value = false;
};

const eliminarTuboNQ = async (idTubo) => {
  if (!confirm('¿Eliminar este tubo de NQ? Los consecutivos y el sobrante se recalcularán automáticamente.')) return;
  try {
    await deleteDoc(doc(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/NQ`, idTubo));
  } catch (error) {
    alert("Error al eliminar: " + error.message);
  }
};

onMounted(() => {
  if (!props.idSondeo) return;

  const qNQ = query(collection(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/NQ`), orderBy("creadoEn", "desc"));
  
  unsubscribeNQ = onSnapshot(qNQ, (snapshot) => {
    let t = 0;
    let tubos = [];
    
    snapshot.forEach((docSnap) => {
      const data = docSnap.data();
      t += parseFloat(data.tuberia) || 0;
      tubos.push({ id: docSnap.id, ...data });
    });

    listaTubos.value = tubos;
    totalTuberiaBD.value = t;

    if (tubos.length > 0) {
      inputProfundidad.value = tubos[0].profundidad;
      inputAltura.value = tubos[0].altura;
    } else {
      inputProfundidad.value = null;
      inputAltura.value = null;
    }

    calcSobrante();
  });
});

onUnmounted(() => {
  if (unsubscribeNQ) unsubscribeNQ();
});
</script>