import React from "react";
import "./container.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Item from "./Item";

function Container() {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/:item" component={Item} />
      </Switch>
    </div>
  );
}

export default Container;
