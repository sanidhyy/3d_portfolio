import { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

// components
import { Loader, Alert } from "../components";

import { Fox } from "../models";
import type { FoxAnimation } from "../models";
import useAlert from "../hooks/useAlert";
import { SITE_NAME } from "../constants";
import {
  CONTACT_RECAPTCHA_ACTION,
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  type ContactFormFields,
} from "../lib/contact";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  message: isValidContactMessage,
};

type FoxCanvasProps = {
  currentAnimation: FoxAnimation;
};

const FoxCanvas = ({ currentAnimation }: FoxCanvasProps) => (
  <div className="lg:w-1/2 w-full lg:h-auto md:h-p[550px] h-87.5">
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
);

// contact form
const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // refs
  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  // states
  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] =
    useState<FoxAnimation>("idle");

  // hooks
  const { alert, showAlert, hideAlert } = useAlert();

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  // handle form change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid },
    );
  };

  // handle form input focus
  const handleFocus = () => setCurrentAnimation("walk");

  // handle form input blur (when user enters out of form)
  const handleBlur = () => {
    if (!isLoading) {
      setCurrentAnimation("idle");
    }
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const resetIdleAfterDelay = () => {
    setTimeout(() => {
      setCurrentAnimation("idle");
      hideAlert();
    }, 3000);
  };

  // handle form submit
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    // prevent page reload
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      showAlert({
        show: true,
        text: "reCAPTCHA is not ready. Please try again.",
        type: "danger",
      });
      return;
    }

    // show loader
    setIsLoading(true);

    // show fox hit animation
    setCurrentAnimation("hit");

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        showAlert({
          show: true,
          text: data?.error ?? "I didn't receive your message",
          type: "danger",
        });
        return;
      }

      // show success message
      showAlert({
        show: true,
        text: "Message sent successfully!",
        type: "success",
      });
      setForm({ name: "", email: "", message: "" });
      setFieldErrors({
        name: false,
        email: false,
        message: false,
      });
    } catch (error: unknown) {
      console.log("Contact_email: ", error);
      showAlert({
        show: true,
        text: "I didn't receive your message",
        type: "danger",
      });
    } finally {
      resetIdleAfterDelay();
      setIsLoading(false);
    }
  };

  return (
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
              maxLength={200}
              disabled={isLoading}
              aria-invalid={fieldErrors.name}
              aria-describedby="name-error"
            />
            <span
              className={`text-red-500 text-sm font-normal mt-2 ${
                fieldErrors.name ? "block" : "hidden"
              }`}
              id="name-error"
            >
              Invalid Name
            </span>
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
              maxLength={100}
              disabled={isLoading}
              aria-invalid={fieldErrors.email}
              aria-describedby="email-error"
            />
            <span
              className={`text-red-500 text-sm font-normal mt-2 ${
                fieldErrors.email ? "block" : "hidden"
              }`}
              id="email-error"
            >
              Invalid E-mail
            </span>
          </label>

          {/* message */}
          <label className="text-black-500 font-semibold" htmlFor="message">
            Your Message
            <textarea
              ref={messageRef}
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
              maxLength={500}
              disabled={isLoading}
              aria-invalid={fieldErrors.message}
              aria-describedby="message-error"
            />
            <span
              className={`text-red-500 text-sm font-normal mt-2 ${
                fieldErrors.message ? "block" : "hidden"
              }`}
              id="message-error"
            >
              Invalid Message
            </span>
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

      <FoxCanvas currentAnimation={currentAnimation} />
    </section>
  );
};

// contact
const Contact = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Contact Me</title>
      </Helmet>

      {siteKey ? (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
          <ContactForm />
        </GoogleReCaptchaProvider>
      ) : (
        <section className="relative flex lg:flex-row flex-col max-container lg:h-screen">
          <div className="flex-1 min-w-[50%] flex flex-col">
            <h1 className="head-text">Get in Touch</h1>
            <p className="mt-14 text-black-500">
              Contact form is currently unavailable.
            </p>
          </div>
          <FoxCanvas currentAnimation="idle" />
        </section>
      )}
    </>
  );
};

export default Contact;
