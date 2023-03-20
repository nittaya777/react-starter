import React from "react";
export default ({
  input,
  label,
  name,
  type,
  required,
  meta,
}) => {
  return (
    <div className="row mb-3">
      <label htmlFor={name} className="col-sm-2 form-label">
        {label}:
      </label>
      <div className="col-sm-10">
        <input
          type={type}
          required={required}
          {...input}
          className="form-control"
        />
        {meta.error && meta.touched && (
          <div className="mt-2 text-danger title">{meta.error}</div>
        )}
      </div>
    </div>
  );
};
