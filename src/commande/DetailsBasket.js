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
    setBasket(basket.filter((v) => v.id !== id));
  }

  function incrementItem(id) {
    setBasket(
      [...basket].map((v) => {
        if (v.id === id) return { ...v, qte: ++v.qte };
        else return v;
      })
    );
  }
  function decrementItem(id) {
    setBasket(
      [...basket].map((v) => (v.id === id ? { ...v, qte: --v.qte } : v))
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
                <tr key={v.id}>
                  <td>{v.title}</td>
                  <td>{v.price}</td>
                  <td>
                    {manageBasket && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => incrementItem(v.id)}
                      >
                        +
                      </span>
                    )}
                    {v.qte}
                    {manageBasket && (
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          v.qte > 1 ? decrementItem(v.id) : undefined
                        }
                      >
                        -
                      </span>
                    )}
                  </td>
                  <td>{v.qte * v.price}</td>
                  {manageBasket && (
                    <td style={{ width: "8.33%" }}>
                      {" "}
                      <span
                        onClick={() => removeItem(v.id)}
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
              <td>{sum}</td>
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