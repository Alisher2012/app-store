import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          MiniStore<span>.</span>
        </Link>
        <nav className="nav">
          <Link to="/">HOME</Link>
          <Link to="#">PAGES</Link>
          <Link to="#">ABOUT</Link>
          <Link to="#">BLOGS</Link>
          <Link to="#">CONTACT</Link>
        </nav>
        <div className="icons">
          <FiSearch size={22} className="icon-btn" />
          <FiUser size={22} className="icon-btn" />
          <Link to="/cart" className="cart-link">
            <FiShoppingCart size={22} />
            <span className="cart-count">(0)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
