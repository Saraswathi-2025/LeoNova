import "../styles/Cart.css";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>No items yet</p>}

      {cart.map((item) => (
        <div className="cart-card" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h3>{item.name}</h3>
            <p>₹{item.price} × {item.qty}</p>
          </div>

          <button
            className="remove"
            onClick={() => removeFromCart(item.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </section>
  );
}