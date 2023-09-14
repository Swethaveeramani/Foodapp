import React from "react";
import logo from "../../asserts/logo.webp";
import "../../App.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar row sticky-top">
        <div className="col-12 col-md-3">
          <img src={logo} alt="logo" className="logo" />
        </div>
        {/* Search Bar */}
        <div className="col-12 col-md-6 mt-2-md-0">
          <div className="input-group">
            <input
              type="search"
              id="search_field"
              className="form-control"
              placeholder="Search Your Favorite Restaurant..."
            />
            <div className="input-group-append">
              <button id="search_btn" className="btn">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Login and Signup Button */}
        <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
          <Link to={`/forntend/src/Component/Home.js`}> <button className="btn home_btn"  >Home</button></Link>
          <button className="btn" id="login_btn">
            Login
          </button>
          <Link to="/cart" style={{textDecoration:"none"}}>

            <span className="ml-3" id="cart">
              Cart
            </span>
            <span className="ml-1" id="cart_count">
              {cartItems.length}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
