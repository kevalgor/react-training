// import React from "react";
// import { useForm } from "react-hook-form";

// const ReactHookForm = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();
//   const onSubmit = () => alert("success");
//   return (
//     <div>
//       <div>
//         <form
//           style={{ width: "30%", margin: "auto" }}
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <h2>Sign-up Form</h2>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               margin: "20px 20px",
//               alignItems: "center",
//             }}
//           >
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               {...register("username", {
//                 required: true,
//                 pattern: /^[a-zA-Z0-9_-]{3,16}$/,
//               })}
//               aria-invalid={errors.username ? "true" : "false"}
//               id="username"
//               name="username"
//               style={{ width: "70%", height: "25px" }}
//             />
//           </div>
//           {errors.username?.type === "required" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Username is required
//             </p>
//           )}
//           {errors.username?.type === "pattern" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Username format is invalid
//             </p>
//           )}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               margin: "20px 20px",
//               alignItems: "center",
//             }}
//           >
//             <label htmlFor="email">Email</label>
//             <input
//               type="text"
//               {...register("email", {
//                 required: true,
//                 pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
//               })}
//               aria-invalid={errors.email ? "true" : "false"}
//               id="email"
//               name="email"
//               style={{ width: "70%", height: "25px" }}
//             />
//           </div>
//           {errors.email?.type === "required" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Email is required
//             </p>
//           )}
//           {errors.email?.type === "pattern" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Email format is invalid
//             </p>
//           )}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               margin: "20px 20px",
//               alignItems: "center",
//             }}
//           >
//             <label htmlFor="password">Password</label>
//             <input
//               type="text"
//               {...register("password", {
//                 required: true,
//                 pattern:
//                   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//               })}
//               aria-invalid={errors.password ? "true" : "false"}
//               id="password"
//               name="password"
//               style={{ width: "70%", height: "25px" }}
//             />
//           </div>
//           {errors.password?.type === "required" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Password is required
//             </p>
//           )}
//           {errors.password?.type === "pattern" && (
//             <p role="alert" style={{ color: "Red" }}>
//               * Password format is invalid
//             </p>
//           )}
//           <input type="submit" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ReactHookForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().trim().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password should contain 1 uppercase, 1 lowercase, 1 special character and 1 number."
      ),
  })
  .required();

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => alert("success");

  return (
    <div>
      <form
        style={{ width: "30%", margin: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {...register("username")}
            aria-invalid={errors.username ? "true" : "false"}
            id="username"
            name="username"
            style={{ width: "70%", height: "25px" }}
          />
        </div>
        <p style={{ color: "Red" }}>{errors.username?.message}</p>
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
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            id="email"
            name="email"
            style={{ width: "70%", height: "25px" }}
          />
        </div>
        <p style={{ color: "Red" }}>{errors.email?.message}</p>
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
            {...register("password")}
            aria-invalid={errors.password ? "true" : "false"}
            id="password"
            name="password"
            style={{ width: "70%", height: "25px" }}
          />
        </div>
        <p style={{ color: "Red" }}>{errors.password?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactHookForm;
