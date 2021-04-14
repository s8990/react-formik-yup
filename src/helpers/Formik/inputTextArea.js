import React from "react";
import { Field } from "formik";

export const InputTextArea = ({ name, label, touched, errors, rows, cols }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        className={
          touched[name] && errors[name]
            ? "form-control is-invalid"
            : "form-control"
        }
        as="textarea"
        rows={rows}
        cols={cols}
      />
      {touched[name] && errors[name] ? (
        <div className="invalid-feedback">{errors[name]}</div>
      ) : null}
    </div>
  );
};
