import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Redirect, useHistory, useLocation, useParams } from "react-router";
import Carousel from "./Carousel";
import "./detailsitem.css";
const baseUrl = "https://react-ecomm-back.herokuapp.com/item/";
function DetailsItem() {
  const { itemId, item } = useParams();
  const [itemDetails, setItemsDetails] = useState();
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`${baseUrl}${item}/${itemId}`)
      .then((v) => {
        setItemsDetails(v.data[0]);
      })
      .catch(() => history.push("/notfound"));
  }, [item, itemId, history]);

  return (
    <>
      {itemDetails && (
        <div className="details-item-container">
          <Carousel images={itemDetails.img} />
          <div className="title-description-price-container">
            <div className="title-container">
              <span className="item-title">{itemDetails.title}</span>
              <span className="item-price">{itemDetails.price} DT</span>
            </div>
            <div className="description-container">
              <span className="item-description">
                {itemDetails.description}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetailsItem;
