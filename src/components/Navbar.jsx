import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = search.trim();
    if (q) {
      navigate(`/shop?q=${encodeURIComponent(q)}`);
    } else {
      navigate("/shop");
    }
  };

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          LeoNova
        </Link>
      </div>

      {/* search - always visible */}
      <form className="nav-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search toys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {/* desktop links */}
      <nav className="nav-links desktop-only">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <button
        className="nav-cta desktop-only"
        type="button"
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>

      {/* mobile hamburger */}
      <button
        className="hamburger mobile-only"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* mobile menu */}
      {open && (
        <nav className="nav-links-mobile mobile-only">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      )}
    </header>
  );
}