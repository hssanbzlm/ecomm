import React, { useState, useEffect, useCallback } from "react";
import "./item.css";
import axios from "axios";
import Paginator from "./Paginator";
import FilterItems from "./FilterItems";
import CircularProgress from "@material-ui/core/CircularProgress";

function Item({ match }) {
  const [items, setItems] = useState(null);
  const [priceFilter, setPriceFilter] = useState([]);
  const [loadFilter, setLoadFilter] = useState();
  const [minMaxPrice, setMinMaxPrice] = useState([]);
  const [marques, setMarques] = useState({});

  const memoizedGetData = useCallback(() => {
    axios
      .get(`http://localhost:3000/${match.params.item}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [match.params.item]);

  useEffect(() => {
    setLoadFilter(false);
    memoizedGetData();
  }, [memoizedGetData]);

  const memoizedFindMinMax = useCallback(() => {
    var max = items.reduce((a, b) => {
      if (Math.max(a.price, b.price) === a.price) return a;
      else return b;
    });

    var min = items.reduce((a, b) => {
      if (Math.min(a.price, b.price) === a.price) return a;
      else return b;
    });
    setMinMaxPrice([min.price, max.price]);
    setPriceFilter([min.price, max.price]);
  }, [items]);

  const memoizedFindMarques = useCallback(() => {
    var marques = [];

    for (let i = 0; i < items.length; i++) {
      if (marques[items[i].marque]) {
        marques[items[i].marque]++;
      } else {
        marques[items[i].marque] = 1;
      }
    }

    setMarques(marques);
  }, [items]);
  useEffect(() => {
    if (items) {
      memoizedFindMinMax();
      memoizedFindMarques();
      setLoadFilter(true);
    }
  }, [memoizedFindMarques, memoizedFindMinMax, items]);

  const memoizedHandlePriceFilter = useCallback(
    (v) => {
      setPriceFilter(v);
    },
    [setPriceFilter]
  );

  return (
    <div className="item-container">
      {loadFilter ? (
        <>
          <FilterItems
            handlePriceFilter={memoizedHandlePriceFilter}
            initMinMaxPrice={minMaxPrice}
            value={priceFilter}
            marques={marques}
          />
          <Paginator data={items} pageSize={4} priceFilter={priceFilter} />
        </>
      ) : (
        <CircularProgress size={50} />
      )}
    </div>
  );
}

export default Item;
