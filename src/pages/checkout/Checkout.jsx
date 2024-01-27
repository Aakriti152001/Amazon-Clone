import React from "react";
import "./Checkout.css";
import Subtotal from "../../component/subtotal/Subtotal";
import CheckoutProduct from "../../component/checkoutProduct/CheckoutProduct";
import { useStateValue } from "../../context/StateProvider";
import Header from "../../component/header/Header";

const Checkout = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <Header />
      <div className="checkout_container">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/31/img21/Camera/BAU/1500x300_cam_acc_1._CB600267852_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">Your Shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
      </div>
    </div>
  );
};

export default Checkout;
