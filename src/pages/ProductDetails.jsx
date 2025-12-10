import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="not-found">Product not found.</p>;
  }

  return (
    <section className="product-details">
      <div className="details-card">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <h1>{product.name}</h1>

          <p className="category">
            {product.category} • Age {product.age}
          </p>

          <p className="details-price">₹{product.price}</p>

          <p className="description">
            Carefully designed toy to inspire creativity, joy, and learning.
            Made with safe, child-friendly materials.
          </p>

          <button
            className="btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}