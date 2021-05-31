import React, { useContext } from "react";
import { BasketContext } from "./Context";

function ItemCard({ item }) {
  const [basket, setBasket] = useContext(BasketContext);
  console.log(basket);
  function addItem() {
    const index = basket.findIndex((v) => v.id === item.id);
    if (index >= 0) {
      const data = [...basket];
      data[index].qte++;
      setBasket(data);
    } else {
      const newItem = item;
      newItem.qte = 1;
      setBasket(basket.concat([newItem]));
    }
  }

  return (
    <div className="card" style={{ width: "17%", height: "90%" }}>
      <img
        alt="img"
        className="card-img-top"
        src="https://via.placeholder.com/150"
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <p className="card-text">{item.marque}</p>
        <button className="btn btn-primary" onClick={addItem}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
