
import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("⚠️ Please login to continue.");
    window.location.href = "login.html";
  }
});
