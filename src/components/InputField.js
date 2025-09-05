import React from "react";

export default function InputField({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  error,
}) {
  return (
    <div className="field">
      <label className="field-label">{label}</label>
      <input
        className={`field-input ${error ? "has-error" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
      />
      {error && <div className="error-text">{error}</div>}
    </div>
  );
}
