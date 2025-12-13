// src/pages/Signup.jsx
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const { signup } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handle(e) {
    e.preventDefault();
    try {
      await signup({ name, email, password });
      nav("/profile");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="auth-page">
      <form onSubmit={handle}>
        <h2>Create account</h2>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" required/>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" required/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}