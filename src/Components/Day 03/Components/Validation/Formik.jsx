import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/Formik.css"; // Ensure this path is correct

export default function Formik() {
  // useFormik hook to manage form state and validation
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      dob: "",
    },
    // Yup validation schema for form validation
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10-digit phone number")
        .required("Required"),
      password: Yup.string()
        .required("Required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
        ),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      dob: Yup.date()
        .max(new Date(), "Date cannot be in the future")
        .min(
          new Date(new Date().setFullYear(new Date().getFullYear() - 120)),
          "You cannot be more than 120 years old"
        ),
    }),
    // Function to handle form submission
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h1>Use of Formik for Form Validation Example</h1>

      <label>
        Username:
        <input
          type="text"
          name="username"
          {...formik.getFieldProps("username")}
          className="input"
        />
      </label>
      {formik.touched.username && formik.errors.username ? (
        <div className="error">{formik.errors.username}</div>
      ) : null}
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          {...formik.getFieldProps("email")}
          className="input"
        />
      </label>
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}
      <br />

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          {...formik.getFieldProps("phoneNumber")}
          className="input"
        />
      </label>
      {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
        <div className="error">{formik.errors.phoneNumber}</div>
      ) : null}
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
          className="input"
        />
      </label>
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}
      <br />

      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
          className="input"
        />
      </label>
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="error">{formik.errors.confirmPassword}</div>
      ) : null}
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="dob"
          {...formik.getFieldProps("dob")}
          className="input"
        />
      </label>
      {formik.touched.dob && formik.errors.dob ? (
        <div className="error">{formik.errors.dob}</div>
      ) : null}
      <br />

      <button type="submit" className="button">
        Register
      </button>
    </form>
  );
}
