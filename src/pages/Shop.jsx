import { Link } from "react-router-dom";
import "../styles/Shop.css";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="shop">
      <h1 className="shop-heading">Our Best Toys</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            {/* Clickable product */}
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="img-wrap">
                <img src={product.image} alt={product.name} />
              </div>

              <h3>{product.name}</h3>
              <p className="price">₹{product.price}</p>
            </Link>

            {/* Add to cart stays separate */}
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </section>
  );
}