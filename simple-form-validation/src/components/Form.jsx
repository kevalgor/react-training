import React, { useState, useEffect } from "react";

const Form = () => {
  const initialFormData = {
    username: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "-username is required.";
    } else {
      const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
      if (!usernameRegex.test(values.username)) {
        errors.username = "-username format invalid.";
      }
    }
    if (!values.email) {
      errors.email = "-email is required.";
    } else {
      const mailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!mailRegex.test(values.email)) {
        errors.email = "-email format invalid.";
      }
    }
    if (!values.mobile) {
      errors.mobile = "-mobile is required.";
    } else {
      const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      if (!mobileRegex.test(values.mobile)) {
        errors.mobile = "-mobile format invalid.";
      }
    }
    if (!values.password) {
      errors.password = "-password is required.";
    } else {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(values.password)) {
        errors.password = "-password format invalid.";
      }
    }
    return errors;
  };
  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormData(initialFormData);
    }
  }, [formData]);
  return (
    <div>
      <pre
        style={{
          fontSize: "18px",
          background: "#FFBEA1",
          width: "30%",
          margin: "15px auto",
        }}
      >
        {Object.keys(formErrors).length === 0 && isSubmit
          ? "Sign up successful"
          : ""}
      </pre>
      <form style={{ width: "30%", margin: "auto" }} onSubmit={submitForm}>
        <h2>Sign-up Form</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            style={{ width: "70%", height: "25px" }}
            onChange={handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{formErrors.username}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            style={{ width: "70%", height: "25px" }}
            onChange={handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{formErrors.email}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            style={{ width: "70%", height: "25px" }}
            onChange={handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{formErrors.mobile}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            style={{ width: "70%", height: "25px" }}
            onChange={handleChange}
          />
        </div>
        <div style={{ color: "red" }}>{formErrors.password}</div>
        <button
          type="submit"
          style={{ width: "80px", height: "30px", fontSize: "16px" }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
