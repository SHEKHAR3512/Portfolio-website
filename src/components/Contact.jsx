import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NavigationCircles from "./NavigationCircles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const formData = { ...values, access_key: "5bf5fa29-6102-4947-9772-4e6416858e69" };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());

    if (res.success) {
      MySwal.fire({
        title: "Email Sent Successfully",
        icon: "success",
        backdrop: false,
        background: document.documentElement.classList.contains('dark') ? "#1f2937" : "#ffffff",
        color: document.documentElement.classList.contains('dark') ? "#fbbf24" : "#000000",
      });
      resetForm();
    }
  };

  return (
    <div id="contact" className="h-screen flex flex-col justify-center items-center">
      <div>
      <h2 className="text-4xl font-light md:mb-32 mb-24">Connect With Me</h2>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col lg:space-y-12 space-y-8">
            <div>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 transition-colors duration-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 border border-red-500 dark:border-yellow-500 placeholder-gray-600 dark:placeholder-yellow-500/50 min-h-[100px] max-h-[200px] resize-y py-3 transition-colors duration-500"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="md:w-[500px] w-[330px] h-13 pl-3 text-lg outline-0 bg-red-500 dark:bg-yellow-500 text-white dark:text-gray-900 uppercase font-extrabold cursor-pointer tracking-wide shadow-md shadow-gray-700/20 transition-colors duration-500"
            >
              Contact Us
            </button>
          </Form>
        )}
      </Formik>
    </div>
    <NavigationCircles section="contact" />
    </div>
  );
};

export default Contact;