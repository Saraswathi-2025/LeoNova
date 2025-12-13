// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth, googleProvider, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  // Create account (email/password)
  async function signup({ name, email, password }) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (name) await updateProfile(res.user, { displayName: name });
    // create a profile doc in Firestore (optional)
    const userDoc = doc(db, "users", res.user.uid);
    await setDoc(userDoc, {
      name: name || null,
      email,
      createdAt: new Date()
    });
    return res.user;
  }

  // login with email/password
  function login({ email, password }) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google login
  async function loginWithGoogle() {
    const res = await signInWithPopup(auth, googleProvider);
    // ensure user doc exists
    const userDoc = doc(db, "users", res.user.uid);
    const snap = await getDoc(userDoc);
    if (!snap.exists()) {
      await setDoc(userDoc, {
        name: res.user.displayName || null,
        email: res.user.email,
        createdAt: new Date()
      });
    }
    return res.user;
  }

  function logout() {
    return signOut(auth);
  }

  // Check admin flag in Firestore (collection "admins" doc id = uid)
  async function checkAdmin(uid) {
    if (!uid) return false;
    const adminDoc = doc(db, "admins", uid);
    const snap = await getDoc(adminDoc);
    return snap.exists();
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const admin = await checkAdmin(u.uid);
        setIsAdmin(admin);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = {
    user,
    isAdmin,
    signup,
    login,
    loginWithGoogle,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* optionally show spinner while loading */}
    </AuthContext.Provider>
  );
}