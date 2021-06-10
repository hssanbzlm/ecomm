import React, {
  lazy,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { BasketContext } from "../commande/Context";
import { useHistory, useLocation } from "react-router-dom";
import "./itemcard.css";
const ModalComponent = lazy(() => import("../common/ModalComponent"));
function ItemCard({ item }) {
  console.log("item card");
  const [basket, setBasket] = useContext(BasketContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const history = useHistory();

  function addItem(e) {
    e.stopPropagation();
    const index = basket.findIndex((v) => v._id === item._id);
    if (index >= 0) {
      const data = [...basket];
      data[index].qte++;
      setBasket(data);
    } else {
      const newItem = Object.assign({}, item);
      newItem.qte = 1;
      setBasket(basket.concat([newItem]));
    }
    setShowModal(true);
  }

  function toggleModal(e) {
    e.stopPropagation();
    setShowModal(false);
  }
  function rediredtToDetailsItem(e) {
    e.stopPropagation();
    console.log(location.pathname);
    history.push(`${location.pathname}/${item._id}`);
  }

  return (
    <div onClick={rediredtToDetailsItem} className="card-container">
      <img className="item-card-img" alt="img" src={item.img[0]} />
      <div className="item-card-content">
        <p className="item-card-title">{item.title}</p>
        <p className="item-card-price">{item.price} DT</p>
        <button onClick={addItem}>Add to cart</button>
      </div>

      {showModal && (
        <ModalComponent>
          <div>
            {" "}
            <b>{item.title}</b> has been added to your basket.{" "}
            <span className="modal-msg">
              You can modify the quantiy in basket section above{" "}
            </span>
            <div className="buttons">
              <button onClick={toggleModal}> Close</button>{" "}
            </div>{" "}
          </div>{" "}
        </ModalComponent>
      )}
    </div>
  );
}

export default ItemCard;
