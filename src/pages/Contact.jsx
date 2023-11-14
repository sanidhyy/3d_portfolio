import { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet";

import { Loader, Alert } from "../components";

import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("walk");

  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

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
      .then(() => {
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
      })
      .catch((error) => {
        console.log("Contact_email: ", error);
        showAlert({
          show: true,
          text: "I didn't receive your message",
          type: "danger",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setCurrentAnimation("idle");
          setForm({ name: "", email: "", message: "" });
          hideAlert();
        }, 3000);

        setIsLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>Sanidhya Verma | Contact Me</title>
      </Helmet>
      <section className="relative flex lg:flex-row flex-col max-container lg:h-screen">
        {alert.show && <Alert {...alert} />}
        <div className="flex-1 min-w-[50%] flex flex-col">
          <h1 className="head-text">Get in Touch</h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-14"
          >
            <label className="text-black-500 font-semibold" htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className="input disabled:cursor-not-allowed"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>
            <label className="text-black-500 font-semibold" htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                className="input disabled:cursor-not-allowed"
                placeholder="johndoe@email.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>
            <label className="text-black-500 font-semibold" htmlFor="message">
              Your Message
              <textarea
                id="message"
                name="message"
                className="textarea disabled:cursor-not-allowed"
                rows={4}
                placeholder="Let me know how I can help you!"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={isLoading}
                required
              />
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-p[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Contact;
