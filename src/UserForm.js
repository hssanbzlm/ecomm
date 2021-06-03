import React, { useEffect, useState } from "react";
import { validateForm } from "./services";
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
  function handleForm(e) {
    e.preventDefault();
    setSubmitted(true);
    setErrors(validateForm(values));
  }
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    setErrors(validateForm(values));
  }, [values]);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="form-control"
          ></input>
          {submitted && errors.name && (
            <small className="form-text text-muted">{errors.name}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Lastname</label>
          <input
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={handleChange}
            className="form-control"
          ></input>
          {submitted && errors.lastName && (
            <small className="form-text text-muted">{errors.lastName}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            value={values.address}
            onChange={handleChange}
            className="form-control"
          ></input>

          {submitted && errors.address && (
            <div className="form-text text-muted">{errors.address}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
          ></input>
          {submitted && errors.email && (
            <div className="form-text text-muted">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="Tel">Mobile number</label>
          <input
            className="form-control"
            name="tel"
            type="number"
            onChange={handleChange}
          ></input>
          {submitted && errors.tel && (
            <div className="form-text text-muted">{errors.tel}</div>
          )}
        </div>
        <button className="btn btn-primary" onClick={handleForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
