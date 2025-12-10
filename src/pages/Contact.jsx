import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-card card">
        <h1>Contact Us</h1>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for your message! (Demo only)");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Message" required></textarea>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}