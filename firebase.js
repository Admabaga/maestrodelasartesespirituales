// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAy3CtuTNPBsjQfBII6k6XTwtUmrDXrta4",
  authDomain: "maestro-ac825.firebaseapp.com",
  projectId: "maestro-ac825",
  storageBucket: "maestro-ac825.firebasestorage.app",
  messagingSenderId: "459975148680",
  appId: "1:459975148680:web:1504f1b6066290b7e9cb3d",
  measurementId: "G-8D8L24J91Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
