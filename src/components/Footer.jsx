import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socials = [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
    { icon: <FaYoutube />, link: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>MiniStore<span>.</span></h3>
            <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
            <div className="social-icons">
              {socials.map((s, i) => (
                <a key={i} href={s.link}>{s.icon}</a>
              ))}
            </div>
          </div>
          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li>HOME</li><li>ABOUT</li><li>SHOP</li><li>BLOGS</li><li>CONTACT</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>HELP & INFO</h4>
            <ul className="footer-links">
              <li>TRACK YOUR ORDER</li><li>RETURNS POLICIES</li><li>SHIPPING + DELIVERY</li><li>CONTACT US</li><li>FAQS</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT US</h4>
            <div className="contact-info">
              <p>Do you have any queries or suggestions?</p>
              <p className="email-link">yourinfo@gmail.com</p>
              <p>If you need support? Just give us a call.</p>
              <p className="phone-number">+55 111 222 333 44</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="shipping-billing">
            <span>We ship with: <span>DHL / FedEx</span></span>
            <span>Payment options: <span>Visa / MC / PayPal</span></span>
          </div>
          <p>© Copyright 2023 MiniStore. Design by TemplatesJungle</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
