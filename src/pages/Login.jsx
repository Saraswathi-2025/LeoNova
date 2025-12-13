// src/pages/Login.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handle(e) {
    e.preventDefault();
    try {
      await login({ email, password });
      nav("/profile");
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      nav("/profile");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="auth-page">
      <form onSubmit={handle}>
        <h2>Login</h2>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" required/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
        <button type="submit">Login</button>
        <hr />
        <button type="button" onClick={handleGoogle}>Login with Google</button>
      </form>
    </div>
  );
}