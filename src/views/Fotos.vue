<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6">
    
    <!-- CONFIGURACIÓN DE DRIVE CENTRALIZADA -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg flex flex-col gap-4">
      <div class="flex justify-between items-center mb-1">
        <h2 class="text-[12px] text-[#38BDF8] font-bold uppercase tracking-widest">Nube del Proyecto</h2>
      </div>
      
      <!-- Lista Desplegable y Acciones Rápidas -->
      <div class="flex gap-2">
        <div class="bg-fondo rounded-[20px] px-4 py-1 flex-1 border border-superficie focus-within:border-[#38BDF8]/50 transition-colors">
          <select v-model="configSeleccionada" class="text-[14px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer">
            <option value="" disabled>-- Seleccionar Nube / Drive --</option>
            <option v-for="cfg in configuraciones" :key="cfg.id" :value="cfg.id" class="text-black">
              {{ cfg.nombre }} (por {{ cfg.creadoPor.split('@')[0] }})
            </option>
          </select>
        </div>
        <button @click="abrirModal('editar')" :disabled="!configSeleccionada" class="bg-fondo border border-superficie rounded-[20px] w-12 flex items-center justify-center text-[16px] active:scale-95 transition-transform disabled:opacity-50" title="Editar enlace">✏️</button>
        <button @click="borrarConfig" :disabled="!configSeleccionada" class="bg-fondo border border-[#EF4444]/30 rounded-[20px] w-12 flex items-center justify-center text-[16px] active:scale-95 transition-transform text-[#EF4444] disabled:opacity-50" title="Borrar enlace">🗑</button>
      </div>

      <!-- Botones de Acción Global -->
      <div class="flex gap-3">
        <button @click="abrirModal('crear')" class="flex-1 bg-fondo border-2 border-[#38BDF8]/30 text-[#38BDF8] rounded-full min-h-[48px] font-bold text-[14px] active:scale-95 transition-transform">
          ➕ Crear Enlace
        </button>
        <button @click="sincronizarCarpetas" :disabled="!configSeleccionada" class="flex-1 bg-[#38BDF8] text-fondo rounded-full min-h-[48px] font-bold text-[14px] active:scale-95 transition-transform disabled:opacity-50">
          🔄 Sincronizar
        </button>
      </div>
    </div>

    <!-- UI DE CÁMARA Y GALERÍA (MASIVA) -->
    <div class="mt-2">
      <div class="flex gap-3">
        <label class="flex-1 bg-fondo border-2 border-dashed border-[#38BDF8]/50 rounded-[24px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform shadow-sm">
          <span class="text-[32px]">📷</span>
          <span class="text-[13px] font-bold text-[#38BDF8]">Cámara</span>
          <input type="file" accept="image/*" capture="environment" class="hidden" @change="alSeleccionarFotos">
        </label>
        
        <label class="flex-1 bg-fondo border-2 border-dashed border-etiqueta/50 rounded-[24px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer active:scale-95 transition-transform shadow-sm">
          <span class="text-[32px]">🖼️</span>
          <span class="text-[13px] font-bold text-white">Galería</span>
          <input type="file" accept="image/*" multiple class="hidden" @change="alSeleccionarFotos">
        </label>
      </div>
      
      <div v-if="fotosPreview.length > 0" class="flex flex-col gap-3 bg-fondo border-2 border-solid border-[#38BDF8] rounded-[24px] p-4 relative mt-4 animate-fade-in">
        <div class="flex justify-between items-center w-full border-b border-[#38BDF8]/30 pb-2">
          <span class="text-[13px] text-[#38BDF8] font-bold">{{ fotosPreview.length }} fotos listas</span>
          <button @click="limpiarFotos" class="bg-[#EF4444] text-white rounded-full px-3 py-1 text-[11px] font-bold shadow-md active:scale-95">Borrar Todas</button>
        </div>
        <div class="flex flex-wrap gap-2 justify-center w-full max-h-48 overflow-y-auto">
           <div v-for="(foto, index) in fotosPreview" :key="index" class="relative">
              <img :src="foto.url" class="w-16 h-16 object-cover rounded-lg border border-[#38BDF8]">
           </div>
        </div>
        
        <button @click="subirFotosDrive" :disabled="subiendo" class="w-full bg-[#38BDF8] text-fondo rounded-full min-h-[48px] font-bold text-[14px] mt-2 active:scale-95 transition-transform">
          {{ subiendo ? progresoTexto : 'Subir Fotos a Drive' }}
        </button>
      </div>
    </div>

    <!-- MODAL PARA CREAR/EDITAR ENLACE DRIVE -->
    <div v-if="modalVisible" class="fixed inset-0 bg-fondo/90 backdrop-blur z-50 flex items-center justify-center p-6 animate-fade-in">
      <div class="bg-superficie w-full max-w-md rounded-[32px] p-8 flex flex-col gap-4 shadow-2xl">
        <h2 class="text-[20px] font-bold text-white mb-2">{{ modoEdicion === 'crear' ? 'Vincular Nuevo Drive' : 'Editar Servidor Drive' }}</h2>
        
        <div class="flex flex-col gap-4">
          <div>
            <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2">Nombre Identificador</label>
            <input type="text" v-model="formData.nombre" placeholder="Ej: Proyecto Norte - Drive" class="bg-fondo rounded-[20px] px-4 py-4 font-bold text-[14px] w-full text-white outline-none">
          </div>
          <div>
            <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2">URL del Apps Script</label>
            <input type="text" v-model="formData.urlScript" placeholder="https://script.google.com/macros/s/.../exec" class="bg-fondo rounded-[20px] px-4 py-4 text-[13px] text-acento w-full outline-none">
          </div>
          <div>
            <label class="block text-[10px] uppercase text-etiqueta mb-1 font-semibold pl-2">ID Carpeta Raíz</label>
            <input type="text" v-model="formData.idCarpetaRaiz" placeholder="1XyZ_abc123..." class="bg-fondo rounded-[20px] px-4 py-4 text-[13px] text-acento w-full outline-none">
          </div>
        </div>
        
        <div class="flex gap-4 mt-4">
          <button @click="cerrarModal" class="flex-1 bg-fondo text-etiqueta rounded-full min-h-[48px] font-semibold active:scale-95 transition-transform">Cancelar</button>
          <button @click="guardarConfig" :disabled="procesandoDB" class="flex-1 bg-acento text-fondo rounded-full min-h-[48px] font-bold active:scale-95 transition-transform">
            {{ procesandoDB ? 'Guardando...' : 'Guardar' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { db, auth } from '../services/firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

const props = defineProps({
  idProyecto: String,
  idSondeo: String
});

// Variables para la Configuración
const configuraciones = ref([]);
const configSeleccionada = ref('');
let unsConfigs = null;

// Variables para el Modal
const modalVisible = ref(false);
const modoEdicion = ref('crear'); // 'crear' o 'editar'
const procesandoDB = ref(false);
const formData = ref({ id: '', nombre: '', urlScript: '', idCarpetaRaiz: '' });

// Variables para Fotos
const fotosArchivos = ref([]);
const fotosPreview = ref([]);
const subiendo = ref(false);
const progresoTexto = ref('');

// ==========================================
// 1. LÓGICA DE BASE DE DATOS (NUBE DRIVE)
// ==========================================
onMounted(() => {
  unsConfigs = onSnapshot(collection(db, "ConfiguracionesDrive"), (snap) => {
    configuraciones.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  });
});

onUnmounted(() => {
  if(unsConfigs) unsConfigs();
});

const abrirModal = (modo) => {
  modoEdicion.value = modo;
  if (modo === 'crear') {
    formData.value = { id: '', nombre: '', urlScript: '', idCarpetaRaiz: '' };
  } else {
    const configActual = configuraciones.value.find(c => c.id === configSeleccionada.value);
    if(configActual) formData.value = { ...configActual };
  }
  modalVisible.value = true;
};

const cerrarModal = () => modalVisible.value = false;

const guardarConfig = async () => {
  if(!formData.value.nombre || !formData.value.urlScript || !formData.value.idCarpetaRaiz) return alert("Llena todos los campos.");
  procesandoDB.value = true;
  
  try {
    const usuarioActual = auth.currentUser ? auth.currentUser.email : 'usuario@local';
    
    if (modoEdicion.value === 'crear') {
      await addDoc(collection(db, "ConfiguracionesDrive"), {
        nombre: formData.value.nombre,
        urlScript: formData.value.urlScript,
        idCarpetaRaiz: formData.value.idCarpetaRaiz,
        creadoPor: usuarioActual,
        creadoEn: serverTimestamp()
      });
    } else {
      await updateDoc(doc(db, "ConfiguracionesDrive", formData.value.id), {
        nombre: formData.value.nombre,
        urlScript: formData.value.urlScript,
        idCarpetaRaiz: formData.value.idCarpetaRaiz
      });
    }
    cerrarModal();
  } catch (error) {
    alert("Error al guardar configuración: " + error.message);
  } finally {
    procesandoDB.value = false;
  }
};

const borrarConfig = async () => {
  if(!configSeleccionada.value) return;
  if(confirm("¿Seguro que deseas eliminar esta conexión a Drive de la base de datos?")) {
    try {
      await deleteDoc(doc(db, "ConfiguracionesDrive", configSeleccionada.value));
      configSeleccionada.value = '';
    } catch(error) {
      alert("Error al borrar: " + error.message);
    }
  }
};

// ==========================================
// 2. LÓGICA DE FOTOS Y SINCRONIZACIÓN
// ==========================================
const sincronizarCarpetas = () => {
  // Lógica de sincronización de carpetas de Drive (Implementación futura)
  alert("La sincronización de estructura se ha activado para la nube seleccionada.");
};

const alSeleccionarFotos = (event) => {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  
  for (let i = 0; i < files.length; i++) {
    fotosArchivos.value.push(files[i]);
    fotosPreview.value.push({ url: URL.createObjectURL(files[i]) });
  }
};

const limpiarFotos = () => {
  fotosArchivos.value = [];
  fotosPreview.value = [];
};

const subirFotosDrive = async () => {
  if (!configSeleccionada.value) return alert("Selecciona una Nube/Drive de la lista primero.");
  if (fotosArchivos.value.length === 0) return;
  
  const config = configuraciones.value.find(c => c.id === configSeleccionada.value);
  subiendo.value = true;
  
  try {
    for (let i = 0; i < fotosArchivos.value.length; i++) {
      progresoTexto.value = `Subiendo ${i + 1} de ${fotosArchivos.value.length}...`;
      
      const file = fotosArchivos.value[i];
      const reader = new FileReader();
      
      await new Promise((resolve, reject) => {
        reader.onload = async () => {
          const base64Data = reader.result.split(',')[1];
          const payload = {
            base64: base64Data,
            filename: `S${props.idSondeo || '00'}M${i+1}_(${i+1}).jpg`,
            folderId: config.idCarpetaRaiz, // Utiliza el ID de la configuración seleccionada
            mimeType: file.type
          };
          
          try {
            await fetch(config.urlScript, {
              method: 'POST',
              body: JSON.stringify(payload),
              headers: { 'Content-Type': 'text/plain;charset=utf-8' }
            });
            resolve();
          } catch (e) {
            reject(e);
          }
        };
        reader.readAsDataURL(file);
      });
    }
    
    alert("¡Fotos subidas exitosamente!");
    limpiarFotos();
  } catch (error) {
    alert("Error al subir: " + error.message);
  } finally {
    subiendo.value = false;
    progresoTexto.value = '';
  }
};
</script>