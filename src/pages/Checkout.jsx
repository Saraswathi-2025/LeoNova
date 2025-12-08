import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <form className="checkout-form">
        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Delivery Address"></textarea>

        <button type="button">Place Order</button>
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} × {item.qty} — ₹{item.price * item.qty}
          </p>
        ))}

        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
}