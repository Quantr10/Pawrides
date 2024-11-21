// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7YV9pMoocKdbQHbu_EAcRIpy7_eDb5tw",
  authDomain: "paw-ride-2024.firebaseapp.com",
  projectId: "paw-ride-2024",
  storageBucket: "paw-ride-2024.firebasestorage.app",
  messagingSenderId: "1015353413843",
  appId: "1:1015353413843:web:4c3fbf1b61d3da587d4426",
  measurementId: "G-XYFTHJQYSH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
