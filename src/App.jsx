import { Link, Outlet } from "react-router-dom";
import "./styles/navbar.css";

export default function App() {
  return (
    <>
      <header className="nav">
        <div className="nav-left">
          <img src="/logo.png" alt="LeoNova" className="logo" />
          <span>LeoNova</span>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/shop" className="nav-btn">Shop Now</Link>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}