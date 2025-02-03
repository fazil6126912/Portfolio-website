import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRxkkhKKwi6QGE9BB9iwGPkvD_kR9t_xo",
    authDomain: "my-portofolio-fazil.firebaseapp.com",
    projectId: "my-portofolio-fazil",
    storageBucket: "my-portofolio-fazil.firebasestorage.app",
    messagingSenderId: "628437218139",
    appId: "1:628437218139:web:2ce284d1254e348193607e",
    measurementId: "G-DJN4YXZ4P2"
  };
  

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };