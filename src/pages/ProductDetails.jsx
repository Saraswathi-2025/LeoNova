import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const products = [
  { id: 1, image: "/products/1.png", name: "Plush Toy 1", price: 499 },
  { id: 2, image: "/products/2.png", name: "Plush Toy 2", price: 549 },
  { id: 3, image: "/products/3.png", name: "Plush Toy 3", price: 599 },
  { id: 4, image: "/products/4.png", name: "Plush Toy 4", price: 499 },
  { id: 5, image: "/products/5.png", name: "Plush Toy 5", price: 649 },
  { id: 6, image: "/products/6.png", name: "Plush Toy 6", price: 699 },
  { id: 7, image: "/products/7.png", name: "Plush Toy 7", price: 549 },
  { id: 8, image: "/products/8.png", name: "Plush Toy 8", price: 599 },
  { id: 9, image: "/products/9.png", name: "Plush Toy 9", price: 749 },
  { id: 10, image: "/products/10.png", name: "Plush Toy 10", price: 799 },
];

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));
  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <div className="details-text">
        <h1>{product.name}</h1>
        <p className="price">₹{product.price}</p>

        <p>
          High quality soft plush toy. Safe, adorable and perfect for kids
          and gifting.
        </p>

        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}