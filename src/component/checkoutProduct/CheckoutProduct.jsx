import React from "react";
import "./CheckoutProduct.css";
import { StarRounded } from "@mui/icons-material";
import { useStateValue } from "../../context/StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
        type:'REMOVE_FROM_CART',
        id:id
    })
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <StarRounded />
            ))}
        </div>
        <button on onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
