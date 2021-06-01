import React, { useContext } from "react";
import "./container.css";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailsBasket from "./DetailsBasket";
import Item from "./Item";
import Commande from "./Commande";
import { BasketContext } from "./Context";
function Container() {
  const [basket] = useContext(BasketContext);
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/detailsbasket" component={DetailsBasket} />
        <Route exact path="/commande">
          {basket.length > 0 ? <Commande /> : <Redirect to="/pc" />}
        </Route>
        <Route exact path="/:item" component={Item} />
      </Switch>
    </div>
  );
}

export default Container;
