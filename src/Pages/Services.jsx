import "./Services.css";

const services = [
  {
    title: "Custom Kitchens",
    text: "Cabinetry designed and built around how you actually cook — from layout to the last drawer pull.",
    image: "/herokitchen2.jpg",
  },
  {
    title: "Fitted Wardrobes",
    text: "Storage that fits the room exactly, floor to ceiling, with no wasted corners.",
    image: "/Fitted Wardrobes.jpg",
  },
  {
    title: "Bespoke Furniture",
    text: "Tables, shelving, and one-off pieces built to a size, wood, and finish you choose.",
    image: "/Bespoke Furniture img.webp",
  },
  {
    title: "Restoration",
    text: "Bringing older pieces and fittings back to life, matched to their original joinery and finish.",
    image: "/Restoration.jpg",
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    text: "We visit your space, talk through what you need, and take measurements.",
  },
  {
    step: "02",
    title: "Design",
    text: "You get a layout and material plan before anything is cut.",
  },
  {
    step: "03",
    title: "Build",
    text: "Made by hand in our workshop, checked at every stage.",
  },
  {
    step: "04",
    title: "Fit",
    text: "Installed and finished in your home, ready to use.",
  },
];

function Services() {
  return (
    <main className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-inner" data-aos="fade-up">
          <p className="services-eyebrow">What we do</p>

          <h1>
            Woodwork, <span>made to fit.</span>
          </h1>

          <p className="services-lead">
            From a single custom piece to a full kitchen, every job starts with
            your space and ends with something built to last in it.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-list">
        <div className="services-list-inner">
          {services.map((s, index) => (
            <div
              className="service-card"
              key={s.title}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <div className="service-image">
                <img src={s.image} alt={s.title} />
              </div>

              <div className="service-text">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-process-inner">
          <h2 data-aos="fade-up">How a project runs</h2>

          <div className="process-grid">
            {process.map((p, index) => (
              <div
                className="process-step"
                key={p.step}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <span className="step-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-inner" data-aos="fade-up">
          <h2>Ready to start?</h2>

          <p>Tell us what you need built, and we'll take it from there.</p>

          <a href="/contact" className="services-cta-button">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}

export default Services;
