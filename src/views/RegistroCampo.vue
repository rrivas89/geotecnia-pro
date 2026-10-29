<template>
  <div class="px-6 mt-6 flex flex-col gap-6 w-full max-w-4xl mx-auto mb-6">
    
    <!-- PROFUNDIDADES -->
    <div class="flex gap-4">
      <div class="flex-1 bg-superficie rounded-[24px] p-4 shadow-lg">
        <label class="block text-[11px] uppercase text-etiqueta mb-2 text-center font-semibold">Prof. Inicial</label>
        <input type="number" v-model.number="profIni" class="text-center text-[20px] font-bold w-full bg-transparent outline-none text-white">
      </div>
      <div class="flex-1 bg-superficie rounded-[24px] p-4 shadow-lg">
        <label class="block text-[11px] uppercase text-etiqueta mb-2 text-center font-semibold">Prof. Final</label>
        <input type="number" v-model.number="profFin" class="text-center text-[20px] font-bold w-full bg-transparent outline-none text-white">
      </div>
    </div>

    <!-- TIPO DE MUESTREO Y DATOS -->
    <div class="bg-superficie rounded-[24px] p-5 shadow-lg">
      <label class="block text-[11px] uppercase text-etiqueta mb-3 font-semibold">Tipo Muestreo</label>
      <div class="flex flex-wrap gap-2">
        <button v-for="tipo in ['Standard', 'Shelby', 'NQ', 'Manual']" :key="tipo"
                @click="tipoMuestreo = tipo"
                :class="tipoMuestreo === tipo ? 'bg-acento text-fondo font-bold' : 'bg-fondo text-white border border-fondo font-medium'"
                class="rounded-full py-2 px-4 text-[12px] transition-colors">
          {{ tipo }}
        </button>
      </div>

      <div class="flex items-center gap-4 mt-5">
        <div class="flex-1">
          <label class="block text-[11px] uppercase text-etiqueta mb-2 font-semibold">Muestra N°</label>
          <input type="number" v-model.number="muestraNum" class="bg-fondo rounded-[16px] px-4 py-3 text-[16px] font-bold text-center w-full outline-none text-white">
        </div>
        <div class="flex-1">
          <label class="block text-[11px] uppercase text-etiqueta mb-2 font-semibold">Recuperación (cm)</label>
          <input type="number" v-model.number="recuperacion" class="bg-fondo rounded-[16px] px-4 py-3 text-[16px] font-bold text-center w-full outline-none text-white">
        </div>
      </div>
    </div>

    <!-- GOLPES SPT (AQUÍ ESTÁ EL CAMBIO PARA INCLUIR SHELBY) -->
    <div v-if="['Standard', 'Shelby'].includes(tipoMuestreo)" class="bg-superficie rounded-[24px] p-5 shadow-lg animate-fade-in">
       <label class="block text-[11px] uppercase text-etiqueta mb-3 font-semibold text-center">Golpes SPT</label>
       <div class="grid grid-cols-3 gap-3">
         <input type="number" v-model.number="spt1" class="bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white" placeholder="0-15">
         <input type="number" v-model.number="spt2" class="bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white" placeholder="15-30">
         <input type="number" v-model.number="spt3" class="bg-fondo rounded-[16px] py-4 text-center text-[18px] font-bold w-full outline-none text-white" placeholder="30-45">
       </div>
    </div>

    <!-- NIVEL FREÁTICO -->
    <div class="bg-superficie rounded-[24px] p-5 shadow-lg">
      <label class="block text-[11px] uppercase text-etiqueta mb-3 font-semibold">Nivel Freático</label>
      <div class="flex gap-2">
        <button @click="nf = 'SI'" :class="nf === 'SI' ? 'bg-fondo border border-fondo text-white font-medium' : 'bg-acento text-fondo font-bold'" class="flex-1 rounded-[16px] py-3 text-[14px] transition-colors">SI</button>
        <button @click="nf = 'NO'" :class="nf === 'NO' ? 'bg-fondo border border-fondo text-white font-medium' : 'bg-acento text-fondo font-bold'" class="flex-1 rounded-[16px] py-3 text-[14px] transition-colors">NO</button>
      </div>
    </div>

    <!-- DESCRIPCIÓN VISUAL CON IA -->
    <div class="bg-superficie rounded-[24px] p-5 shadow-lg">
      <div class="flex justify-between items-center mb-3">
         <label class="block text-[11px] uppercase text-etiqueta font-semibold">Descripción Visual</label>
         <button @click="panelIAVisible = !panelIAVisible" class="text-[10px] bg-gradient-to-r from-purple-500 to-[#38BDF8] text-white px-3 py-1.5 rounded-full font-bold shadow-md active:scale-95 transition-transform">
           ✨ Asistente IA
         </button>
      </div>

      <!-- Panel de IA Desplegable -->
      <div v-if="panelIAVisible" class="flex flex-col gap-3 mb-3 p-4 bg-fondo border border-purple-500/30 rounded-[16px] animate-fade-in">
         <div class="text-[10px] text-purple-400 font-bold uppercase tracking-widest text-center">Analizar Litología</div>
         <div class="flex gap-2">
            <label class="flex-1 bg-superficie border border-dashed border-purple-500/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95">
               <span class="text-[20px]">📷</span><span class="text-[10px] font-bold text-purple-400">Cámara</span>
               <input type="file" accept="image/*" capture="environment" class="hidden" @change="procesarFotosIA">
            </label>
            <label class="flex-1 bg-superficie border border-dashed border-purple-500/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 cursor-pointer active:scale-95">
               <span class="text-[20px]">🖼️</span><span class="text-[10px] font-bold text-white">Galería</span>
               <input type="file" multiple accept="image/jpeg, image/png, image/jpg" class="hidden" @change="procesarFotosIA">
            </label>
         </div>
         
         <div v-if="fotosIA.length > 0" class="flex flex-wrap gap-2 justify-center mt-1">
            <div v-for="(foto, index) in fotosIA" :key="index" class="relative w-12 h-12">
               <button @click="fotosIA.splice(index, 1)" class="absolute -top-2 -right-2 bg-[#EF4444] text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold shadow-md z-10">✕</button>
               <img :src="foto.base64" class="w-full h-full object-cover rounded-lg border border-purple-500">
            </div>
         </div>
         
         <button v-if="fotosIA.length > 0" @click="ejecutarIA" :disabled="analizandoIA" class="w-full bg-purple-600 text-white rounded-full py-2 text-[12px] font-bold active:scale-95 mt-1 disabled:opacity-50">
           {{ analizandoIA ? estadoIA : 'Analizar Muestra con IA' }}
         </button>
      </div>

      <textarea v-model="descripcion" class="bg-fondo rounded-[16px] p-4 text-[14px] min-h-[100px] w-full outline-none text-white" placeholder="Ej: Arcilla limosa, humedad baja..."></textarea>
    </div>

    <button @click="guardarRegistro" :disabled="cargando" class="w-full bg-acento text-fondo rounded-full min-h-[56px] text-[16px] font-bold tracking-wide active:scale-95 transition-transform mb-6">
      {{ cargando ? 'Guardando...' : 'Guardar Muestra' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { db } from '../services/firebase';
import { collection, addDoc, onSnapshot, query, orderBy, limit, serverTimestamp } from 'firebase/firestore';

const props = defineProps({ idProyecto: String, idSondeo: String });

const profIni = ref(0);
const profFin = ref(null);
const tipoMuestreo = ref('Standard');
const muestraNum = ref(1);
const recuperacion = ref(null);
const spt1 = ref(null);
const spt2 = ref(null);
const spt3 = ref(null);
const nf = ref('NO');
const descripcion = ref('');
const cargando = ref(false);

// Estado IA
const panelIAVisible = ref(false);
const fotosIA = ref([]);
const analizandoIA = ref(false);
const estadoIA = ref('');

let unsubscribeDocs = null;

const escucharUltimoRegistro = () => {
  if (!props.idProyecto || !props.idSondeo) return;
  if (unsubscribeDocs) unsubscribeDocs();
  const q = query(collection(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/Registros`), orderBy("profIni", "desc"), limit(1));
  unsubscribeDocs = onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      const ultimo = snapshot.docs[0].data();
      profIni.value = ultimo.profFin || 0;
      muestraNum.value = (ultimo.muestraNum || 0) + 1;
    } else {
      profIni.value = 0; muestraNum.value = 1;
    }
  });
};

watch(() => props.idSondeo, escucharUltimoRegistro);
onMounted(escucharUltimoRegistro);
onUnmounted(() => { if (unsubscribeDocs) unsubscribeDocs(); });

// Comprimir imagen a Base64 usando Canvas
const comprimirImagen = (file, maxWidth = 800) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ratio = maxWidth / img.width;
        canvas.width = maxWidth;
        canvas.height = img.height * ratio;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
    };
  });
};

const procesarFotosIA = async (event) => {
  const files = event.target.files;
  if (!files.length) return;
  for (let i = 0; i < files.length; i++) {
    const b64 = await comprimirImagen(files[i]);
    fotosIA.value.push({ file: files[i], base64: b64 });
  }
};

// ==========================================
// CONEXIÓN DIRECTA A GEMINI REST API (CURL)
// ==========================================
const generarConReintentos = async (payload, retries = 3, delayMs = 2000) => {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 503) throw new Error("503");
        throw new Error(data.error?.message || `HTTP Error ${response.status}`);
      }

      if (data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error("La IA no devolvió ningún texto.");
      }

    } catch (error) {
      if (i === retries - 1) throw error;
      if (error.message.includes("503")) {
        estadoIA.value = `Red ocupada, reintentando (${i + 1}/${retries})...`;
        await new Promise(resolve => setTimeout(resolve, delayMs * (i + 1)));
      } else {
        throw error;
      }
    }
  }
};

const ejecutarIA = async () => {
  if (!fotosIA.value.length) return;
  analizandoIA.value = true;
  estadoIA.value = 'Analizando Litología...';

  try {
    const prompt = `Eres un ingeniero geotecnista. Describe la litología de la muestra de suelo en la foto usando estrictamente el Sistema Unificado de Clasificación de Suelos (SUCS). 
    Incluye: tipo de suelo, color, humedad relativa, plasticidad (si aplica), consistencia o compacidad, y tamaño de granos. 
    Genera un solo párrafo técnico y directo. Evita introducciones como "La imagen muestra".`;

    const parts = [{ text: prompt }];

    // Convertir las fotos al formato JSON exacto de la guía
    fotosIA.value.forEach(foto => {
      const base64Data = foto.base64.split(',')[1];
      parts.push({
        inlineData: { mimeType: "image/jpeg", data: base64Data }
      });
    });

    const payload = { contents: [{ parts: parts }] };
    
    const resultado = await generarConReintentos(payload);
    
    descripcion.value = resultado;
    fotosIA.value = [];
    panelIAVisible.value = false;
  } catch (error) {
    alert("Error de IA: " + error.message);
  } finally {
    analizandoIA.value = false;
    estadoIA.value = '';
  }
};

// ==========================================

const guardarRegistro = async () => {
  if (!props.idSondeo) return alert("Selecciona un sondeo primero.");
  if (profFin.value === null || profFin.value <= profIni.value) return alert("Profundidad final inválida.");

  cargando.value = true;
  try {
    await addDoc(collection(db, `Proyectos/${props.idProyecto}/Sondeos/${props.idSondeo}/Registros`), {
      profIni: profIni.value, profFin: profFin.value, tipoMuestra: tipoMuestreo.value, muestraNum: muestraNum.value,
      spt1: spt1.value, spt2: spt2.value, spt3: spt3.value, nf: nf.value, recuperacion: recuperacion.value || 0,
      descripcion: descripcion.value, creadoEn: serverTimestamp()
    });
    profFin.value = null; spt1.value = null; spt2.value = null; spt3.value = null; recuperacion.value = null; descripcion.value = '';
  } catch (error) {
    alert("Error al guardar: " + error.message);
  } finally {
    cargando.value = false;
  }
};
</script>