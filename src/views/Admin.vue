<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6">
    
    <!-- 1. GESTIÓN DE USUARIOS -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg">
      <h2 class="text-[12px] text-[#F59E0B] font-bold uppercase tracking-widest mb-4">Gestión de Operadores</h2>
      <div class="flex flex-col gap-3">
         <div v-for="user in usuarios" :key="user.id" class="bg-fondo rounded-[16px] p-4 flex justify-between items-center border border-superficie">
            <div class="flex flex-col">
               <span class="text-[14px] font-bold text-white">{{ user.email }}</span>
               <span :class="user.estado === 'activo' ? 'text-[#10B981] bg-[#10B981]/10' : 'text-[#F59E0B] bg-[#F59E0B]/10'" class="text-[10px] uppercase font-bold px-2 py-0.5 rounded w-max mt-1">
                 {{ user.estado }}
               </span>
            </div>
            <button @click="cambiarEstadoUsuario(user)" :class="user.estado === 'activo' ? 'text-[#EF4444] border-[#EF4444]/30' : 'text-[#10B981] border-[#10B981]/30'" class="text-[11px] font-bold border px-3 py-1.5 rounded-full transition-transform active:scale-95">
               {{ user.estado === 'activo' ? 'Bloquear' : 'Aprobar' }}
            </button>
         </div>
         <div v-if="usuarios.length === 0" class="text-center text-[12px] text-etiqueta py-2">
           No hay operadores registrados.
         </div>
      </div>
    </div>

    <!-- 2. GESTIÓN DE BASE DE DATOS -->
    <div class="bg-superficie rounded-[32px] p-6 shadow-lg">
      <h2 class="text-[12px] text-[#F59E0B] font-bold uppercase tracking-widest mb-4">Estructura de Datos</h2>
      
      <!-- Selector Desplegable de Proyecto -->
      <div class="bg-fondo rounded-[20px] px-4 py-1 border border-transparent focus-within:border-[#F59E0B]/50 mb-4 transition-colors">
        <select v-model="proyectoSeleccionado" class="text-[16px] font-medium py-3 w-full bg-transparent outline-none text-white appearance-none cursor-pointer">
          <option :value="null" disabled>-- Seleccionar Proyecto a Editar --</option>
          <option v-for="pry in proyectos" :key="pry.id" :value="pry"class="text-black">{{ pry.nombre }}</option>
        </select>
      </div>

      <!-- Panel del Proyecto Seleccionado -->
      <div v-if="proyectoSeleccionado" class="flex flex-col gap-4 animate-fade-in">
         <div class="bg-fondo rounded-[16px] p-4 border border-[#F59E0B]/30">
            
            <div class="flex justify-between items-center mb-4 pb-3 border-b border-superficie">
               <div class="font-bold text-[#F59E0B] text-[16px] uppercase">{{ proyectoSeleccionado.nombre }}</div>
               <div class="flex gap-2">
                  <button @click="editarProyecto" class="text-[11px] bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform">✏️ Renombrar</button>
                  <button @click="borrarProyecto" class="text-[11px] bg-[#EF4444]/10 text-[#EF4444] border border-[#EF4444]/30 px-3 py-1.5 rounded-full font-bold active:scale-95 transition-transform">🗑 Borrar Proyecto</button>
               </div>
            </div>
            
            <h3 class="text-[11px] text-etiqueta uppercase tracking-widest mb-3">Sondeos Asociados:</h3>
            
            <div class="flex flex-col gap-2 pl-2 border-l-2 border-[#F59E0B]/20">
               <div v-for="snd in sondeosProyecto" :key="snd.id" class="flex justify-between items-center bg-superficie px-3 py-3 rounded-[12px]">
                  <span class="text-[14px] text-white font-medium">{{ snd.nombre }}</span>
                  <div class="flex gap-2">
                     <button @click="editarSondeo(snd)" class="text-[11px] text-[#F59E0B] font-bold active:scale-95 transition-transform">✏️ Editar</button>
                     <button @click="borrarSondeo(snd)" class="text-[11px] text-[#EF4444] font-bold active:scale-95 transition-transform">🗑 Borrar</button>
                  </div>
               </div>
               <div v-if="sondeosProyecto.length === 0" class="text-[11px] text-etiqueta py-2">
                 No hay sondeos en este proyecto.
               </div>
            </div>

         </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { db } from '../services/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const usuarios = ref([]);
