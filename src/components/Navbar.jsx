import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="LeoNova" className="logo-img" />
        <span className="logo-text">LeoNova</span>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
        <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>

      <Link to="/shop" className="nav-cta desktop-only">Shop Now</Link>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="menu"
      >
        ☰
      </button>
    </header>
  );
}