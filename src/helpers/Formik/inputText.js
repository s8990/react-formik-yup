import React from "react";
import { Formik, Field, Form } from "formik";

export const InputText = ({ name, touched, errors }) => {
  return (
    <React.Fragment>
      <Field
        name={name}
        className={
          touched[name] && errors[name]
            ? "form-control is-invalid"
            : "form-control"
        }
        type="text"
      />
      {touched[name] && errors[name] ? (
        <div className="invalid-feedback">{errors[name]}</div>
      ) : null}
    </React.Fragment>
  );
};
