// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAl8ETUDiGAgD5MTCOnR4P_jGocFuazWXI",
  authDomain: "animesites-4e3f6.firebaseapp.com",
  projectId: "animesites-4e3f6",
  storageBucket: "animesites-4e3f6.firebasestorage.app",
  messagingSenderId: "680835475865",
  appId: "1:680835475865:web:3a09af44119772ef56cb08",
  measurementId: "G-1HQJW4Z26G"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, onAuthStateChanged, db };
