import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <CartProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </CartProvider>
  </HashRouter>
);