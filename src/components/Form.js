import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "./Button";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import formStyles from "./form.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
});

const FormComponent = () => {
  const [sent, setSent] = useState({
    value: "",
    submitted: false,
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmit = (values) => {
    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID, //Email service as defined in EmailJS setting
        process.env.REACT_APP_TEMPLATE_ID, // Email template ID provided by EmailJS
        {
          from_name: values.name,
          email: values.email,
          message: values.message,
        },
        process.env.REACT_APP_USER_ID // EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSent({ submitted: true });
  };

  /*console.log("Form values", formik.values);*/

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className={formStyles.section}>
          <label className={formStyles.label} htmlFor="name">
            Name
          </label>
          <Field
            className="u-full-width"
            placeholder="Your full name please"
            type="text"
            id="name"
            name="name"
          />
          <ErrorMessage
            name="name"
            render={(msg) => <div className={formStyles.error}>{msg}</div>}
          />
        </div>
        <div className={formStyles.section}>
          <label className={formStyles.label} htmlFor="email">
            Email
          </label>
          <Field
            className="u-full-width"
            placeholder="name@mail.com"
            type="email"
            id="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            render={(msg) => <div className={formStyles.error}>{msg}</div>}
          />
        </div>
        <div className={formStyles.section}>
          <label className={formStyles.label} htmlFor="message">
            Message
          </label>
          <Field
            as="textarea"
            className="u-full-width"
            placeholder="Hi. Could you send me a qoute? Here is the link for the design ..."
            id="message"
            name="message"
          />
        </div>
        <div className={formStyles.btn}>
          {sent.submitted ? (
            <Button text="Message sent" type="submit" disabled={true} />
          ) : (
            <Button text="Send" type="submit"></Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default FormComponent;
