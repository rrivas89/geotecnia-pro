<template>
  <div class="flex flex-col px-5 py-3 bg-fondo border-b border-superficie z-30 relative">
    <div class="flex justify-between items-center mb-2">
      <div class="flex items-center gap-3">
        <!-- Botón Hamburguesa -->
        <button @click="$emit('open-sidebar')">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <h1 class="text-[18px] font-bold text-white">{{ title }}</h1>
      </div>
    </div>
    <div class="flex justify-between items-center pl-1">
      <span class="text-[10px] text-acento font-medium uppercase tracking-wider">
        {{ userRole === 'admin' ? 'Admin ' : 'Operador 👷‍♂️' }} • {{ userEmail }}
      </span>
      <button @click="$emit('logout')" class="text-[10px] text-[#EF4444] border border-[#EF4444]/30 px-3 py-1 rounded-full font-semibold">Salir</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  userRole: String,
  userEmail: String
});

defineEmits(['open-sidebar', 'logout']);
</script>