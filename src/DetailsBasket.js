import React, { useContext } from "react";
import { BasketContext } from "./Context";
import "./detailsbasket.css";
function DetailsBasket() {
  const [basket, setBasket] = useContext(BasketContext);

  return (
    <div className="details-basket-container">{basket.map((v) => v.id)}</div>
  );
}

export default DetailsBasket;
