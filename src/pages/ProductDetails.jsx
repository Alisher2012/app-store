import { Link } from 'react-router-dom';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="section-py">
      <div className="container">
        <div className="product-details">
          <div className="details-image">
            <img src="/images/pink-watch.jpg" alt="Watch" />
          </div>

          <div>
            <span className="category-tag">WATCH</span>
            <h1 className="details-title">PINK WATCH</h1>
            <div className="stars">
              <FiStar fill="#ffcc00" color="#ffcc00" />
              <FiStar fill="#ffcc00" color="#ffcc00" />
              <FiStar fill="#ffcc00" color="#ffcc00" />
              <FiStar fill="#ffcc00" color="#ffcc00" />
              <FiStar color="#ffcc00" />
            </div>
            <p className="details-price">$870.00</p>
            <p className="details-desc">
              Nunc tristique sed nisl convallis viverra. Quisque id efficitur libero. Suspendisse sed diam nec diam.
            </p>
            <Link to="/cart" className="add-cart-btn">
              <FiShoppingCart size={20} className="cart-btn-icon" />
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
