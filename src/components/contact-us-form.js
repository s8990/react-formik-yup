import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { InputText } from "../helpers/Formik/inputText";
import { InputEmail } from "../helpers/Formik/inputEmail";
import { InputTextArea } from "../helpers/Formik/inputTextArea";

const ContactUsForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    content: "",
    department: "",
    terms: false,
    gender: "",
    uploadedfile: undefined,
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
    subject: Yup.string().required("Subject is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    content: Yup.string()
      .min(2, "Must be 2 characters or more")
      .max(100, "Must be 15 characters or less")
      .required("content is required"),
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
      }) => (
        <Form className="form form-label-right">
          <div className="form-group">
            <label htmlFor="firstName">FirstName</label>
            <InputText name="firstName" touched={touched} errors={errors} />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <InputText name="lastName" touched={touched} errors={errors} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <InputEmail name="email" touched={touched} errors={errors} />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <InputText name="subject" touched={touched} errors={errors} />
          </div>

          <div className="form-group">
            <label htmlFor="content">Content</label>
            <InputTextArea name="content" touched={touched} errors={errors} />
          </div>

          <div className="form-group">
            <label htmlFor="department">department</label>
            <Field
              name="department"
              as="select"
              multiple={false}
              className="form-control"
            >
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </Field>
          </div>

          <div className="form-group">
            <div className="form-check">
              <Field
                name="terms"
                className="form-check-input"
                type="checkbox"
                id="terms"
              />
              <label className="form-check-label" htmlFor="terms">
                Accept Terms & Conditions
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="form-check">
              <Field
                className="form-check-input"
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
                className="form-check-input"
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
              type="submit"
              className="btn btn-primary"
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
