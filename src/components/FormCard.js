import React from "react";

export default function FormCard({ title, subtitle, children }) {
  return (
    <div className="page-wrap">
      <div className="card">
        <div className="card-header">
          <h1>{title}</h1>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
