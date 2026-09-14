import { useState } from "react";
import "./Portfolio.css";

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Array.from(
    { length: 100 },
    (_, i) => `/Portfolio/${i + 1}.jpg`,
  );

  const services = [
    "Modular Kitchens",
    "Wardrobes",
    "Wall Paneling",
    "False Ceiling",
    "Flooring",
    "Doors & Windows",
    "Custom Furniture",
    "Shop Design & Fit-outs",
  ];

  return (
    <section className="portfolio-gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Portfolio</h1>

        <div className="gallery-services">
          {services.map((service, index) => (
            <span key={index} className="service-badge">
              {service}
            </span>
          ))}
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Full Project"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default Portfolio;
