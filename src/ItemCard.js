import React, {
  lazy,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { BasketContext } from "./Context";
const ModalComponent = lazy(() => import("./ModalComponent"));
function ItemCard({ item }) {
  const [basket, setBasket] = useContext(BasketContext);
  const [showModal, setShowModal] = useState(false);

  function addItem() {
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

  function toggleModal() {
    setShowModal(false);
  }

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
