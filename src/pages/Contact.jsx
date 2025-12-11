import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-card">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <div className="input-group">
            <input type="text" required />
            <label>Your Name</label>
          </div>

          <div className="input-group">
            <input type="email" required />
            <label>Email Address</label>
          </div>

          <div className="input-group textarea-group">
            <textarea required></textarea>
            <label>Message</label>
          </div>

          <button className="btn-submit" type="submit">
            Send Message
          </button>
        </form>
      </div>

    </section>
  );
}