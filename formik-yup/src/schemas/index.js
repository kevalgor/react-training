import * as Yup from "yup";

const signUpSchema = Yup.object({
  username: Yup.string().trim().min(2).max(16).required("Enter your username."),
  email: Yup.string().trim().email().required("Enter your email."),
  password: Yup.string().min(6).required("Enter your password."),
  confirmPassword: Yup.string()
    .required("Re-enter your password.")
    .oneOf([Yup.ref("password"), null], "password must be same."),
});

export { signUpSchema };
