import React, { useState } from "react";
import "../../styles/FormValidation.css";

export default function FormValidation() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    const phoneRegex = /^[0-9]{10}$/;
    const isValidPhone = phoneRegex.test(value);
    if (!isValidPhone) {
      setPhoneError(
        "Please enter a valid 10-digit phone number without spaces or dashes."
      );
    } else {
      setPhoneError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
    setIsMatching(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsMatching(e.target.value === password);
  };

  const handleDOBChange = (e) => {
    setDob(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneError && !passwordError && isMatching) {
      console.log({
        username: e.target.username.value,
        email: e.target.email.value,
        password,
        confirmPassword,
        phoneNumber,
        dob,
      });
    }
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = passwordRegex.test(password);
    if (!isValidPassword) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="form-container">
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username:
          <input type="text" name="username" required className="input" />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            title="Please enter a valid email address."
            className="input"
          />
        </label>
        <br />

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            pattern="^[0-9]{10}$"
            title="Please enter a valid 10-digit phone number without spaces or dashes."
            required
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="input"
          />
          {phoneError && <div className="error">{phoneError}</div>}
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="input"
          />
          {passwordError && <div className="error">{passwordError}</div>}
        </label>
        <br />

        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="input"
          />
          {!isMatching && <div className="error">Passwords do not match</div>}
        </label>
        <br />

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            max={new Date().toISOString().split("T")[0]}
            value={dob}
            onChange={handleDOBChange}
            className="input"
          />
        </label>
        <br />

        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}
