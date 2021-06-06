import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Redirect, useHistory, useLocation, useParams } from "react-router";
import Carousel from "./Carousel";
import "./detailsitem.css";

function DetailsItem() {
  const { itemId, item } = useParams();
  const [itemDetails, setItemsDetails] = useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${item}/${itemId}`)
      .then((v) => {
        setItemsDetails(v.data);
      })
      .catch(() => history.push("/notfound"));
  }, [item, itemId, history]);

  return (
    <div className="details-item-container">
      {itemDetails && <Carousel images={itemDetails.img} />}
    </div>
  );
}

export default DetailsItem;
