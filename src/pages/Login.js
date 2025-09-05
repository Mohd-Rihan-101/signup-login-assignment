import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormCard from "../components/FormCard";
import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import { validateLogin } from "../utils/validation";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateLogin(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // fake login action
      alert("Logged in successfully! (demo)");
    }
  };

  return (
    <FormCard title="Login" subtitle="Sign in to continue">
      <form onSubmit={handleSubmit} noValidate>
        <InputField
          label="USERNAME"
          name="username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />

        <PasswordField
          label="NEW PASSWORD"
          name="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button className="primary-btn" type="submit">
          LOGIN
        </button>
        <p className="muted">
          Don’t have Account? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </FormCard>
  );
}
