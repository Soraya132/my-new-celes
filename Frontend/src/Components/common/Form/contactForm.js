import React, { useState } from "react";
import axios from "axios";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./form.css";


const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});
export default function ContactForm() {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
    setTimeout(() => {
      setServerState(null);
    }, 3000);
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: 'http://localhost:5000/api/contact-us',
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          "Thanks for your message! We'll be in touch soon."
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.error(error)
        handleServerResponse(false, "There was an error");
      });
  };

  return (
    <div className="form-parts bg-opacity-50 backdrop-filter backdrop-blur-2xl !py-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center !w-[90%] mx-auto px-3 sm:px-6 my-14 ">
      <div className="form-parts-first">
        <h1 className="!text-4xl font-[600] text-center">
          Begin your <span>PROJECT</span> with Celestial Crafters.
        </h1>
        <p className="!text-white text-center">
          Transform your vision into reality.{" "}
        </p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form id="fs-frm" noValidate className="pt-4">
            <div>
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <Field id="name" type="text" name="name" />
              <ErrorMessage
                name="name"
                className="errorMsg !text-red-700"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <Field id="email" type="email" name="email" />
              <ErrorMessage
                name="email"
                className="errorMsg text-red-700"
                component="p"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <Field id="message" name="message" component="textarea" />
              <ErrorMessage
                name="message"
                className="errorMsg text-red-700"
                component="p"
              />
            </div>
            <div>
              <button
                className="text-white justify-center w-[180px] mt-10 text-sm font-semibold py-3 px-4 bg-blue-700 rounded-md flex items-center gap-1"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>

            {serverState && (
              <div className={!serverState.ok ? "errorMsg" : ""}>

            <p className="text-white">{serverState.msg}</p>    
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
