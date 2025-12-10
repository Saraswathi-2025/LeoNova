import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero-card card">
        <div className="hero-left">
          <span className="badge">⭐ Trusted Kids Store</span>

          <h1>
            Premium Toys <br /> For Happy Childhood
          </h1>

          <p>
            Carefully curated toys that inspire creativity, joy and
            learning for kids of all ages.
          </p>

          <div className="hero-actions">
            <Link to="/shop" className="btn btn-primary">
              Shop Toys
            </Link>

            <Link to="/about" className="btn btn-ghost">
              Learn More
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-frame">
            {/* put your group plush image as /products/hero.png */}
            <img src="./banner.png" alt="Featured toys" />
          </div>
        </div>
      </div>
    </section>
  );
}