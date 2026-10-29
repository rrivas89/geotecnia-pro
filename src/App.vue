<template>
  <div class="flex-1 flex flex-col min-h-screen relative bg-fondo">
    
    <Login v-if="estadoApp === 'login'" />
    <Espera v-else-if="estadoApp === 'espera'" />
    
    <!-- ESQUELETO DE LA APP PRINCIPAL -->
    <div v-else-if="estadoApp === 'app'" class="flex-1 flex flex-col">
      
      <!-- Componente Menú Lateral -->
      <Sidebar 
        :isOpen="menuAbierto" 
        :activeTab="pestanaActiva"
        :isAdmin="rolUsuario === 'admin'"
        @close="menuAbierto = false"
        @change-tab="cambiarPestana"
      />

      <!-- Componente Cabecera -->
      <Header 
        :title="tituloActual"
        :userRole="rolUsuario"
        :userEmail="emailUsuario"
        @open-sidebar="menuAbierto = true"
        @logout="cerrarSesionApp"
      />

<!-- CONTENEDOR DINÁMICO DE VISTAS -->
      <div class="flex-1 overflow-y-auto">
        
<!-- Vista Inicio -->
        <Inicio 
          v-if="pestanaActiva === 'inicio'" 
          @proyecto-seleccionado="id => idProyectoGlobal = id"
          @sondeo-seleccionado="id => idSondeoGlobal = id"
        />

        <!-- Vista Registro de Campo -->
        <RegistroCampo 
          v-else-if="pestanaActiva === 'campo'" 
          :idProyecto="idProyectoGlobal"
          :idSondeo="idSondeoGlobal"
        />

        <!-- Vista Tubería NQ -->
        <TuberiaNQ 
          v-else-if="pestanaActiva === 'nq'" 
          :idProyecto="idProyectoGlobal"
          :idSondeo="idSondeoGlobal"
        />
		
		<!-- Vista Resumen y PDF -->
        <ResumenPDF 
          v-else-if="pestanaActiva === 'resumen'" 
          :idProyecto="idProyectoGlobal"
          :idSondeo="idSondeoGlobal"
        />
		<!-- Vista de Reportes y Avance -->
        <Reportes 
          v-else-if="pestanaActiva === 'reportes'" 
        />
		<!-- Vista Panel Admin -->
        <Admin 
          v-else-if="pestanaActiva === 'admin'" 
        />
		<!-- Vista de Fotos -->
        <Fotos 
          v-else-if="pestanaActiva === 'fotos'" 
          :idProyecto="idProyectoGlobal"
          :idSondeo="idSondeoGlobal"
        />

        <!-- Vista Temporal para las demás pestañas -->
        <div v-else class="p-6 flex flex-col items-center justify-center text-center mt-10">
          <div class="w-24 h-24 bg-superficie rounded-full flex items-center justify-center mb-4 border-2 border-dashed border-acento">
            <span class="text-[32px]">🚧</span>
          </div>
          <h2 class="text-[20px] font-bold text-white mb-2">Pantalla en construcción</h2>
          <p class="text-[14px] text-etiqueta">Próximamente: <strong>{{ tituloActual }}</strong></p>
        </div>

      </div>

    </div>

    <div v-else class="flex-1 flex items-center justify-center">
      <span class="text-acento font-bold animate-pulse">Cargando sistema...</span>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { auth, db } from './services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';

// Componentes
import Login from './views/Login.vue';
import Espera from './views/Espera.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import Inicio from './views/Inicio.vue';
import TuberiaNQ from './views/TuberiaNQ.vue';
import RegistroCampo from './views/RegistroCampo.vue';
import ResumenPDF from './views/ResumenPDF.vue';
import Reportes from './views/Reportes.vue';
import Admin from './views/Admin.vue';
import Fotos from './views/Fotos.vue';

// Estado global de la App
const estadoApp = ref('cargando');
const rolUsuario = ref('');
const emailUsuario = ref('');
const idProyectoGlobal = ref('');
const idSondeoGlobal = ref('');

// Estado de navegación
const menuAbierto = ref(false);
const pestanaActiva = ref('inicio');

// Diccionario de Títulos
const titulos = {
  'inicio': 'Inicio',
  'campo': 'Registro de Campo',
  'nq': 'Tubería NQ',
  'resumen': 'Resumen & PDF',
  'fotos': 'Fotos de Campo',
  'reportes': 'Reportes y Avance',
  'admin': 'Panel Admin'
};

// Computado reactivo para el título de la cabecera
const tituloActual = computed(() => titulos[pestanaActiva.value]);

const cambiarPestana = (tab) => {
  pestanaActiva.value = tab;
};

onMounted(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      emailUsuario.value = user.email.split('@')[0];
      const esJefe = user.email === "robertsrivas89@gmail.com" || user.email.includes("admin");
      const userRef = doc(db, "Usuarios", user.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        await setDoc(userRef, { 
          email: user.email, 
          rol: esJefe ? 'admin' : 'operador', 
          estado: esJefe ? 'activo' : 'creadoEn',
          creadoEn: serverTimestamp() 
        });
      }

      onSnapshot(userRef, (docSnap) => {
         const userData = docSnap.data();
         if(userData && userData.estado === 'activo') {
            rolUsuario.value = userData.rol;
            estadoApp.value = 'app';
         } else {
            estadoApp.value = 'espera';
         }
      });
    } else {
      estadoApp.value = 'login';
    }
  });
});

const cerrarSesionApp = () => signOut(auth);
</script>