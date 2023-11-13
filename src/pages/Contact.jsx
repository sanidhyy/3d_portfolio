import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = () => {};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
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
    </section>
  );
};

export default Contact;
