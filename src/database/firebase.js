// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzz5X-SGWo2S6LUPdcj-kjG4CQzqD8roU",
  authDomain: "tinder-clone-2afa2.firebaseapp.com",
  projectId: "tinder-clone-2afa2",
  storageBucket: "tinder-clone-2afa2.firebasestorage.app",
  messagingSenderId: "53237928417",
  appId: "1:53237928417:web:2367f5cb0b9ee5830fc2a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
