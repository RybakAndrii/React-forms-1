import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        phoneNumber: "",
        gender: "",
        subject: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        birthday: Yup.date().required("Birthday is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        gender: Yup.string().required("Please select a gender"),
        subject: Yup.string().required("Please select a subject"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form className="form-container">
          <h2>Registration Form</h2>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage
                name="firstName"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage
                name="lastName"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="birthday">Birthday</label>
              <Field name="birthday" type="date" />
              <ErrorMessage
                name="birthday"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="gender">Gender</label>
              <div>
                <label>
                  <Field name="gender" type="radio" value="Male" />
                  Male
                </label>
                <label>
                  <Field name="gender" type="radio" value="Female" />
                  Female
                </label>
              </div>
              <ErrorMessage
                name="gender"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number</label>
              <Field name="phoneNumber" type="text" />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="error-message"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <Field name="subject" as="select">
              <option value="">Select subject</option>
              <option value="Subject 1">Subject 1</option>
              <option value="Subject 2">Subject 2</option>
              <option value="Subject 3">Subject 3</option>
            </Field>
            <ErrorMessage
              name="subject"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
