import React from "react";
import "./Header.css";
import amazon_logo from "../assets/amazon_logo.png";
import { Search, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { useAuthValue } from "../../context/AuthContext";


const Header = () => {
  const {currentUser} = useAuthValue();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img src={amazon_logo} alt="" className="amazon__logo" />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <div className="header__optionLineOne">
              <span>Hello,</span>
              <span>{currentUser?.email}</span>
            </div>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCart />
            <span className="header__optionLineTwo header__cartCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
