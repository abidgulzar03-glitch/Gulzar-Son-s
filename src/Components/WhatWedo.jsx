import { Link } from "react-router-dom";
import "./WhatWedo.css";

function WhatWeDo() {
  return (
    <section className="wwd-section" id="what-we-do">
      <div className="wwd-container">
        <div className="wwd-images">
          <img
            className="wwd-image wwd-image-back"
            src="/Whatwedoimg.png"
            alt="Wood-paneled hallway with warm lighting"
          />
          <img
            className="wwd-image wwd-image-front"
            src="/Whatwedoi1mg.jpg"
            alt="Custom glass and wood shower enclosure"
          />
        </div>

        <div className="wwd-content">
          <h2 className="wwd-heading">What We Do</h2>

          <p className="wwd-text">
            With over 34 years of hands-on experience, Gulzar & Son's works with
            quality hardwoods, plywood and veneers to bring superior
            craftsmanship and a lasting finish to every home and shop we work
            on.
          </p>

          <ul className="wwd-list">
            <li>Modular Kitchens</li>
            <li>Wardrobes</li>
            <li>Wall Paneling</li>
            <li>False Ceiling</li>
            <li>Flooring</li>
            <li>Doors & Windows</li>
            <li>Custom Furniture</li>
            <li>Shop Design & Fit-outs</li>
          </ul>

          <Link to="/services" className="wwd-cta">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
