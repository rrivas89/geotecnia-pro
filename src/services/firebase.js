import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore, persistentLocalCache } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2QU3c02jKh4P6h0MQDdlx2pGgzdh_9gY",
  authDomain: "app-geotecnia-4de8d.firebaseapp.com",
  projectId: "app-geotecnia-4de8d",
  storageBucket: "app-geotecnia-4de8d.firebasestorage.app",
  messagingSenderId: "222134670710",
  appId: "1:222134670710:web:527c58e0c1932c8e039657"
};

const app = initializeApp(firebaseConfig);

// Caché persistente vital para el modo offline
const db = initializeFirestore(app, { 
  localCache: persistentLocalCache() 
});

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };