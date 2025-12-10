import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

export default function ProductCard({ id, image, title, price }) {
  return (
    <Link to={` /product/${id}`} className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <h3>{title}</h3>
        <p className="price">₹{price}</p>
      </div>
    </Link>
  );
}