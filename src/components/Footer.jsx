import { Link } from "react-router-dom";
import "../styles/Footer.css"; // keep your existing footer styles

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SECTION — BRAND / ADMIN ENTRY */}
        <div className="footer-brand">
          {/* Admin entry via logo */}
          <Link to="/admin-login" className="footer-logo-link">
            <img
              src="/logo.png"
              alt="LeoNova Admin Login"
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            Premium toys designed to spark joy, creativity,
            and imagination in every child.
          </p>
        </div>

        {/* MIDDLE — QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* RIGHT — TRUST */}
        <div className="footer-trust">
          <h4>Trust</h4>
          <ul>
            <li>✔ Safe Materials</li>
            <li>✔ Kid Friendly</li>
            <li>✔ Quality Checked</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LeoNova. All rights reserved.
      </div>
    </footer>
  );
}