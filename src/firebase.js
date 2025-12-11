// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firestore
import { getFirestore } from "firebase/firestore";

// Import Auth
import { getAuth } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCEA009y8NvtSnVcUnbzy3PScoT2Rp2c_0",
  authDomain: "leonova-d21f1.firebaseapp.com",
  projectId: "leonova-d21f1",
  storageBucket: "leonova-d21f1.firebasestorage.app",
  messagingSenderId: "744375937924",
  appId: "1:744375937924:web:fd9fb71685dd33ad52cbd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore + Auth
export const db = getFirestore(app);
export const auth = getAuth(app);