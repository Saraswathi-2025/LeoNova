import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImg from "../assets/hero-toy.png"; // ✅ put image here

export default function Home() {
  return (
    <section className="home">
      <div className="hero-card">
        {/* LEFT */}
        <div className="hero-left">
          <span className="badge">⭐ Trusted Kids Store</span>

          <h1>
            Premium Toys <br /> For Happy Childhood
          </h1>

          <p>
            Carefully curated toys that inspire creativity, joy, and
            learning for kids of all ages.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="primary-btn">
              Shop Toys
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-image-frame">
            <img src={heroImg} alt="Kids Toys" />
          </div>
        </div>
      </div>
    </section>
  );
}