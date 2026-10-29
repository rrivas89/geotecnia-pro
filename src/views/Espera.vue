<template>
  <div class="flex-1 flex flex-col items-center justify-center p-6 z-40 bg-fondo absolute inset-0">
     <div class="w-full max-w-sm bg-superficie p-8 rounded-[32px] shadow-2xl text-center flex flex-col gap-4 items-center">
        <h2 class="text-[20px] font-bold text-white">Cuenta en Revisión</h2>
        <p class="text-[14px] text-etiqueta">Espera a que el Administrador apruebe tu acceso.</p>
        <button @click="cerrarSesion" class="mt-4 text-[14px] text-acento font-semibold border border-acento/30 px-6 py-2 rounded-full">
          Cerrar Sesión
        </button>
     </div>
  </div>
</template>

<script setup>
import { auth } from '../services/firebase';
import { signOut } from 'firebase/auth';

const cerrarSesion = () => {
  signOut(auth);
};
</script>