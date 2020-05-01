import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT US
        </Link>
        {currentUser ? (
          <div className="option" onClick={()=> auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
