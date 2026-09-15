import { useState, useEffect, useCallback } from "react";
import "./Portfolio.css";

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

const IMAGES = Array.from({ length: 103 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    src: `/Portfolio/${num}.jpg`,
    alt: `${SERVICES[i % SERVICES.length]} project ${num}`,
  };
});

function Portfolio() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + IMAGES.length) % IMAGES.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % IMAGES.length,
    );
  }, []);

  // Keyboard navigation: Escape to close, arrows to move between images
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  const selectedImage = selectedIndex !== null ? IMAGES[selectedIndex] : null;

  return (
    <section className="portfolio-gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Portfolio</h1>
        <p className="gallery-subtitle">
          Browse our completed carpentry &amp; interior fit-out projects
        </p>

        <div className="gallery-grid">
          {IMAGES.map((img, index) => (
            <div
              className="gallery-card"
              key={img.id}
              onClick={() => openLightbox(index)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="lightbox-caption">
            {selectedIndex + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
