import "../styles/Shop.css";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="shop">
      <h1 className="shop-title">Our Best Toys</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}