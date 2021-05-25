import React, { useState, useEffect } from "react";
import "./item.css";
import axios from "axios";
import Paginator from "./Paginator";

function Item({ match }) {
  const [items, setItems] = useState([]);

  function getData() {
    axios
      .get(`http://localhost:3000/${match.params.item}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
    console.log("rerender");
  }, [match.params.item]);

  return (
    <div className="item-container">
      <Paginator data={items} pageSize={2} />
    </div>
  );
}

export default Item;
