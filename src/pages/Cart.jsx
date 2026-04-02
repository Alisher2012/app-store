// import { Link } from 'react-router-dom';
// import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
// import './Cart.css';

// const Cart = () => {
 

//   return (
//     <div className="section-py">
//       <div className="container">
//         <h1 className="page-title">SHOPPING CART</h1>
        
//         <div className="cart-layout">
//           <div className="cart-left">
//             <div className="cart-table-header">
//               <div>PRODUCT</div>
//               <div>PRICE</div>
//               <div>QUANTITY</div>
//               <div>TOTAL</div>
//               <div></div>
//             </div>
            
//             <div className="cart-item">
//               <div className="item-info">
//                 <div className="item-img"><img src="/images/display-inponeX.jpg" alt="Phone" /></div>
//                 <div className="item-title"><h3>IPHONE 10</h3><p className="item-sku">#P001</p></div>
//               </div>
//               <div className="item-price">$980.00</div>
//               <div className="item-qty">
//                 <Link to="#"><FiMinus /></Link>
//                 <span>1</span>
//                 <Link to="#"><FiPlus /></Link>
//               </div>
//               <div className="item-total">$980.00</div>
//               <div className="item-remove">
//                 <FiTrash2 size={18} />
//               </div>
//             </div>

//             <div className="cart-item">
//               <div className="item-info">
//                 <div className="item-img"><img src="/images/pink-watch.jpg" alt="Watch" /></div>
//                 <div className="item-title"><h3>PINK WATCH</h3><p className="item-sku">#W001</p></div>
//               </div>
//               <div className="item-price">$870.00</div>
//               <div className="item-qty">
//                 <Link to="#"><FiMinus /></Link>
//                 <span>1</span>
//                 <Link to="#"><FiPlus /></Link>
//               </div>
//               <div className="item-total">$870.00</div>
//               <div className="item-remove">
//                 <FiTrash2 size={18} />
//               </div>
//             </div>
            
//             <div className="cart-actions">
//               <Link to="/" className="btn-secondary">CONTINUE SHOPPING</Link>
//               <Link to="#" className="btn-dark">UPDATE CART</Link>
//             </div>
//           </div>
          
//           <div className="totals-box">
//             <h2>CART TOTALS</h2>
//             <div className="totals-row">
//               <span className="totals-label">SUBTOTAL</span>
//               <span className="totals-value">$1,850.00</span>
//             </div>
//             <div className="totals-row totals-shipping">
//               <span className="totals-label">SHIPPING</span>
//               <span className="totals-value">$50.00</span>
//             </div>
//             <div className="total-grand">
//               <span>TOTAL</span>
//               <span>$1,900.00</span>
//             </div>
//             <Link to="/checkout" className="btn-checkout">PROCEED TO CHECKOUT</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import { Link } from 'react-router-dom';
// import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
// import { useState } from 'react';
// import './Cart.css';

// const Cart = () => {

//   const [plus, setPlus] = useState(1);

//   return (
//     <div className="section-py">
//       <div className="container">
//         <h1 className="page-title">SHOPPING CART</h1>
        
//         <div className="cart-layout">
//           <div className="cart-left">
//             <div className="cart-table-header">
//               <div>PRODUCT</div>
//               <div>PRICE</div>
//               <div>QUANTITY</div>
//               <div>TOTAL</div>
//               <div></div>
//             </div>
            
//             <div className="cart-item">
//               <div className="item-info">
//                 <div className="item-img">
//                   <img src="/images/display-inponeX.jpg" alt="Phone" />
//                 </div>
//                 <div className="item-title">
//                   <h3>IPHONE 10</h3>
//                   <p className="item-sku">#P001</p>
//                 </div>
//               </div>

//               <div className="item-price">$980.00</div>

//               <div className="item-qty">
//                 <button onClick={() => setPlus(plus > 1 ? plus - 1 : 1)}>
//                   <FiMinus />
//                 </button>

//                 <span>{plus}</span>

//                 <button onClick={() => setPlus(plus + 1)}>
//                   <FiPlus />
//                 </button>
//               </div>

//               <div className="item-total">
//                 ${(980 * plus).toFixed(2)}
//               </div>

//               <div className="item-remove">
//                 <FiTrash2 size={18} />
//               </div>
//             </div>

//             {/* второй товар (использует тот же plus) */}
//             <div className="cart-item">
//               <div className="item-info">
//                 <div className="item-img">
//                   <img src="/images/pink-watch.jpg" alt="Watch" />
//                 </div>
//                 <div className="item-title">
//                   <h3>PINK WATCH</h3>
//                   <p className="item-sku">#W001</p>
//                 </div>
//               </div>

//               <div className="item-price">$870.00</div>

