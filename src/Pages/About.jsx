import "./About.css";

const stats = [
  { value: "30+", label: "Years of craftsmanship" },
  { value: "3", label: "Generations of carpenters" },
  { value: "500+", label: "Homes furnished" },
];

const values = [
  {
    title: "Handmade, every time",
    text: "No shortcuts, no mass production. Every joint is cut and fitted by hand, the way it's always been done in our workshop.",
  },
  {
    title: "Built for your home",
    text: "We start with your space and your habits, not a catalogue. Every piece is measured, designed, and finished to fit where it's going.",
  },
  {
    title: "Wood that lasts",
    text: "We choose timber for how it ages, not just how it looks on day one. What we build is meant to be handed down, not replaced.",
  },
];

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-inner">
          <p className="about-eyebrow">Our story</p>
          <h1>
            Three generations, <span>one workshop.</span>
          </h1>
          <p className="about-lead">
            Gulzar &amp; Sons started with a single carpenter's bench. Today
            it's still the same trade, the same attention to detail, passed
            down and sharpened with every piece we build.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-stats-inner">
          {stats.map((stat) => (
            <div className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-text">
            <h2>Where it began</h2>
            <p>
              Our founder learned the trade the old way — as an apprentice,
              sweeping sawdust before he was ever trusted with a chisel. What
              he built by hand, his sons carried forward, and what they
              built, we still build today: kitchens, cabinetry, and
              furniture made to fit the people who'll live with it.
            </p>
            <p>
              We're still a small workshop. That's on purpose. It means every
              project gets our full attention, from the first sketch to the
              final coat of finish.
            </p>
          </div>
          <div className="about-story-image">
            <img src="/herokitchen1.jpg" alt="Gulzar & Sons workshop" />
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <h2>What we build on</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Have something in mind?</h2>
          <p>Tell us about your space, and let's build something for it.</p>
          <a href="/contact" className="about-cta-button">
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;