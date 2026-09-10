import "./AboutSection.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-top-strip" />

      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title">Gulzar &amp; Son's</h1>

          <h2 className="about-subtitle">
            Custom Woodwork &amp; Home Carpentry
          </h2>

          <p className="about-text">
            Is a family owned and operated custom-woodwork business rooted in
            Ganderbal, Jammu &amp; Kashmir. With over{" "}
            <em>34 years of hands-on experience</em>, superior craftsmanship has
            been a tradition in our family. Today, the 3rd and 4th generation
            carpenters proudly carry that legacy forward, offering complete home
            and shop woodwork solutions — modular kitchens, wardrobes, wall
            paneling, false ceiling, flooring, doors and windows, along with
            custom shop design and fit-outs. From a single repair to a full home
            or shop makeover, Gulzar &amp; Son's has provided its services to a
            wide variety of homes, shops and local businesses throughout the
            region.
          </p>
        </div>

        <div className="about-right">
          <div className="about-info-block">
            <h3 className="about-info-label">Phone</h3>
            <p className="about-info-value">+91 6005119121</p>
          </div>

          <div className="about-info-block">
            <h3 className="about-info-label">Location</h3>
            <p className="about-info-value">Ganderbal J&amp;K, India</p>
          </div>

          <a href="#contact" className="about-cta">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
