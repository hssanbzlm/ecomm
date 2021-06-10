import React, { useState, useEffect, useCallback, useRef } from "react";
import "./item.css";
import axios from "axios";
import Paginator from "./Paginator";
import FilterItems from "./FilterItems";
import CircularProgress from "@material-ui/core/CircularProgress";
import findMaxPrice, {
  findMinPrice,
  initializeFilterMarque,
  countMarques,
} from "../utility/services";
import { useHistory } from "react-router";
const baseUrl = "http://localhost:3000/";

function Item({ match }) {
  console.log("item");
  const [items, setItems] = useState(null);
  const [priceFilter, setPriceFilter] = useState([]);
  const [loadFilter, setLoadFilter] = useState();
  const [minMaxPrice, setMinMaxPrice] = useState([]);
  const [marques, setMarques] = useState({});
  const [marquesFilter, setMarquesFilter] = useState({});
  const history = useHistory();
  const memoizedGetData = useCallback(() => {
    axios
      .get(`${baseUrl}${match.params.item}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch(() => history.push("/notfound"));
  }, [match.params.item, history]);

  useEffect(() => {
    setLoadFilter(false);
    memoizedGetData();
    console.log("hello");
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
    console.log("hello");
  }, [items]);

  const HandlePriceFilter = useCallback(
    (v) => {
      setPriceFilter(v);
    },
    [setPriceFilter]
  );
  const handleMarquesFilter = useCallback(
    (marques) => {
      const data = Object.assign({}, marquesFilter);
      data[marques.value] = marques.checked;
      setMarquesFilter(data);
    },
    [marquesFilter]
  );
  return (
    <div className="item-container">
      {loadFilter ? (
        <>
          <FilterItems
            handlePriceFilter={HandlePriceFilter}
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
