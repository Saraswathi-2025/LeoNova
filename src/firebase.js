import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEA009y8NvtSnVcUnbzy3PScoT2Rp2c_0",
  authDomain: "leonova-d21f1.firebaseapp.com",
  projectId: "leonova-d21f1",
  storageBucket: "leonova-d21f1.appspot.com",
  messagingSenderId: "744375937924",
  appId: "1:744375937924:web:fd9fb71685dd33ad52cbd1",
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// 🗄 Firestore
export const db = getFirestore(app);

// 🛡 Admin allow-list (frontend protection)
export const adminEmails = Object.freeze([
  "poorvi162025@gmail.com",
]);

export default app;