//               <div className="item-qty">
//                 <button onClick={() => setPlus(plus > 1 ? plus - 1 : 1)}>
//                   <FiMinus />
//                 </button>

//                 <span>{plus}</span>

//                 <button onClick={() => setPlus(plus + 1)}>
//                   <FiPlus />
//                 </button>
//               </div>

//               <div className="item-total">
//                 ${(870 * plus).toFixed(2)}
//               </div>

//               <div className="item-remove">
//                 <FiTrash2 size={18} />
//               </div>
//             </div>
            
//             <div className="cart-actions">
//               <Link to="/" className="btn-secondary">CONTINUE SHOPPING</Link>
//               <Link to="#" className="btn-dark">UPDATE CART</Link>
//             </div>
//           </div>
          
//           <div className="totals-box">
//             <h2>CART TOTALS</h2>

//             <div className="totals-row">
//               <span className="totals-label">SUBTOTAL</span>
//               <span className="totals-value">
//                 ${(980 * plus + 870 * plus).toFixed(2)}
//               </span>
//             </div>

//             <div className="totals-row totals-shipping">
//               <span className="totals-label">SHIPPING</span>
//               <span className="totals-value">$50.00</span>
//             </div>

//             <div className="total-grand">
//               <span>TOTAL</span>
//               <span>
//                 ${(980 * plus + 870 * plus + 50).toFixed(2)}
//               </span>
//             </div>

//             <Link to="/checkout" className="btn-checkout">
//               PROCEED TO CHECKOUT
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;










import { Link } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useState } from 'react';
import './Cart.css';

const Cart = () => {

  const [phoneQty, setPhoneQty] = useState(1);
  const [watchQty, setWatchQty] = useState(1);

  return (
    <div className="section-py">
      <div className="container">
        <h1 className="page-title">SHOPPING CART</h1>
        
        <div className="cart-layout">
          <div className="cart-left">
            <div className="cart-table-header">
              <div>PRODUCT</div>
              <div>PRICE</div>
              <div>QUANTITY</div>
              <div>TOTAL</div>
              <div></div>
            </div>
            
            {/* PHONE */}
            <div className="cart-item">
              <div className="item-info">
                <div className="item-img">
                  <img src="/images/display-inponeX.jpg" alt="Phone" />
                </div>
                <div className="item-title">
                  <h3>IPHONE 10</h3>
                  <p className="item-sku">#P001</p>
                </div>
              </div>

              <div className="item-price">$980.00</div>

              <div className="item-qty">
                <button onClick={() => setPhoneQty(phoneQty > 1 ? phoneQty - 1 : 1)}>
                  <FiMinus />
                </button>

                <span>{phoneQty}</span>

                <button onClick={() => setPhoneQty(phoneQty + 1)}>
                  <FiPlus />
                </button>
              </div>

              <div className="item-total">
                ${(980 * phoneQty).toFixed(2)}
              </div>

              <div className="item-remove">
                <FiTrash2 size={18} />
              </div>
            </div>

            {/* WATCH */}
            <div className="cart-item">
              <div className="item-info">
                <div className="item-img">
                  <img src="/images/pink-watch.jpg" alt="Watch" />
                </div>
                <div className="item-title">
                  <h3>PINK WATCH</h3>
                  <p className="item-sku">#W001</p>
                </div>
              </div>

              <div className="item-price">$870.00</div>

              <div className="item-qty">
                <button onClick={() => setWatchQty(watchQty > 1 ? watchQty - 1 : 1)}>
                  <FiMinus />
                </button>

                <span>{watchQty}</span>

                <button onClick={() => setWatchQty(watchQty + 1)}>
                  <FiPlus />
                </button>
              </div>

              <div className="item-total">
                ${(870 * watchQty).toFixed(2)}
              </div>

              <div className="item-remove">
                <FiTrash2 size={18} />
              </div>
            </div>
            
            <div className="cart-actions">
              <Link to="/" className="btn-secondary">CONTINUE SHOPPING</Link>
              <Link to="#" className="btn-dark">UPDATE CART</Link>
            </div>
          </div>
          
          <div className="totals-box">
            <h2>CART TOTALS</h2>

            <div className="totals-row">
              <span className="totals-label">SUBTOTAL</span>
              <span className="totals-value">
                ${(980 * phoneQty + 870 * watchQty).toFixed(2)}
              </span>
            </div>

            <div className="totals-row totals-shipping">
              <span className="totals-label">SHIPPING</span>
              <span className="totals-value">$50.00</span>
            </div>

            <div className="total-grand">
              <span>TOTAL</span>
              <span>
                ${(980 * phoneQty + 870 * watchQty + 50).toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" className="btn-checkout">
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;