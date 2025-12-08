import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  return (
    <section className="product-details">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>
        <p className="desc">
          High quality toy designed for safety, fun, and creativity.
          Perfect for kids and gifting.
        </p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </section>
  );
}