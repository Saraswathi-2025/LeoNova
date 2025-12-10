import { Link } from "react-router-dom";

export default function ProductCard({ id, image, title, price }) {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="img-wrap">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p className="price">₹{price}</p>
    </Link>
  );
}