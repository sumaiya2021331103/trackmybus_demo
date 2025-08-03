import { auth } from './config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const email = document.getElementById('email');
const password = document.getElementById('password');
const msg = document.getElementById('msg');

window.signup = function () {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.innerText = "✅ Sign up successful!";
    })
    .catch((e) => {
      msg.innerText = "❌ " + e.message;
    });
}

window.login = function () {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => {
      msg.innerText = "✅ Login successful!";
      setTimeout(() => {
        window.location.href = "driver_dashboard.html"; // Will create this file next
      }, 1000);
    })
    .catch((e) => {
      msg.innerText = "❌ " + e.message;
    });
}
