import React from "react";
import "./container.css";
import { Route, Switch } from "react-router-dom";
import DetailsBasket from "./DetailsBasket";
import Item from "./Item";

function Container() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/detailsbasket" component={DetailsBasket} />
        <Route exact path="/:item" component={Item} />
      </Switch>
    </div>
  );
}

export default Container;
