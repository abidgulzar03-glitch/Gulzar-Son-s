import { useState } from "react";
import "./ContactSection.css";

const MESSAGE_MAX_LENGTH = 600;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  switch (name) {
    case "firstName":
    case "lastName":
      return value.trim().length > 0 ? "" : "This field is required.";
    case "email":
      if (!value.trim()) return "This field is required.";
      return EMAIL_PATTERN.test(value.trim())
        ? ""
        : "Enter a valid email address.";
    case "subject":
      return value.trim().length > 0 ? "" : "This field is required.";
    case "message":
      if (!value.trim()) return "This field is required.";
      return value.length > MESSAGE_MAX_LENGTH
        ? `Message must be under ${MESSAGE_MAX_LENGTH} characters.`
        : "";
    default:
      return "";
  }
}

export default function ContactSection({
  email = "gulzarzahid28@gmail.com",
  backgroundImage = "/contactbg.jpg",
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot field, kept empty by real users, hidden from view
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const fieldNames = ["firstName", "lastName", "email", "subject", "message"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const runFullValidation = () => {
    const nextErrors = {};
    fieldNames.forEach((name) => {
      nextErrors[name] = validateField(name, form[name]);
    });
    setErrors(nextErrors);
    setTouched(
      fieldNames.reduce((acc, name) => ({ ...acc, [name]: true }), {}),
    );
    return Object.values(nextErrors).every((message) => !message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: if this hidden field has a value, silently treat as spam.
    if (form.company) {
      setStatus("success");
      return;
    }

    const isValid = runFullValidation();
    if (!isValid) {
      setStatus("error");
      return;
    }

    setSubmitting(true);

    const mailBody = `From: ${form.firstName} ${form.lastName} (${form.email})%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${mailBody}`;

    setStatus("success");
    setSubmitting(false);
    setErrors({});
    setTouched({});
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    });
  };

  const messageCount = form.message.length;

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

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field — hidden from sighted users and screen readers,
                but visible to most spam bots that auto-fill every field. */}
            <div className="contact-form__honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={handleChange}
              />
            </div>

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
                  autoComplete="given-name"
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={
                    errors.firstName ? "firstName-error" : undefined
                  }
                  className={errors.firstName ? "has-error" : ""}
                />
                {errors.firstName && (
                  <p className="contact-form__field-error" id="firstName-error">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="contact-form__field">
                <label htmlFor="lastName">
                  Last Name <span>(required)</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
                  className={errors.lastName ? "has-error" : ""}
                />
                {errors.lastName && (
                  <p className="contact-form__field-error" id="lastName-error">
                    {errors.lastName}
                  </p>
                )}
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
                inputMode="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && (
                <p className="contact-form__field-error" id="email-error">
                  {errors.email}
                </p>
              )}
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
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={errors.subject ? "has-error" : ""}
              />
              {errors.subject && (
                <p className="contact-form__field-error" id="subject-error">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="contact-form__field">
              <div className="contact-form__field-header">
                <label htmlFor="message">
                  Message <span>(required)</span>
                </label>
                <span
                  className={
                    messageCount > MESSAGE_MAX_LENGTH
                      ? "contact-form__counter contact-form__counter--over"
                      : "contact-form__counter"
                  }
                >
                  {messageCount}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={errors.message ? "has-error" : ""}
              />
              {errors.message && (
                <p className="contact-form__field-error" id="message-error">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            <div role="status" aria-live="polite">
              {status === "error" && (
                <p className="contact-form__status contact-form__status--error">
                  Please fix the highlighted fields above.
                </p>
              )}
              {status === "success" && (
                <p className="contact-form__status contact-form__status--success">
                  Thanks! Your email client should have opened with your
                  message.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
