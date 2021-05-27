import React, { useState, useEffect } from "react";
import "./item.css";
import axios from "axios";
import Paginator from "./Paginator";
import FilterItems from "./FilterItems";

function Item({ match }) {
  const [items, setItems] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [loadFilter, setLoadFilter] = useState(false);
  const [minMax, setMinMax] = useState([]);
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
    console.log(loadFilter);
  }, [match.params.item]);

  useEffect(() => {
    if (items.length > 0) {
      findMinMax();
      setLoadFilter(true);
    }
  }, [items]);
  function findMinMax() {
    var max = items.reduce((a, b) => {
      if (Math.max(a.price, b.price) === a.price) return a;
      else return b;
    });

    var min = items.reduce((a, b) => {
      if (Math.min(a.price, b.price) === a.price) return a;
      else return b;
    });
    setMinMax([min.price, max.price]);
    setPriceFilter([min.price, max.price]);
  }

  function handlePriceFilter(v) {
    setPriceFilter(v);
    console.log("ITEM RERENDER");
  }

  return (
    <div className="item-container">
      {loadFilter ? (
        <FilterItems
          handlePriceFilter={handlePriceFilter}
          initMinMaxPrice={minMax}
          initialValue={priceFilter}
        />
      ) : undefined}

      <Paginator data={items} pageSize={2} priceFilter={priceFilter} />
    </div>
  );
}

export default Item;
