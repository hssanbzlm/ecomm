import React, { useContext } from "react";
import "./container.css";
import { Route, Switch, Redirect } from "react-router-dom";
import DetailsBasket from "./DetailsBasket";
import Item from "./Item";
import Commande from "./Commande";
import DetailsItem from "./DetailsItem";
import NotFound from "./NotFound";
import { BasketContext } from "./Context";
function Container() {
  const [basket] = useContext(BasketContext);
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/notfound" component={NotFound} />
        <Route
          exact
          path="/detailsbasket"
          render={() => <DetailsBasket manageBasket={true} />}
        />
        <Route exact path="/commande">
          {basket.length > 0 ? <Commande /> : <Redirect to="/pc" />}
        </Route>
        <Route exact path="/:item" component={Item} />
        <Route exact path="/:item/:itemId" component={DetailsItem} />
      </Switch>
    </div>
  );
}

export default Container;
