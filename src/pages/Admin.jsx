// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { auth, db, adminEmails } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../styles/Admin.css";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 AUTH + ADMIN CHECK (ONCE)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/admin-login";
        return;
      }

      if (!adminEmails.includes(user.email)) {
        alert("Access denied. You are not an admin.");
        auth.signOut();
        window.location.href = "/admin-login";
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔥 FETCH MESSAGES
  useEffect(() => {
    async function loadMessages() {
      const snap = await getDocs(collection(db, "messages"));
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setMessages(data);
      setLoading(false);
    }
    loadMessages();
  }, []);

  async function deleteMessage(id) {
    await deleteDoc(doc(db, "messages", id));
    setMessages(prev => prev.filter(m => m.id !== id));
  }

  if (loading) return <p className="admin-loading">Loading...</p>;

  return (
    <div className="admin-page">
      <button
        className="admin-logout"
        onClick={() => auth.signOut().then(() => window.location.href = "/admin-login")}
      >
        Logout
      </button>

      <h1 className="admin-title">Admin — Messages</h1>

      <div className="admin-card">
        {messages.length === 0 ? (
          <p className="admin-empty">No messages yet.</p>
        ) : (
          messages.map(msg => (
            <div className="admin-message" key={msg.id}>
              <strong>{msg.name}</strong>
              <p className="admin-email">{msg.email}</p>
              <p>{msg.message}</p>

              <button
                className="admin-delete"
                onClick={() => deleteMessage(msg.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}