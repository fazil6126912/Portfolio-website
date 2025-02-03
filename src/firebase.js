import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRxkkhKKwi6QGE9BB9iwGPkvD_kR9t_xo",
  authDomain: "my-portofolio-fazil.firebaseapp.com",
  projectId: "my-portofolio-fazil",
  storageBucket: "my-portofolio-fazil.firebasestorage.app",
  messagingSenderId: "628437218139",
  appId: "1:628437218139:web:2ce284d1254e348193607e",
  measurementId: "G-DJN4YXZ4P2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };