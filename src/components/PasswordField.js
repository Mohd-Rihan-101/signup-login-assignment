import React, { useState } from "react";

export default function PasswordField({ label, name, value, onChange, error }) {
  const [show, setShow] = useState(false);
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <div className="password-wrap">
        <input
          className={`field-input ${error ? "has-error" : ""}`}
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=""
          autoComplete="off"
        />

      </div>
      {error && <div className="error-text">{error}</div>}
    </div>
  );
}
