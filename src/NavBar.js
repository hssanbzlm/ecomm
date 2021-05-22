import React from "react";
import "./navbar.css";
import Basket from "./Basket";
function NavBar() {
  return (
    <>
      <div className="container">
        <div>Pc</div>

        <div> Smartphone</div>
      </div>
      <div className="shopping-card">
        <Basket />
      </div>
    </>
  );
}

export default NavBar;
