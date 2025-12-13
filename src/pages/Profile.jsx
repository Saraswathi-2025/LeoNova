// src/pages/Profile.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return null;
  return (
    <div style={{padding:40}}>
      <h2>Profile</h2>
      <p>Name: {user.displayName || "—"}</p>
      <p>Email: {user.email}</p>
      <button onClick={()=>logout()}>Logout</button>
    </div>
  );
}