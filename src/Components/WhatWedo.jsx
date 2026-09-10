import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <section className="wwd-section" id="what-we-do">
      <div className="wwd-container">
        <div className="wwd-images">
          <img
            className="wwd-image wwd-image-back"
            src="/Whatwedoi1mg.jpg"
            alt="Wood-paneled hallway with warm lighting"
          />
          <img
            className="wwd-image wwd-image-front"
            src="/Whatwedoi2mg.jpg"
            alt="Custom glass and wood shower enclosure"
          />
        </div>

        <div className="wwd-content">
          <h2 className="wwd-heading">What We Do</h2>

          <p className="wwd-text">
            With over 34 years of hands-on experience, Gulzar &amp; Son's works
            with quality hardwoods, plywood and veneers to bring superior
            craftsmanship and a lasting finish to every home and shop we work
            on. Our team is capable of matching any existing finish or creating
            exactly what our clients envision.
          </p>

          <ul className="wwd-list">
            <li>Modular Kitchens</li>
            <li>Wardrobes</li>
            <li>Wall Paneling</li>
            <li>False Ceiling</li>
            <li>Flooring</li>
            <li>Doors &amp; Windows</li>
            <li>Custom Furniture</li>
            <li>Shop Design &amp; Fit-outs</li>
          </ul>

          <a href="#services" className="wwd-cta">
            Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
