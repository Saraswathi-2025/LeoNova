import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">

      {/* HERO SECTION */}
      <div className="about-hero">
        <h1>About LeoNova</h1>
        <p>
          LeoNova is a modern kids’ toy brand focused on inspiring creativity,
          imagination, and joyful childhood memories.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-container">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We believe toys should spark curiosity, learning, and happiness.
            Every LeoNova product is designed with care — using safe materials,
            premium craftsmanship, and engaging play-focused design.
          </p>

          <h2>Why LeoNova?</h2>
          <ul>
            <li>✨ Child-safe, non-toxic materials</li>
            <li>🎨 Designed to boost creativity & imagination</li>
            <li>🛡️ Durable, premium-quality build</li>
            <li>💛 Loved by kids, trusted by parents</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image-frame">
          <img
  src="./logo.png"
  alt="LeoNova Logo"
  className="about-logo"
/>
        </div>
      </div>

      {/* VALUES SECTION */}
      <div className="about-values">
        <div className="value-card">
          <h3>Safe Materials</h3>
          <p>All toys are made with globally certified, child-friendly materials.</p>
        </div>

        <div className="value-card">
          <h3>Designed for Learning</h3>
          <p>Every toy encourages motor skills, creativity, and joyful learning.</p>
        </div>

        <div className="value-card">
          <h3>Premium Quality</h3>
          <p>Crafted with attention to detail for long-lasting happiness.</p>
        </div>
      </div>

    </section>
  );
}