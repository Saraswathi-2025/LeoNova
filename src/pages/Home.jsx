import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero-card">
        <div className="hero-text">
          <span className="badge">⭐ Trusted Kids Store</span>

          <h1>
            Premium Toys <br /> For Happy Childhood
          </h1>

          <p>
            Carefully curated toys that inspire creativity,
            joy and learning for kids of all ages.
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

        <div className="hero-image">
          <img src="./products/1.png" alt="Toy" />
        </div>
      </div>
    </section>
  );
}