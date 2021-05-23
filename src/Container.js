import React from "react";
import "./container.css";
import { Route, Switch } from "react-router-dom";
import Pc from "./Pc";
import Smartphone from "./Smartphone";
function Container() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/">
          <Pc />
        </Route>

        <Route exact path="/phone">
          <Smartphone />
        </Route>
      </Switch>
    </div>
  );
}

export default Container;
