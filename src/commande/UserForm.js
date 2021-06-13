import React, { useEffect, useState } from "react";
import { validateForm } from "../utility/services";
import ModalComponent from "../common/ModalComponent";
import "./userform.css";
function UserForm() {
  const initialValues = {
    name: "",
    lastName: "",
    address: "",
    email: "",
    tel: "",
  };

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  function handleForm(e) {
    e.preventDefault();
    setSubmitted(true);
    setErrors(validateForm(values));
    if (Object.keys(errors).length === 0) {
      setShowModal(true);
    }
  }
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    setErrors(validateForm(values));
  }, [values]);

  function toggleModal() {
    setShowModal(false);
    window.location.reload();
  }
  return (
    <>
      <form className="form-container">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
        ></input>
        {submitted && errors.name && (
          <small className="item-error">{errors.name}</small>
        )}

        <label htmlFor="lastname">Lastname</label>
        <input
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
        ></input>
        {submitted && errors.lastName && (
          <small className="item-error">{errors.lastName}</small>
        )}

        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          value={values.address}
          onChange={handleChange}
        ></input>
        {submitted && errors.address && (
          <small className="item-error">{errors.address}</small>
        )}

        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          value={values.email}
          onChange={handleChange}
        ></input>
        {submitted && errors.email && (
          <small className="item-error">{errors.email}</small>
        )}

        <label htmlFor="mobile">Mobile</label>
        <input
          name="tel"
          type="number"
          value={values.tel}
          onChange={handleChange}
        ></input>
        {submitted && errors.tel && (
          <small className="item-error">{errors.tel}</small>
        )}

        <div className="btn-container">
          <button onClick={handleForm}>Command</button>
        </div>
      </form>
      {showModal && Object.keys(errors).length === 0 && submitted && (
        <ModalComponent>
          <div>
            {" "}
            Thanks for your confidence in our products{" "}
            <div className="buttons">
              <button onClick={toggleModal}> Close</button>{" "}
            </div>{" "}
          </div>{" "}
        </ModalComponent>
      )}
    </>
  );
}

export default UserForm;
