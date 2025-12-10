import "../styles/Shop.css";
import { useLocation } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const q = (params.get("q") || "").toLowerCase();

  const filtered = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : products;

  return (
    <section className="shop">
      <h1 className="shop-heading">Our Best Toys</h1>

      {q && (
        <p className="shop-subtitle">
          Showing results for <span className="highlight">{q}</span>
        </p>
      )}

      <div className="product-grid">
        {filtered.map((product) => (
          <article className="product-card card" key={product.id}>
            <div className="img-wrap">
              <img src={product.image} alt={product.name} />
            </div>

            <h3>{product.name}</h3>
            <p className="meta">
              {product.category} • {product.age}
            </p>
            <p className="price">₹{product.price}</p>

            <button
              className="btn btn-primary full-width"
              type="button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="empty-state">No toys match that search yet.</p>
        )}
      </div>
    </section>
  );
}