import { useState } from "react";
import "./ContactSection.css";

const MESSAGE_MAX_LENGTH = 600;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  switch (name) {
    case "firstName":
    case "lastName":
      return value.trim() ? "" : "This field is required.";

    case "email":
      if (!value.trim()) return "This field is required.";
      return EMAIL_PATTERN.test(value.trim())
        ? ""
        : "Enter a valid email address.";

    case "subject":
      return value.trim() ? "" : "This field is required.";

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
    company: "",
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
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
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

    return Object.values(nextErrors).every((msg) => !msg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.company) {
      setStatus("success");
      return;
    }

    if (!runFullValidation()) {
      setStatus("error");
      return;
    }

    setSubmitting(true);

    const mailBody = `From: ${form.firstName} ${form.lastName} (${form.email})

${form.message}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(mailBody)}`;

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
            Fill out the form or email us at{" "}
            <a href="mailto:gulzarzahid28@gmail.com">gulzarzahid28@gmail.com</a>
          </p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__honeypot" aria-hidden="true">
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="contact-form__group-label">Name</div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label>First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.firstName ? "has-error" : ""}
                />
                {errors.firstName && (
                  <p className="contact-form__field-error">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="contact-form__field">
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName ? "has-error" : ""}
                />
                {errors.lastName && (
                  <p className="contact-form__field-error">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="contact-form__field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "has-error" : ""}
              />
              {errors.email && (
                <p className="contact-form__field-error">{errors.email}</p>
              )}
            </div>

            <div className="contact-form__field">
              <label>Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.subject ? "has-error" : ""}
              />
              {errors.subject && (
                <p className="contact-form__field-error">{errors.subject}</p>
              )}
            </div>

            <div className="contact-form__field">
              <div className="contact-form__field-header">
                <label>Message</label>
                <span className="contact-form__counter">
                  {messageCount}/{MESSAGE_MAX_LENGTH}
                </span>
              </div>

              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.message ? "has-error" : ""}
              />

              {errors.message && (
                <p className="contact-form__field-error">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="contact-form__submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Submit"}
            </button>

            {status === "error" && (
              <p className="contact-form__status contact-form__status--error">
                Please fix the highlighted fields above.
              </p>
            )}

            {status === "success" && (
              <p className="contact-form__status contact-form__status--success">
                Thanks! Your email client will open with your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
