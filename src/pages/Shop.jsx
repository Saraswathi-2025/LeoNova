import "../styles/Shop.css";
import { useLocation, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Read ?q= from URL
  const params = new URLSearchParams(location.search);
  const q = (params.get("q") || "").toLowerCase();

  // Filter products by search text
  const filtered = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : products;

  return (
    <section className="shop">
      <header className="shop-header">
        <h1 className="shop-heading">Our Best Toys</h1>

        {q && (
          <p className="shop-subtitle">
            Showing results for <span className="highlight">{q}</span>
          </p>
        )}
      </header>

      {filtered.length === 0 ? (
        <p className="empty-state">No toys match that search yet.</p>
      ) : (
        <div className="products-grid">
          {filtered.map((product) => (
            <article
              key={product.id}
              className="product-card premium-card"
              onClick={() => navigate(`/product/${product.id}`)}
            >
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
                onClick={(e) => {
                  e.stopPropagation(); // prevents navigation
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}