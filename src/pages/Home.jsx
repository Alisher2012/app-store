import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiTruck, FiAward, FiTag, FiShield, FiInstagram } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  // --- LOCAL DATA ---
  const products = [
    { 
      id: 1, 
      title: "IPhone 10", 
      price: 980, 
      description: "The classic choice for performance and style.", 
      image: "/images/display-inponeX.jpg", 
      category: "Phone" 
    },
    { 
      id: 2, 
      title: "IPhone 12 PRO", 
      price: 1100, 
      description: "Next level camera and battery life.", 
      image: "/images/iphone12PRO.jpg", 
      category: "Phone" 
    },
    { 
      id: 3, 
      title: "IPhone RED BOX", 
      price: 780, 
      description: "Original collection with iconic packaging.", 
      image: "/images/iphoneKAROBKA.png", 
      category: "Phone" 
    },
    { 
      id: 4, 
      title: "SAMSUNG GALAXY", 
      price: 1500, 
      description: "The ultimate Android smartphone experience.", 
      image: "/images/display-samsung.jpg", 
      category: "Phone" 
    },
    { 
      id: 5, 
      title: "PINK WATCH", 
      price: 870, 
      description: "Elegant blush tones for every occasion.", 
      image: "/images/pink-watch.jpg", 
      category: "Watch" 
    },
    { 
      id: 6, 
      title: "BLACK WATCH", 
      price: 680, 
      description: "Durable and bold for the rugged lifestyle.", 
      image: "/images/black-watch.jpg", 
      category: "Watch" 
    },
    { 
      id: 7, 
      title: "BLUE WATCH", 
      price: 750, 
      description: "Unique patterns that stand out.", 
      image: "/images/display-blueWATCH.jpg", 
      category: "Watch" 
    },
    { 
      id: 8, 
      title: "NAVY WATCH", 
      price: 650, 
      description: "Sleek and professional black finish.", 
      image: "/images/display-blackWATCH.jpg", 
      category: "Watch" 
    }
  ];

  const heroSlides = [
    { 
      id: 1, 
      title: "PREMIUM SMART WATCHES", 
      description: "Step into the future of wearables with our curated selection.", 
      image: "/images/hero-watch.png", 
      buttonText: "SHOP PRODUCT" 
    },
    { 
      id: 2, 
      title: "MODERN IPHONE SERIES", 
      description: "Experience the power and elegance of the newest iPhone lineup.", 
      image: "/images/display-inponeX.jpg", 
      buttonText: "VIEW PHONES" 
    },
    { 
      id: 3, 
      title: "SAMSUNG GALAXY TECH", 
      description: "Cutting edge technology and innovation in your hands.", 
      image: "/images/display-samsung.jpg", 
      buttonText: "EXPLORE AUDIO" 
    }
  ];

  const blogPosts = [
    { 
      id: 1, 
      image: "/images/iphone-airpods.jpg", 
      date: "FEB 22, 2023", 
      category: "GADGETS", 
      title: "LATEST APPLE PRODUCTS",
      description: "A comprehensive look at the must-have tech for the new year." 
    },
    { 
      id: 2, 
      image: "/images/Playstation3.jpg", 
      date: "FEB 20, 2023", 
      category: "TECHNOLOGY", 
      title: "GAMING REVOLUTION",
      description: "Explore the evolution of gaming consoles and home entertainment." 
    },
    { 
      id: 3, 
      image: "/images/samsungPODS.jpg", 
      date: "FEB 18, 2023", 
      category: "AUDIO", 
      title: "WIRELESS SOUND QUALITY",
      description: "Comparing the best wireless earbuds for crystal clear audio." 
    }
  ];

  const features = [
    { 
      id: 1, 
      icon: <FiTruck />, 
      title: "FREE DELIVERY", 
      description: "Consectetur adipi elit lorem ipsum dolor sit amet." 
    },
    { 
      id: 2, 
      icon: <FiAward />, 
      title: "QUALITY GUARANTEE", 
      description: "Dolor sit amet elit lorem ipsum dolor sit amet." 
    },
    { 
      id: 3, 
      icon: <FiTag />, 
      title: "DAILY OFFERS", 
      description: "Amet consectur adipi elit lorem ipsum dolor sit." 
    },
    { 
      id: 4, 
      icon: <FiShield />, 
      title: "100% SECURE PAYMENT", 
      description: "Remi ipsum dolor sit amet consectetur adipi elit." 
    }
  ];

  // --- LOGIC ---
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div>
      {/* Hero */}
      <section className={`hero slide-${currentSlide}`}>
        <div className="hero-arrow left" onClick={() => setCurrentSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}>
          <FiChevronLeft size={60} color="#d2d2d7" />
        </div>
        <div className="hero-arrow right" onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}>
          <FiChevronRight size={60} color="#d2d2d7" />
        </div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>{heroSlides[currentSlide].title}</h1>
            <p className="hero-description">{heroSlides[currentSlide].description}</p>
            <Link to="#" className="btn-primary">{heroSlides[currentSlide].buttonText}</Link>
          </div>
          <div className="hero-image">
            <img src={heroSlides[currentSlide].image} alt="Hero" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-py">
        <div className="container features-grid">
          {features.map((f) => (
            <div key={f.id} className="feature-item">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-text"><h4>{f.title}</h4><p>{f.description}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Grids */}
      <section className="section-py">
        <div className="container">
          <div className="section-title"><h2>MOBILE PRODUCTS</h2><Link to="#">GO TO SHOP</Link></div>
          <div className="product-grid">
            {products.filter(p => p.category === 'Phone').map(p => (
              <div className="product-card" key={p.id}>
                <Link to={`/product/${p.id}`} className="product-image-container">
                  <img src={p.image} alt={p.title} />
                  <div className="add-to-cart-overlay">ADD TO CART 🛒</div>
                </Link>
                <div className="product-info">
                  <div>
                    <h3>{p.title}</h3>
                    <p className="product-description">{p.description}</p>
                  </div>
                  <span className="price">${p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="section-title"><h2>SMART WATCHES</h2><Link to="#">GO TO SHOP</Link></div>
          <div className="product-grid">
            {products.filter(p => p.category === 'Watch').map(p => (
              <div className="product-card" key={p.id}>
                <Link to={`/product/${p.id}`} className="product-image-container">
                  <img src={p.image} alt={p.title} />
                  <div className="add-to-cart-overlay">ADD TO CART 🛒</div>
                </Link>
                <div className="product-info">
                  <div>
                    <h3>{p.title}</h3>
                    <p className="product-description">{p.description}</p>
                  </div>
                  <span className="price">${p.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="sale-banner">
        <div className="container sale-container">
          <div className="sale-content">
            <div className="sale-badge"><div className="sale-line"></div><span>10% OFF</span></div>
            <h2>NEW YEAR SALE</h2>
            <Link to="#" className="btn-primary shop-sale-btn">SHOP SALE</Link>
          </div>
          <div className="sale-image"><img src="/images/iphoneKAROBKA.png" alt="Sale" /></div>
        </div>
      </section>

      {/* Blog */}
      <section className="section-py">
        <div className="container">
          <div className="section-title"><h2>LATEST POSTS</h2><Link to="#">READ BLOGS</Link></div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id}>
                <div className="blog-card-image"><img src={post.image} alt="Blog" /></div>
                <div className="blog-meta"><span>{post.date}</span><span>-</span><span>{post.category}</span></div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-description">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <FaQuoteLeft size={64} color="#f1f1f1" className="testimonial-icon" />
          <p className="testimonial-quote">"Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi."</p>
          <h4 className="testimonial-author">EMMA CHAMBERLIN</h4>
        </div>
      </section>

      {/* Subscribe */}
      <section className="subscribe-section">
        <div className="subscribe-text">
          <h2 className="subscribe-heading">SUBSCRIBE US NOW</h2>
          <p className="subscribe-description">Get latest news, updates and deals directly mailed to your inbox.</p>
        </div>
        <div className="subscribe-form">
          <input type="email" placeholder="Your email address here" className="subscribe-input" />
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="section-py">
        <div className="container">
          <div className="insta-header"><h2>SHOP OUR INSTA</h2></div>
          <div className="insta-grid">
            {[
              "/images/PARFUME.jpg",
              "/images/iphone-airpods.jpg",
              "/images/display-blueWATCH.jpg",
              "/images/iphone12PRO.jpg",
              "/images/samsungPODS.jpg"
            ].map((img, i) => (
              <div key={i} className="insta-item">
                <img src={img} alt="Insta" />
                <div className="insta-overlay">
                  <FiInstagram color="#fff" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