const proyectos = ref([]);
const proyectoSeleccionado = ref(null);
const sondeosProyecto = ref([]);

let unsUsuarios = null;
let unsProyectos = null;
let unsSondeos = null;

// Escuchar Usuarios y Proyectos al montar
onMounted(() => {
  const qU = query(collection(db, "Usuarios"), orderBy("creadoEn", "desc"));
  unsUsuarios = onSnapshot(qU, (snap) => {
     // Filtramos para no mostrar cuentas de administrador en la lista de gestión
     usuarios.value = snap.docs.map(d => ({ id: d.id, ...d.data() })).filter(u => u.rol !== 'admin');
  });

  const qP = query(collection(db, "Proyectos"), orderBy("creadoEn", "desc"));
  unsProyectos = onSnapshot(qP, (snap) => {
     proyectos.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));
     
     // Mantener seleccionado el proyecto si se actualizó su nombre en tiempo real
     if (proyectoSeleccionado.value) {
        const updated = proyectos.value.find(p => p.id === proyectoSeleccionado.value.id);
        proyectoSeleccionado.value = updated || null;
     }
  });
});

// Cuando se selecciona un proyecto, descargar sus sondeos
watch(proyectoSeleccionado, (nuevoPry) => {
  if (unsSondeos) { unsSondeos(); unsSondeos = null; }
  
  if (nuevoPry) {
     const qS = query(collection(db, `Proyectos/${nuevoPry.id}/Sondeos`), orderBy("creadoEn", "desc"));
     unsSondeos = onSnapshot(qS, (snap) => {
        sondeosProyecto.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));
     });
  } else {
     sondeosProyecto.value = [];
  }
});

onUnmounted(() => {
  if (unsUsuarios) unsUsuarios();
  if (unsProyectos) unsProyectos();
  if (unsSondeos) unsSondeos();
});

// --- FUNCIONES DE BASE DE DATOS ---

const cambiarEstadoUsuario = async (user) => {
  const nuevoEstado = user.estado === 'activo' ? 'pendiente' : 'activo';
  try { 
    await updateDoc(doc(db, "Usuarios", user.id), { estado: nuevoEstado }); 
  } catch (e) { alert("Error al cambiar estado: " + e.message); }
};

const editarProyecto = async () => {
  const nuevoNombre = prompt("Ingresa el nuevo nombre del proyecto:", proyectoSeleccionado.value.nombre);
  if (!nuevoNombre || nuevoNombre === proyectoSeleccionado.value.nombre) return;
  
  try { 
    await updateDoc(doc(db, "Proyectos", proyectoSeleccionado.value.id), { nombre: nuevoNombre }); 
  } catch (e) { alert("Error al editar: " + e.message); }
};

const borrarProyecto = async () => {
  if (!confirm(`¿Estás seguro de ELIMINAR el proyecto "${proyectoSeleccionado.value.nombre}" y todos sus sondeos? Esta acción es irreversible.`)) return;
  
  try {
     await deleteDoc(doc(db, "Proyectos", proyectoSeleccionado.value.id));
     proyectoSeleccionado.value = null; // Limpiar selección tras borrar
  } catch (e) { alert("Error al eliminar: " + e.message); }
};

const editarSondeo = async (snd) => {
  const nuevoNombre = prompt("Ingresa el nuevo nombre del sondeo (Ej: S-02):", snd.nombre);
  if (!nuevoNombre || nuevoNombre === snd.nombre) return;
  
  try { 
    await updateDoc(doc(db, `Proyectos/${proyectoSeleccionado.value.id}/Sondeos`, snd.id), { nombre: nuevoNombre }); 
  } catch (e) { alert("Error al editar: " + e.message); }
};

const borrarSondeo = async (snd) => {
  if (!confirm(`¿Eliminar permanentemente el sondeo "${snd.nombre}"?`)) return;
  
  try { 
    await deleteDoc(doc(db, `Proyectos/${proyectoSeleccionado.value.id}/Sondeos`, snd.id)); 
  } catch (e) { alert("Error al eliminar: " + e.message); }
};
</script>