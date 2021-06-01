import React, { useState, useEffect, useCallback } from "react";
import "./item.css";
import axios from "axios";
import Paginator from "./Paginator";
import FilterItems from "./FilterItems";
import CircularProgress from "@material-ui/core/CircularProgress";
import findMaxPrice, {
  findMinPrice,
  initializeFilterMarque,
  countMarques,
} from "./services";

function Item({ match }) {
  const [items, setItems] = useState(null);
  const [priceFilter, setPriceFilter] = useState([]);
  const [loadFilter, setLoadFilter] = useState();
  const [minMaxPrice, setMinMaxPrice] = useState([]);
  const [marques, setMarques] = useState({});
  const [marquesFilter, setMarquesFilter] = useState({});
  console.log("from Item");
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

  useEffect(() => {
    if (items) {
      var minPrice = findMinPrice(items);
      var maxPrice = findMaxPrice(items);
      var listOfMarques = countMarques(items);
      var filterMarques = initializeFilterMarque(items);
      setMinMaxPrice([minPrice.price, maxPrice.price]);
      setPriceFilter([minPrice.price, maxPrice.price]);
      setMarques(listOfMarques);
      setMarquesFilter(filterMarques);
      setLoadFilter(true);
    }
  }, [items]);

  const memoizedHandlePriceFilter = useCallback(
    (v) => {
      setPriceFilter(v);
    },
    [setPriceFilter]
  );
  function handleMarquesFilter(marques) {
    const data = Object.assign({}, marquesFilter);
    data[marques.value] = marques.checked;
    setMarquesFilter(data);
  }
  return (
    <div className="item-container">
      {loadFilter ? (
        <>
          <FilterItems
            handlePriceFilter={memoizedHandlePriceFilter}
            initMinMaxPrice={minMaxPrice}
            value={priceFilter}
            marques={marques}
            handleMarquesFilter={handleMarquesFilter}
          />
          <Paginator
            data={items}
            pageSize={4}
            priceFilter={priceFilter}
            marquesFilter={marquesFilter}
          />
        </>
      ) : (
        <CircularProgress size={50} />
      )}
    </div>
  );
}

export default Item;
