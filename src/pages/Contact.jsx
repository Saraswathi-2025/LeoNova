import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}