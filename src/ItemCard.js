import React from "react";
function ItemCard({ item }) {
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
      </div>
    </div>
  );
}

export default ItemCard;
