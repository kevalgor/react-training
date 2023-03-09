import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialFormValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormikYupForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFormValue,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        alert("success");
      },
    });
  return (
    <div style={{ width: "30%", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
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
            style={{ width: "70%", height: "25px" }}
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.username && touched.username ? (
          <p style={{ color: "Red" }}>{errors.username}</p>
        ) : null}
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
            style={{ width: "70%", height: "25px" }}
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
          <p style={{ color: "Red" }}>{errors.email}</p>
        ) : null}
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
            style={{ width: "70%", height: "25px" }}
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.password && touched.password ? (
          <p style={{ color: "Red" }}>{errors.password}</p>
        ) : null}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            style={{ width: "70%", height: "25px" }}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirm password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.confirmPassword && touched.confirmPassword ? (
          <p style={{ color: "Red" }}>{errors.confirmPassword}</p>
        ) : null}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormikYupForm;
