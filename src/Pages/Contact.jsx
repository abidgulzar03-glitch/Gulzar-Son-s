import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    value: "gulzarzahid28@gmail.com",
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <section className="contact-info">
        <div className="contact-info__inner">
          {/* Hero */}
          <div data-aos="fade-up">
            <p className="contact-info__eyebrow">GET IN TOUCH</p>

            <h1>
              Let&apos;s Build Something <span>Beautiful In Wood.</span>
            </h1>

            <p className="contact-info__lead">
              From modular kitchens to bespoke furniture and full shop fit-outs,
              Gulzar &amp; Sons brings craftsmanship to every project. Reach out
              and let&apos;s talk about yours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="contact-info__grid">
            {CONTACT_DETAILS.map((item, index) => (
              <a
                key={item.label}
                className="contact-info__card"
                href={item.href}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                data-aos={
                  index === 0
                    ? "zoom-in"
                    : index === 1
                      ? "fade-right"
                      : index === 2
                        ? "fade-left"
                        : "zoom-in"
                }
                data-aos-delay={index * 120}
              >
                <div className="contact-info__card-icon">{item.icon}</div>
                <div className="contact-info__card-label">{item.label}</div>
                <div className="contact-info__card-value">{item.value}</div>
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="contact-info__services">
            <p className="contact-info__services-label" data-aos="fade-right">
              We Specialize In
            </p>

            <ul className="contact-info__services-list">
              {SERVICES.map((service, index) => (
                <li
                  key={service}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 50}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div>
        <ContactSection
          name="Gulzar&Son's"
          email="gulzarzahid28@gmail.com"
          backgroundImage="/contactbg.jpg"
        />
      </div>
    </>
  );
}

export default Contact;
