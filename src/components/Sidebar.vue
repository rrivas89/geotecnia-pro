<template>
  <div>
    <!-- Fondo oscuro (Overlay) -->
    <div v-if="isOpen" @click="$emit('close')" class="fixed inset-0 bg-black/60 z-40"></div>
    
    <!-- Menú Lateral -->
    <div :class="isOpen ? 'translate-x-0' : '-translate-x-full'" class="fixed top-0 left-0 w-64 h-full bg-superficie z-50 transform transition-transform duration-300 flex flex-col overflow-y-auto">
      <div class="p-6 border-b border-fondo flex justify-between items-center">
        <div class="text-[20px] font-bold text-acento">Geotecnia Pro</div>
        <button @click="$emit('close')" class="text-etiqueta text-[28px]">&times;</button>
      </div>
      
      <div class="flex-1 flex flex-col py-4">
        <button @click="seleccionar('inicio')" :class="activeTab === 'inicio' ? 'active text-white' : 'text-etiqueta'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">1. Inicio</button>
        <button @click="seleccionar('campo')" :class="activeTab === 'campo' ? 'active text-white' : 'text-etiqueta'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">2. Registro Muestras</button>
        <button @click="seleccionar('nq')" :class="activeTab === 'nq' ? 'active text-white' : 'text-etiqueta'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">3. Tubería NQ</button>
        <button @click="seleccionar('resumen')" :class="activeTab === 'resumen' ? 'active text-white' : 'text-etiqueta'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">4. Resumen & PDF</button>
        <button @click="seleccionar('fotos')" :class="activeTab === 'fotos' ? 'active text-white' : 'text-[#38BDF8]'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">📸 Fotos de Campo</button>
        
        <div class="h-[1px] bg-fondo my-2"></div>
        
        <button @click="seleccionar('reportes')" :class="activeTab === 'reportes' ? 'active text-white' : 'text-[#10B981]'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium">📊 Reportes y Avance</button>
        <button v-if="isAdmin" @click="seleccionar('admin')" :class="activeTab === 'admin' ? 'active text-white' : 'text-[#F59E0B]'" class="sidebar-link text-left px-6 py-4 text-[15px] font-medium hidden sm:block">👑 Panel Admin</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Recibe los datos desde App.vue
const props = defineProps({
  isOpen: Boolean,
  activeTab: String,
  isAdmin: Boolean
});

// Emite eventos de regreso a App.vue
const emit = defineEmits(['close', 'change-tab']);

const seleccionar = (tab) => {
  emit('change-tab', tab); // Cambia la pestaña
  emit('close'); // Cierra el menú automáticamente
};
</script>

<style scoped>
.sidebar-link { border-left: 4px solid transparent; transition: all 0.2s ease; }
.sidebar-link.active { border-left-color: #38BDF8; color: #38BDF8; background-color: rgba(56, 189, 248, 0.1); }
</style>