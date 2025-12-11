import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Menu items in ONE place
  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "Cart", to: "/cart" },
  ];

  // Close mobile menu when navigation changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = search.trim();

    if (q) navigate(`/shop?q=${encodeURIComponent(q)}`);
    else navigate("/shop");

    // Clear search text after submit
    setSearch("");
  };

  return (
    <header className="navbar">
      {/* LEFT: LOGO */}
      <Link to="/" className="logo">
        LeoNova
      </Link>

      {/* CENTER: SEARCH BAR */}
      <form className="nav-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search toys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>

      {/* RIGHT: DESKTOP LINKS */}
      <nav className="nav-links desktop-only">
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>

      {/* CTA BUTTON DESKTOP */}
      <button
        className="nav-cta desktop-only"
        onClick={() => navigate("/shop")}
      >
        Shop Now
      </button>

      {/* MOBILE HAMBURGER */}
      <button
        className="hamburger mobile-only"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Navigation"
      >
        ☰
      </button>
      <Link to="/admin-login">Admin</Link>

      {/* MOBILE SLIDE-IN MENU */}
      <nav className={`nav-mobile ${open ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}