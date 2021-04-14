import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  InputText,
  InputNumber,
  InputEmail,
  InputTextArea,
  InputSelect,
  InputTrueFalse,
} from "../helpers/Formik";

const ContactUsForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    subject: "",
    content: "",
    department: "",
    terms: false,
    gender: "",
    uploadedfile: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("FirstName is required"),
    lastName: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(15, "Must be 15 characters or less")
      .required("LastName is required"),
    age: Yup.number()
      .min(8, "minimum = 8")
      .max(120, "maximum = 120")
      .required("Age is required"),
    subject: Yup.string().required("Subject is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    content: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(100, "Must be 15 characters or less")
      .required("Content is required"),
    department: Yup.string().required("Department is required"),
    terms: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
    gender: Yup.string().required("gender is required"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        handleChange,
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        status,
        touched,
        handleBlur,
        isSubmitting,
        dirty,
        handleReset,
      }) => (
        <Form className="form form-label-right">
          <InputText
            name="firstName"
            label="FirstName"
            touched={touched}
            errors={errors}
          />

          <InputText
            name="lastName"
            label="LastName"
            touched={touched}
            errors={errors}
          />

          <InputNumber
            name="age"
            label="Your Age"
            touched={touched}
            errors={errors}
          />

          <InputEmail
            name="email"
            label="Email Address"
            touched={touched}
            errors={errors}
          />

          <InputText
            name="subject"
            label="Subject"
            touched={touched}
            errors={errors}
          />

          <InputTextArea
            name="content"
            label="Content"
            touched={touched}
            errors={errors}
            rows={3}
            cols={10}
          />

          <InputSelect
            name="department"
            label="Department"
            touched={touched}
            errors={errors}
            multiple={false}
          >
            <option value="" label="Please Select..." />
            <option value="one" label="One" />
            <option value="two" label="Two" />
            <option value="three" label="Three" />
            <option value="four" label="Four" />
          </InputSelect>

          <InputTrueFalse
            name="terms"
            label="Accept Terms & Conditions"
            touched={touched}
            errors={errors}
          />

          <div className="form-group">
            <label>Gender</label>
            <div className="form-check">
              <Field
                // className="form-check-input"
                className={
                  touched.gender && errors.gender
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
                type="radio"
                name="gender"
                id="gender1"
                value="male"
              />
              <label className="form-check-label" htmlFor="gender1">
                Male
              </label>
            </div>
            <div className="form-check">
              <Field
                className={
                  touched.gender && errors.gender
                    ? "form-check-input is-invalid"
                    : "form-check-input"
                }
                type="radio"
                name="gender"
                id="gender2"
                value="female"
              />
              <label className="form-check-label" htmlFor="gender2">
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Upload File</label>
            <div className="custom-file">
              <Field
                type="file"
                name="uploadedfile"
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </div>

          <div className="form-group">
            <button
              type="button"
              className="btn btn-light"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button
              type="submit"
              className="btn btn-primary ml-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Please wait..." : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
