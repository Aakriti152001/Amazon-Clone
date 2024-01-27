import React from "react";
import "./Product.css";
import { StarRounded } from "@mui/icons-material";
import { useStateValue } from "../../context/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ cart }, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRounded />
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="Product Image" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
