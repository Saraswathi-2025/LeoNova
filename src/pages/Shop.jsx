import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/Shop.css";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="shop">
      <h2>Shop Toys</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/Shop.css";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="shop">
      <h2>Shop Toys</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}