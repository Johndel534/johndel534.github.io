import { useState } from "react";
import FormField from "./FormField";
import Button from "../ui/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: "", email: "", message: "" };

// Same rules and messages as the original script.js
function validate({ name, email, message }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!EMAIL_PATTERN.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Message should be at least 10 characters.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | { type: "success" | "error", text }

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ type: "error", text: "Please fix the errors above and try again." });
      return;
    }
    // No backend (same as the original site): confirm and reset.
    setStatus({ type: "success", text: "Message sent. Thanks for reaching out — I'll reply soon." });
    setValues(EMPTY);
  };

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} noValidate>
        <FormField id="name" label="Name" type="text" placeholder="Your full name"
          value={values.name} onChange={handleChange} error={errors.name} />
        <FormField id="email" label="Email" type="email" placeholder="you@example.com"
          value={values.email} onChange={handleChange} error={errors.email} />
        <FormField id="message" label="Message" multiline placeholder="What would you like to say?"
          value={values.message} onChange={handleChange} error={errors.message} />

        <Button type="submit">Send Message</Button>
        <div
          className={`form-status${status ? ` show ${status.type}` : ""}`}
          role="status"
          aria-live="polite"
        >
          {status?.text}
        </div>
      </form>
    </div>
  );
}
