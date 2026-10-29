<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto">
    
    <!-- Panel de Proyectos -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg">
      <h2 class="text-[12px] text-acento font-bold uppercase tracking-widest mb-4">Seleccionar Proyecto</h2>
      <div class="bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50 transition-colors">
        <select v-model="proyectoSeleccionado" @change="alSeleccionarProyecto" class="text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer">
          <option value="" disabled>-- Seleccionar Proyecto --</option>
          <option v-for="pry in proyectos" :key="pry.id" :value="pry.id"class="text-black">{{ pry.nombre }}</option>
        </select>
      </div>
      <!-- Botón Crear Proyecto -->
      <button @click="abrirModal('proyecto')" class="mt-4 text-[13px] text-acento font-semibold flex items-center justify-end gap-1 w-full active:scale-95 transition-transform">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Crear Nuevo Proyecto
      </button>
    </div>

    <!-- Panel de Sondeos -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg transition-opacity duration-300" :class="{'opacity-50 pointer-events-none': !proyectoSeleccionado}">
      <h2 class="text-[12px] text-acento font-bold uppercase tracking-widest mb-4">Seleccionar Sondeo</h2>
      <div class="bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-acento/50 transition-colors">
        <select v-model="sondeoSeleccionado" @change="alSeleccionarSondeo" :disabled="!proyectoSeleccionado" class="text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer">
          <option value="" disabled>-- Seleccionar Sondeo --</option>
          <option v-for="snd in sondeos" :key="snd.id" :value="snd.id"class="text-black">{{ snd.nombre }}</option>
        </select>
      </div>
      <!-- Botón Crear Sondeo -->
      <button @click="abrirModal('sondeo')" class="mt-4 text-[13px] text-acento font-semibold flex items-center justify-end gap-1 w-full active:scale-95 transition-transform">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Añadir Sondeo
      </button>
    </div>

    <div id="estado_trabajo" class="text-center text-[14px] text-etiqueta font-medium px-4" v-html="mensajeEstado"></div>

    <!-- MODAL DE CREACIÓN (PROYECTO Y SONDEO) -->
    <div v-if="modalVisible" class="fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6 animate-fade-in">
      <div class="bg-superficie w-full max-w-md rounded-[32px] p-8 flex flex-col gap-4 shadow-2xl border border-fondo">
        <h2 class="text-[20px] font-bold text-white mb-2">{{ modoModal === 'proyecto' ? 'Crear Proyecto' : 'Añadir Sondeo' }}</h2>
        
        <!-- Formulario Proyecto -->
        <div v-if="modoModal === 'proyecto'" class="flex flex-col gap-4">
          <input type="text" v-model="formPry.nombre" placeholder="Nombre del Proyecto" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
          <input type="text" v-model="formPry.ubicacion" placeholder="Ubicación" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
          <input type="text" v-model="formPry.cliente" placeholder="Cliente" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
        </div>
        
        <!-- Formulario Sondeo -->
        <div v-if="modoModal === 'sondeo'" class="flex flex-col gap-4">
          <input type="text" v-model="formSnd.nombre" placeholder="Nombre (Ej: S-01)" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
          <input type="number" v-model.number="formSnd.profEstimada" placeholder="Prof. Estimada (m)" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
          <input type="text" v-model="formSnd.equipo" placeholder="Equipo / Máquina" class="bg-fondo rounded-[20px] px-4 py-4 text-[15px] outline-none text-white">
        </div>
        
        <div class="flex gap-4 mt-4">
          <button @click="cerrarModal" class="flex-1 bg-fondo text-etiqueta rounded-full min-h-[48px] font-semibold active:scale-95 transition-transform">Cancelar</button>
          <button @click="guardarModal" :disabled="cargandoGuardar" class="flex-1 bg-acento text-fondo rounded-full min-h-[48px] font-bold active:scale-95 transition-transform flex justify-center items-center">
            {{ cargandoGuardar ? 'Guardando...' : 'Guardar' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../services/firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';

const emit = defineEmits(['proyecto-seleccionado', 'sondeo-seleccionado']);

// Variables de estado principal
const proyectos = ref([]);
const sondeos = ref([]);
const proyectoSeleccionado = ref('');
const sondeoSeleccionado = ref('');
const mensajeEstado = ref('Selecciona un proyecto para empezar.');

// Variables para el Modal de creación
const modalVisible = ref(false);
const modoModal = ref(''); // 'proyecto' o 'sondeo'
const cargandoGuardar = ref(false);
const formPry = ref({ nombre: '', ubicacion: '', cliente: '' });
const formSnd = ref({ nombre: '', profEstimada: null, equipo: '' });

let unsubscribePry = null;
let unsubscribeSnd = null;

// Escuchar proyectos al montar el componente
onMounted(() => {
  const q = query(collection(db, "Proyectos"), orderBy("creadoEn", "desc"));
  unsubscribePry = onSnapshot(q, (snapshot) => {
    proyectos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
});

// Selectores
const alSeleccionarProyecto = () => {
  sondeoSeleccionado.value = '';
  sondeos.value = [];
  
  if (!proyectoSeleccionado.value) {
    mensajeEstado.value = 'Selecciona un proyecto para empezar.';
    if (unsubscribeSnd) unsubscribeSnd();
    emit('proyecto-seleccionado', ''); 
    return;
  }

  mensajeEstado.value = 'Ahora selecciona o crea un sondeo.';
  emit('proyecto-seleccionado', proyectoSeleccionado.value);

  if (unsubscribeSnd) unsubscribeSnd();
  const qSnd = query(collection(db, `Proyectos/${proyectoSeleccionado.value}/Sondeos`), orderBy("creadoEn", "desc"));
  unsubscribeSnd = onSnapshot(qSnd, (snapshot) => {
    sondeos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
};

const alSeleccionarSondeo = () => {
  if (sondeoSeleccionado.value) {
    mensajeEstado.value = '<span class="text-acento font-bold">¡Listo!</span> Puedes cambiar a otra pestaña.';
    emit('sondeo-seleccionado', sondeoSeleccionado.value);
  } else {
    mensajeEstado.value = 'Selecciona un sondeo.';
    emit('sondeo-seleccionado', '');
  }
};

// Funciones del Modal
const abrirModal = (modo) => {
  modoModal.value = modo;
  modalVisible.value = true;
  formPry.value = { nombre: '', ubicacion: '', cliente: '' };
  formSnd.value = { nombre: '', profEstimada: null, equipo: '' };
};

const cerrarModal = () => {
  modalVisible.value = false;
};

const guardarModal = async () => {
  cargandoGuardar.value = true;
  const usuarioActual = auth.currentUser ? auth.currentUser.email : 'usuario@desconocido.com';

  try {
    if (modoModal.value === 'proyecto') {
      if (!formPry.value.nombre) throw new Error("El nombre del proyecto es obligatorio.");
      
      await addDoc(collection(db, "Proyectos"), {
        nombre: formPry.value.nombre,
        ubicacion: formPry.value.ubicacion,
        cliente: formPry.value.cliente,
        creadoPor: usuarioActual,
        creadoEn: serverTimestamp()
      });
      
    } else if (modoModal.value === 'sondeo') {
      if (!proyectoSeleccionado.value) throw new Error("No hay proyecto activo.");
      if (!formSnd.value.nombre) throw new Error("El nombre del sondeo es obligatorio.");
      
      await addDoc(collection(db, `Proyectos/${proyectoSeleccionado.value}/Sondeos`), {
        nombre: formSnd.value.nombre,
        profEstimada: formSnd.value.profEstimada || 0,
        equipo: formSnd.value.equipo,
        creadoPor: usuarioActual,
        creadoEn: serverTimestamp()
      });
    }
    cerrarModal();
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    cargandoGuardar.value = false;
  }
};

onUnmounted(() => {
  if (unsubscribePry) unsubscribePry();
  if (unsubscribeSnd) unsubscribeSnd();
});
</script>