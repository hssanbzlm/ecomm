import React, { useContext, useEffect, useState } from "react";
import { BasketContext } from "./Context";
import "./detailsbasket.css";
import { calculSum } from "../utility/services";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function DetailsBasket({ manageBasket }) {
  const [basket, setBasket] = useContext(BasketContext);
  const [sum, setSum] = useState();
  const history = useHistory();

  useEffect(() => {
    if (basket.length) {
      setSum(calculSum(basket));
    } else setSum(0);
  }, [basket]);

  function removeItem(id) {
    setBasket(basket.filter((v) => v._id !== id));
  }

  function incrementItem(id) {
    setBasket(
      [...basket].map((v) => {
        if (v._id === id) return { ...v, qte: ++v.qte };
        else return v;
      })
    );
  }
  function decrementItem(id) {
    setBasket(
      [...basket].map((v) => (v._id === id ? { ...v, qte: --v.qte } : v))
    );
  }

  function handleClickCommande() {
    console.log(history);
    history.push("/commande");
  }

  return (
    <div className="details-basket-container">
      {basket.length > 0 && (
        <table className="table table-striped">
          <tbody>
            {basket.map((v) => {
              return (
                <tr key={v._id}>
                  <td>{v.title}</td>
                  <td>{v.price} DT</td>
                  <td>
                    {manageBasket && (
                      <span
                        style={{ cursor: "pointer", color: "green" }}
                        onClick={() => incrementItem(v._id)}
                      >
                        +
                      </span>
                    )}
                    {v.qte}
                    {manageBasket && (
                      <span
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() =>
                          v.qte > 1 ? decrementItem(v._id) : undefined
                        }
                      >
                        -
                      </span>
                    )}
                  </td>
                  <td>{v.qte * v.price} DT </td>
                  {manageBasket && (
                    <td>
                      {" "}
                      <span
                        onClick={() => removeItem(v._id)}
                        style={{ width: "100%", height: "100%" }}
                      >
                        <DeleteIcon style={{ cursor: "pointer" }} />
                      </span>
                    </td>
                  )}
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>{sum} DT </td>
              {manageBasket && <td></td>}
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              {manageBasket && (
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickCommande}
                  >
                    Commande
                  </Button>{" "}
                </td>
              )}
            </tr>
          </tbody>
        </table>
      )}
      {basket.length === 0 && (
        <div
          className="alert alert-warning"
          role="alert"
          style={{ height: "10%" }}
        >
          Your cart is empty- buy some items please !
        </div>
      )}
    </div>
  );
}

export default DetailsBasket;
