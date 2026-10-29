<template>
  <!-- Fondo oscuro (Overlay) -->
  <div v-if="visible" class="fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6">
    
    <!-- Ventana del Modal -->
    <div class="bg-superficie w-full max-w-md rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl overflow-y-auto max-h-full border border-[#10B981]/20">
      
      <!-- Cabecera -->
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-[18px] font-bold text-white">Editar Muestra</h2>
        <button @click="eliminarRegistro" class="text-[12px] bg-[#EF4444]/10 text-[#EF4444] px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform">🗑 Borrar</button>
      </div>
      
      <!-- Profundidades -->
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-fondo rounded-[16px] p-3">
          <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold">Prof Inicial</label>
          <input type="number" v-model.number="form.profIni" class="font-bold w-full outline-none">
        </div>
        <div class="bg-fondo rounded-[16px] p-3">
          <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold">Prof Final</label>
          <input type="number" v-model.number="form.profFin" class="font-bold w-full outline-none">
        </div>
      </div>
      
      <!-- Golpes SPT -->
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-fondo rounded-[16px] p-3">
          <label class="block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold">SPT 1</label>
          <input type="number" v-model.number="form.spt1" class="text-center font-bold w-full outline-none">
        </div>
        <div class="bg-fondo rounded-[16px] p-3">
          <label class="block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold">SPT 2</label>
          <input type="number" v-model.number="form.spt2" class="text-center font-bold w-full outline-none">
        </div>
        <div class="bg-fondo rounded-[16px] p-3">
          <label class="block text-[10px] uppercase text-etiqueta mb-1 text-center font-semibold">SPT 3</label>
          <input type="number" v-model.number="form.spt3" class="text-center font-bold w-full outline-none">
        </div>
      </div>
      
      <!-- Recuperación -->
      <div class="bg-fondo rounded-[16px] p-3">
        <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold">Recup (cm)</label>
        <input type="number" v-model.number="form.recuperacion" class="font-bold w-full outline-none">
      </div>
      
      <!-- Descripción Visual -->
      <div class="bg-fondo rounded-[16px] p-3">
        <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold">Descripción</label>
        <textarea v-model="form.descripcion" class="font-bold min-h-[80px] w-full outline-none resize-none"></textarea>
      </div>
      
      <!-- Botones de Acción -->
      <div class="flex gap-3 mt-2">
        <button @click="cerrar" class="flex-1 bg-fondo text-etiqueta rounded-full min-h-[44px] font-semibold active:scale-95 transition-transform">Cancelar</button>
        <button @click="guardarEdicion" :disabled="procesando" class="flex-1 bg-acento text-fondo rounded-full min-h-[44px] font-bold active:scale-95 transition-transform flex justify-center items-center">
          {{ procesando ? 'Guardando...' : 'Actualizar' }}
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { db } from '../services/firebase';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

const props = defineProps({
  visible: Boolean,
  registroData: Object,
  idProyecto: String,
  idSondeo: String
});

const emit = defineEmits(['close']);

// Estado local para los campos del formulario
const form = ref({
  id: '',
  profIni: null,
  profFin: null,
  spt1: null,
  spt2: null,
  spt3: null,
  recuperacion: null,
  descripcion: ''
});

const procesando = ref(false);

// Cuando la prop registroData cambie (es decir, cuando toquemos una fila), rellenamos el formulario local
watch(() => props.registroData, (newData) => {
  if (newData) {
    form.value = { ...newData }; // Hacemos una copia profunda superficial para no mutar directamente los props
  }
}, { deep: true, immediate: true });

const cerrar = () => {
  emit('close');
};

const guardarEdicion = async () => {
  if (!props.idProyecto || !props.idSondeo || !form.value.id) return;
  procesando.value = true;
  try {
    const docRef = doc(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/Registros`, form.value.id);
    await updateDoc(docRef, {
      profIni: parseFloat(form.value.profIni) || 0,
      profFin: parseFloat(form.value.profFin) || 0,
      spt1: form.value.spt1,
      spt2: form.value.spt2,
      spt3: form.value.spt3,
      recuperacion: parseFloat(form.value.recuperacion) || 0,
      descripcion: form.value.descripcion
    });
    cerrar();
  } catch (error) {
    alert("Error al actualizar: " + error.message);
  } finally {
    procesando.value = false;
  }
};

const eliminarRegistro = async () => {
  if (!props.idProyecto || !props.idSondeo || !form.value.id) return;
  if (!confirm("¿Borrar permanentemente este registro?")) return;
  
  procesando.value = true;
  try {
    const docRef = doc(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/Registros`, form.value.id);
    await deleteDoc(docRef);
    cerrar();
  } catch (error) {
    alert("Error al eliminar: " + error.message);
  } finally {
    procesando.value = false;
  }
};
</script>