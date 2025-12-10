import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>LeoNova</h3>
          <p>
            Premium toys designed to spark joy, creativity,
            and imagination in every child.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#/">Home</a>
          <a href="#/shop">Shop</a>
          <a href="#/about">About</a>
          <a href="#/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Trust</h4>
          <p>✔️ Safe Materials</p>
          <p>✔️ Kid Friendly</p>
          <p>✔️ Quality Checked</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LeoNova. All rights reserved.
      </div>
    </footer>
  );
}