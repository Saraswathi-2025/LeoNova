import "../styles/Cart.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart, clearCart, total } = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    alert("This is a demo checkout. In real app, payment will go here.");
  };

  return (
    <section className="cart">
      <h1>Your Cart</h1>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="cart-empty">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="empty-icon"
          />

          <h2>Your Cart is Empty</h2>
          <p>Add some toys and make your kid smile!</p>

          <Link to="/shop" className="browse-btn">
            Browse Toys
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>

                  <div className="quantity">
                    <button type="button" onClick={() => updateQty(item.id, -1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button type="button" onClick={() => updateQty(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove"
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <p className="summary-row">
              Items <span>{cart.length}</span>
            </p>

            <p className="summary-row total-row">
              Total <span>₹{total}</span>
            </p>

            <button
              className="btn-primary full-width"
              type="button"
              onClick={handleCheckout}
            >
              Place Order
            </button>

            <button
              className="btn-ghost full-width mt-8"
              type="button"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}