import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { addUserSchema, editUserSchema } from "../schemas";
import { updateData, insertData } from "../apis/api";

const UserForm = ({ isEdit, data, userFormHandleClose, userList }) => {
  const [initialFormValue, setInitialFormValue] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setInitialFormValue({
      name: data?.name || "",
      email: data?.email || "",
      mobile: data?.mobile || "",
      password: "",
      confirmPassword: "",
    });
  }, [data, isEdit]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialFormValue,
      validationSchema: isEdit ? editUserSchema : addUserSchema,
      onSubmit: (values, action) => {
        isEdit
          ? updateData(data._id, values)
              .then((res) => {
                userList();
              })
              .catch((err) => console.log(err))
          : insertData(values)
              .then((res) => {
                userList();
              })
              .catch((err) => console.log(err));
        userFormHandleClose();
        action.resetForm();
      },
      enableReinitialize: true,
    });

  //   console.log(errors, values);

  return (
    <div style={{ margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <h2>{isEdit ? "Edit user" : "Add user"}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
            alignItems: "center",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            style={{ width: "70%", height: "25px" }}
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.name && touched.name ? (
          <p style={{ color: "Red" }}>{errors.name}</p>
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
          <label htmlFor="mobile">Mobile</label>
          <input
            style={{ width: "70%", height: "25px" }}
            type="mobile"
            id="mobile"
            name="mobile"
            placeholder="mobile"
            value={values.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.mobile && touched.mobile ? (
          <p style={{ color: "Red" }}>{errors.mobile}</p>
        ) : null}
        {!isEdit ? (
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
        ) : null}
        {!isEdit && errors.password && touched.password ? (
          <p style={{ color: "Red" }}>{errors.password}</p>
        ) : null}
        {!isEdit ? (
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
        ) : null}
        {!isEdit && errors.confirmPassword && touched.confirmPassword ? (
          <p style={{ color: "Red" }}>{errors.confirmPassword}</p>
        ) : null}
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
