// src/pages/Admin.jsx
import { useEffect, useState } from "react";
import { auth, db, adminEmails } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../styles/Admin.css";

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔐 AUTH + ADMIN CHECK (HASH ROUTER SAFE)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.replace("#/admin-login");
        return;
      }

      if (!adminEmails.includes(user.email)) {
        alert("Access denied. You are not an admin.");
        auth.signOut().then(() => {
          window.location.replace("#/admin-login");
        });
      }
    });

    return () => unsubscribe();
  }, []);

  // 📩 LOAD MESSAGES
  useEffect(() => {
    async function loadMessages() {
      const snapshot = await getDocs(collection(db, "messages"));
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      setMessages(data);
      setLoading(false);
    }

    loadMessages();
  }, []);

  // ❌ DELETE MESSAGE
  async function deleteMessage(id) {
    await deleteDoc(doc(db, "messages", id));
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }

  if (loading) {
    return <p className="admin-loading">Loading...</p>;
  }

  return (
    <section className="admin-page">
      {/* LOGOUT */}
      <button
        className="admin-logout"
        onClick={() => {
          auth.signOut().then(() => {
            window.location.replace("#/admin-login");
          });
        }}
      >
        Logout
      </button>

      <div className="admin-card">
        <h1>Admin — Messages</h1>

        {messages.length === 0 ? (
          <p className="no-messages">No messages yet.</p>
        ) : (
          <div className="message-list">
            {messages.map((msg) => (
              <div className="message-box" key={msg.id}>
                <div className="msg-name">{msg.name}</div>
                <div className="msg-email">{msg.email}</div>
                <div className="msg-text">{msg.message}</div>

                <button
                  className="admin-delete"
                  onClick={() => deleteMessage(msg.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}