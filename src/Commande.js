import React from "react";
import "./commande.css";
import UserForm from "./UserForm";

function Commande() {
  return (
    <div className="commande-container">
      <div className="user-form-container">
        <UserForm />
      </div>
      <div className="user-commande"></div>
    </div>
  );
}

export default Commande;
