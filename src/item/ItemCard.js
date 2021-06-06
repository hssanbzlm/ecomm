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
const ModalComponent = lazy(() => import("../common/ModalComponent"));
function ItemCard({ item }) {
  const [basket, setBasket] = useContext(BasketContext);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const history = useHistory();

  function addItem(e) {
    e.stopPropagation();
    const index = basket.findIndex((v) => v.id === item.id);
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
    history.push(`${location.pathname}/${item.id}`);
  }

  return (
    <div
      onClick={rediredtToDetailsItem}
      className="card"
      style={{ width: "17%", height: "90%", cursor: "pointer" }}
    >
      <img
        style={{ height: "50%" }}
        alt="img"
        className="card-img-top"
        src={item.img[0]}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.marque}</p>
        <p className="card-text">{item.price}</p>
        <button className="btn btn-primary" onClick={addItem}>
          Add to cart
        </button>
      </div>

      {showModal && (
        <ModalComponent>
          <div>
            <h1> {item.title} has been added to your basket </h1>{" "}
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
