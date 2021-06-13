import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { BasketContext } from "./Context";
function Basket() {
  const [basket] = useContext(BasketContext);
  return (
    <Link to={"/detailsbasket"}>
      <Badge badgeContent={basket.length} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </Link>
  );
}

export default Basket;
