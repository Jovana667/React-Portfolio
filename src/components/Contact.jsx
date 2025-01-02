import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: false, message: "" });

    try {
      const result = await emailjs.sendForm(
        "service_i063mzb",
        "template_vj0woe1",
        form.current,
        {
          publicKey: "YS3Z5UkUJM_ZitL7dy",
        }
      );

      console.log("SUCCESS!", result.text);
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: "Message sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Thanks for stopping by!</h1>
        <p className="contact-subtitle">
          I'd love to chat with you about how I can help. Get in touch!
        </p>

        {status.message && (
          <div
            className={`notification ${status.error ? "error" : "success"}`}
            style={{
              backgroundColor: status.error ? "#ffeded" : "#edffed",
              color: status.error ? "#c53030" : "#2f855a",
              padding: "1rem",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            {status.message}
          </div>
        )}

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name" // Matches template variable {{user_name}}
              className="form-input"
              disabled={status.submitting}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email" // Matches template variable {{user_email}}
              className="form-input"
              disabled={status.submitting}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message" // Matches template variable {{message}}
              className="form-textarea"
              disabled={status.submitting}
              required
              rows="6"
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
