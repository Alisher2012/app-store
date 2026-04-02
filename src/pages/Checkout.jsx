import './Checkout.css';

const Checkout = () => {
  return (
    <div className="section-py">
      <div className="container">
        <h1 className="page-title">CHECKOUT</h1>
        
        <div className="checkout-layout">
          <div className="checkout-left">
            <h2 className="checkout-title">BILLING DETAILS</h2>
            <div className="billing-form">
              <div className="form-row">
                <div className="form-group"><label>FIRST NAME *</label><input type="text" /></div>
                <div className="form-group"><label>LAST NAME *</label><input type="text" /></div>
              </div>
              <div className="form-group"><label>STREET ADDRESS *</label><input type="text" /></div>
              <div className="form-group"><label>TOWN / CITY *</label><input type="text" /></div>
              <div className="form-row">
                <div className="form-group"><label>PHONE *</label><input type="tel" /></div>
                <div className="form-group"><label>EMAIL *</label><input type="email" /></div>
              </div>
            </div>
          </div>
          
          <div className="order-review">
            <h2 className="checkout-title">YOUR ORDER</h2>
            <div className="order-summary">
              <div className="order-row"><span>IPHONE 10 x 1</span><span>$980.00</span></div>
              <div className="order-row"><span>PINK WATCH x 1</span><span>$870.00</span></div>
              <div className="order-row"><span>SUBTOTAL</span><span>$1,850.00</span></div>
              <div className="order-total"><span>TOTAL</span><span>$1,900.00</span></div>
            </div>
            <button className="place-order-btn">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
