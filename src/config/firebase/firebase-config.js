import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyA-hSP5gL0SpJTlCGVmaswfDree60XX__4",
    authDomain: "institute-managment-syst-c0d49.firebaseapp.com",
    projectId: "institute-managment-syst-c0d49",
    storageBucket: "institute-managment-syst-c0d49.appspot.com",
    messagingSenderId: "639986028057",
    appId: "1:639986028057:web:5241a52cc5841d2dd86488",
    measurementId: "G-76MVP0LMM9"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app;
