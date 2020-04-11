import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/original.svg";
import "./header.styles.scss";


const Header = () => {
    return (
        <div className="header">
        <Link className="logo" to="/">
            <Logo />
        </Link>
        <div className="options">
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/contact" className="option">CONTACT US</Link>
        <Link to="/signin" className="option">SIGN IN</Link>
        </div>
        </div>  );
}
 
export default Header;