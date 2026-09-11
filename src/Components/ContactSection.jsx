import { useState } from "react";
import "./ContactSection.css";

/**
 * ContactSection ("Work With Us")
 * Full-bleed background image, heading, subcopy with a mailto link,
 * and a contact form (first/last name, email, subject, message).
 *
 * Usage:
 * <ContactSection
 *   name="Gulzar&Son's"
 *   email="abidgulzar03@gmail.com"
 *   backgroundImage="/images/contact-bg.jpg"
 * />
 */
export default function ContactSection({
  email = "abidgulzar03@gmail.com",
  backgroundImage = "/images/contact-bg.jpg",
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.subject ||
      !form.message
    ) {
      setStatus("error");
      return;
    }

    // No backend wired up yet — this just opens the user's email client
    // pre-filled with the form content. Swap this out for a real API
    // call (EmailJS, Formspree, your own backend, etc.) when ready.
    const mailBody = `From: ${form.firstName} ${form.lastName} (${form.email})%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${mailBody}`;

    setStatus("success");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-section__overlay">
        <div className="contact-section__inner">
          <h1 className="contact-section__title">Work With Us</h1>
          <p className="contact-section__subtitle">
            Fill the form or send us an email to{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group-label">Name</div>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="firstName">
                  First Name <span>(required)</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="lastName">
                  Last Name <span>(required)</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">
                Email Address <span>(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="subject">
                Subject <span>(required)</span>
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">
                Message <span>(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-form__submit">
              Submit
            </button>

            {status === "error" && (
              <p className="contact-form__status contact-form__status--error">
                Please fill in all required fields.
              </p>
            )}
            {status === "success" && (
              <p className="contact-form__status contact-form__status--success">
                Thanks! Your email client should have opened with your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
