// config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyCZNW0Oy75PzsvaP_25YZFSkyCpLmOjL7M",
  authDomain: "trackmybus-907b4.firebaseapp.com",
  databaseURL: "https://trackmybus-907b4-default-rtdb.firebaseio.com",
  projectId: "trackmybus-907b4",
  storageBucket: "trackmybus-907b4.firebasestorage.app",
  messagingSenderId: "497112520163",
  appId: "1:497112520163:web:1cb3d59d912c16114dbcd6",
  measurementId: "G-DB40P77VFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database and auth
export const db = getDatabase(app);
export const auth = getAuth(app);
