import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

import "../styles/Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        date: new Date(),
      });

      setSuccess("Message sent successfully! ✅");

      // Reset input fields
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess("Something went wrong ❌");
    }
  };

  return (
    <section className="contact-page">

      <div className="contact-card">
        <h1>Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group textarea-group">
            <textarea
              placeholder=" "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <label>Message</label>
          </div>

          <button className="btn-submit" type="submit">
            Send Message
          </button>

          {success && <p className="success">{success}</p>}
        </form>
      </div>

    </section>
  );
}