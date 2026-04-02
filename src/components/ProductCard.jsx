import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-container">
        <img src={product.image} alt={product.title} />
        <div className="add-to-cart-overlay">
          ADD TO CART 🛒
        </div>
      </Link>
      <div className="product-info">
        <div>
          <h3>{product.title}</h3>
          <p className="product-description">{product.description}</p>
        </div>
        <span className="price">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
