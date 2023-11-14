import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet";

// components
import { Loader, Alert } from "../components";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { SITE_NAME } from "../constants";

// contact
const Contact = () => {
  // refs
  const formRef = useRef(null);

  // states
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  // hooks
  const { alert, showAlert, hideAlert } = useAlert();

  // handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle form input focus
  const handleFocus = () => setCurrentAnimation("walk");

  // handle form input blur (when user enters out of form)
  const handleBlur = () => setCurrentAnimation("idle");

  // handle form submit
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();

    // show loader
    setIsLoading(true);

    // show fox walk animation
    setCurrentAnimation("hit");

    // send email
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sanidhya Verma",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )

      // show success message
      .then(() => {
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
      })

      // show error message
      .catch((error) => {
        console.log("Contact_email: ", error);
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      })

      // when event is done
      .finally(() => {
        // hide fox walk animation
        setTimeout(() => {
          setCurrentAnimation("idle");
          // empty form
          setForm({ name: "", email: "", message: "" });

          // hide alert
          hideAlert();
        }, 3000);

        // hide loader
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Contact Me</title>
      </Helmet>

      {/* contact section */}
      <section className="relative flex lg:flex-row flex-col max-container lg:h-screen">
        {/* show alert on form submit */}
        {alert.show && <Alert {...alert} />}

        {/* get in touch */}
        <div className="flex-1 min-w-[50%] flex flex-col">
          {/* head text */}
          <h1 className="head-text">Get in Touch</h1>

          {/* contact form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            {/* name */}
            <label className="text-black-500 font-semibold" htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className="input disabled:cursor-not-allowed"
                placeholder="John Doe"
                title="Name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* email */}
            <label className="text-black-500 font-semibold" htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                className="input disabled:cursor-not-allowed"
                placeholder="johndoe@email.com"
                value={form.email}
                title="Email"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* message */}
            <label className="text-black-500 font-semibold" htmlFor="message">
              Your Message
              <textarea
                id="message"
                name="message"
                className="textarea disabled:cursor-not-allowed"
                rows={4}
                placeholder="Let me know how I can help you!"
                value={form.message}
                title="Message"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            {/* form submit btn */}
            <button
              type="submit"
              disabled={isLoading}
              title={isLoading ? "Sending..." : "Send Message"}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-p[550px] h-[350px]">
          {/* Three.js Canvas Component */}
          <Canvas
            camera={{
              position: [0, 0, 5], // Camera position in 3D space
              fov: 75, // Field of view
              near: 0.1, // Near clipping plane
              far: 1000, // Far clipping plane
            }}
          >
            {/* Directional Light for realistic lighting */}
            <directionalLight intensity={2.5} position={[0, 0, 1]} />

            {/* Ambient Light for overall scene illumination */}
            <ambientLight intensity={0.5} />

            {/* Suspense for handling loading state */}
            <Suspense fallback={<Loader />}>
              {/* Fox Model */}
              <Fox
                currentAnimation={currentAnimation} // Current animation state
                position={[0.5, 0.35, 0]} // Initial position in 3D space
                rotation={[12.6, -0.6, 0]} // Initial rotation
                scale={[0.5, 0.5, 0.5]} // Initial scale
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
