import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormCard from "../components/FormCard";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import { validateSignup } from "../utils/validation";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateSignup(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Sign up successful! Redirecting to Login...");
      navigate("/login");
    }
  };

  return (
    <FormCard title="Create new Account">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid-2">
          <InputField
            label="NAME"
            name="name"
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputField
            label="USERNAME"
            name="username"
            value={values.username}
            onChange={handleChange}
            error={errors.username}
          />
        </div>

        <div className="grid-2">
          <InputField
            label="EMAIL"
            name="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputField
            label="PHONE NO."
            name="phone"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>

        <div className="grid-2">
          <PasswordField
            label="NEW PASSWORD"
            name="password"
            value={values.password}
            onChange={handleChange}
            error={errors.password}
          />
          <PasswordField
            label="CONFIRM NEW PASSWORD"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
          />
        </div>

        <div className="actions">
          <button className="primary-btn" type="submit">
            SIGN UP
          </button>
          <p className="muted">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </FormCard>
  );
}
