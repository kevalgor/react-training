import * as Yup from "yup";

const addUserSchema = Yup.object({
  name: Yup.string().trim().min(2).max(16).required("Enter your username."),
  email: Yup.string().trim().email().required("Enter your email."),
  mobile: Yup.string()
    .trim()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number.")
    .required("Enter your email."),
  password: Yup.string().min(6).required("Enter your password."),
  confirmPassword: Yup.string()
    .min(6)
    .required("Re-enter your password.")
    .oneOf([Yup.ref("password"), null], "password must be same."),
});

const editUserSchema = Yup.object({
  name: Yup.string().trim().min(2).max(16).required("Enter your username."),
  email: Yup.string().trim().email().required("Enter your email."),
  mobile: Yup.string()
    .trim()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid mobile number.")
    .required("Enter your email."),
});

export { addUserSchema, editUserSchema };
