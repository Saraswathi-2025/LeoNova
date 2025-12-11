import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 PROTECT PAGE — only logged-in users can enter
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/admin-login"; // redirect to login page
      }
    });
  }, []);

  // 🔥 Fetch messages from Firestore
  useEffect(() => {
    async function loadMessages() {
      const querySnapshot = await getDocs(collection(db, "messages"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMessages(data);
      setLoading(false);
    }
    loadMessages();
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        background: "linear-gradient(135deg,#e0f2fe,#fde7d9)"
      }}
    >
      {/* 🔥 Logout Button */}
      <button
        onClick={() => auth.signOut().then(() => window.location.href = "/admin-login")}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#f87171",
          color: "white",
          cursor: "pointer"
        }}
      >
        Logout
      </button>

      {/* Admin Header */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Admin — Messages
      </h1>

      {/* Message Box Container */}
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.85)",
          padding: "24px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
        }}
      >
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                background: "white",
                padding: "18px",
                borderRadius: "12px",
                marginBottom: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              <strong>{msg.name}</strong>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>{msg.email}</p>
              <p>{msg.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}