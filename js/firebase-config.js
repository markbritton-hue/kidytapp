import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfBr18SNWaA0RWL5mKwbVUgKfTyOnODXM",
  authDomain: "kidytapp.firebaseapp.com",
  projectId: "kidytapp",
  storageBucket: "kidytapp.firebasestorage.app",
  messagingSenderId: "694066664420",
  appId: "1:694066664420:web:dcb7405f50e3404f6b6df1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Fixed email used internally for parent Firebase Auth account
export const PARENT_EMAIL = "parent@kidytapp.app";
