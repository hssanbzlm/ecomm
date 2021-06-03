import React from "react";
import "./commande.css";
import UserForm from "./UserForm";
import DetailsBasket from "./DetailsBasket";

function Commande() {
  return (
    <div className="commande-container">
      <div className="user-form-container">
        <UserForm />
      </div>
      <div className="user-commande">
        <h1 style={{ textAlign: "center" }}> YOUR COMMANDE</h1>
        <DetailsBasket manageBasket={false} />
      </div>
    </div>
  );
}

export default Commande;
