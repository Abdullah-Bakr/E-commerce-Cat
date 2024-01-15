import React from "react";
import { useCart } from "../Context/CartContext";
import "../scss/comp/cart.scss";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, increaseCartQuantity, decreaseCartQuantity, removeItem } =
    useCart();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="cart">
      <div className="container">
        <h1>Welcome to your cart</h1>
        {cartItems.length === 0 ? (
          <>
            <p className="empty">Your cart is empty</p>
            <Link className="go-shop" as={Link} to="/shop">
              Shop Now
            </Link>
          </>
        ) : (
          <>
            <div className="cart-products">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-product">
                  <div className="img-box">
                    <img
                      src={`${process.env.PUBLIC_URL}/${item.image}`}
                      alt={item.title}
                      style={{ width: "80px", height: "80px" }}
                    />

                    <p>{item.title}</p>
                  </div>
                  <div className="amount">
                    <button onClick={() => decreaseCartQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseCartQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <div className="action">
                    <span>
                      {item.quantity} * {item.price}
                    </span>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-price">
              <p>
                Total: <span>${calculateTotalPrice()}</span>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
