import React from "react";
import { motion as m } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import "./contact.css";

export const Contact = () => {
  const schema = yup.object().shape({
    full_name: yup.string().required(),
    email_address: yup.string().email().required(),
    mobile_number: yup
      .number()
      .nullable()
      .transform((_, val) => (val !== "" ? Number(val) : null)),
    email_subject: yup.string().required(),
    message: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        "#contact-Form",
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent!");
          reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <m.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="contact-content">
        <h1>
          Contact <span>Me!</span>
        </h1>
        <form id="contact-Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              className="full-name"
              style={errors.full_name && { border: "3px solid #F75D59" }}
              {...register("full_name")}
            />
            <input
              type="text"
              name="email_address"
              placeholder="Email Address"
              className="email-address"
              style={errors.email_address && { border: "3px solid #F75D59" }}
              {...register("email_address")}
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              name="mobile_number"
              placeholder="Mobile Number"
              className="mobile-number"
              {...register("mobile_number")}
            />
            <input
              type="text"
              name="email_subject"
              placeholder="Email Subject"
              className="email-subject"
              style={errors.email_subject && { border: "3px solid #F75D59" }}
              {...register("email_subject")}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="9"
            style={errors.message && { border: "3px solid #F75D59" }}
            {...register("message")}
          />
          <input type="submit" value="Send Message" className="contact-btn" />
        </form>
      </div>
      <footer>
        <p>Copyright &#169; 2023 by Romarico | All Rights Reserved </p>
      </footer>
    </m.section>
  );
};
