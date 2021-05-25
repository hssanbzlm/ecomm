import React from "react";
import "./navbar.css";
import Basket from "./Basket";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo">Tech</div>
      <div className="link-container">
        <Link to={`/${"pc"}`}>
          <div>Pc</div>
        </Link>
        <Link to={`/${"phone"}`}>
          <div> Smartphone</div>
        </Link>
      </div>
      <div className="shopping-card">
        <Basket />
      </div>
    </div>
  );
}

export default NavBar;
