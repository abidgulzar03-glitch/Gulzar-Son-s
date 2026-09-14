import ContactSection from "../Components/ContactSection";
import "./Contact.css";

// TODO: replace these placeholders with your real business details
const CONTACT_DETAILS = [
  {
    icon: "📞",
    label: "Call Us",
    value: "600511911",
    href: "tel:600511911",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "abidgulzar03@gmail.com",
    href: "mailto:abidgulzar03@gmail.com",
  },
  {
    icon: "📍",
    label: "Workshop",
    value: "Your workshop / showroom address",
    href: "https://maps.google.com",
  },
  {
    icon: "🕘",
    label: "Working Hours",
    value: "9:00 AM – 5:00 PM (Closed Fridays)",
  },
];

const SERVICES = [
  "Modular Kitchens",
  "Wardrobes",
  "Wall Paneling",
  "False Ceiling",
  "Flooring",
  "Doors & Windows",
  "Custom Furniture",
  "Shop Design & Fit-outs",
];

function Contact() {
  return (
    <>
      <section className="contact-info">
        <div className="contact-info__inner">
          <p className="contact-info__eyebrow">GET IN TOUCH</p>
          <h1>
            Let&apos;s Build Something <span>Beautiful In Wood.</span>
          </h1>
          <p className="contact-info__lead">
            From modular kitchens to bespoke furniture and full shop fit-outs,
            Gulzar &amp; Sons brings craftsmanship to every project. Reach out
            and let&apos;s talk about yours.
          </p>

          <div className="contact-info__grid">
            {CONTACT_DETAILS.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  className="contact-info__card"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div className="contact-info__card-icon">{item.icon}</div>
                  <div className="contact-info__card-label">{item.label}</div>
                  <div className="contact-info__card-value">{item.value}</div>
                </a>
              ) : (
                <div className="contact-info__card" key={item.label}>
                  <div className="contact-info__card-icon">{item.icon}</div>
                  <div className="contact-info__card-label">{item.label}</div>
                  <div className="contact-info__card-value">{item.value}</div>
                </div>
              ),
            )}
          </div>

          <div className="contact-info__services">
            <p className="contact-info__services-label">We Specialize In</p>
            <ul className="contact-info__services-list">
              {SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactSection
        name="Gulzar&Son's"
        email="gulzarzahid28@gmail.com"
        backgroundImage="/contactbg.jpg"
      />
    </>
  );
}

export default Contact;
