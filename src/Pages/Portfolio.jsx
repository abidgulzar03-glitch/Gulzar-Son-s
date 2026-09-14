import { useState, useEffect, useMemo, useCallback } from "react";
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

const IMAGES = Array.from({ length: 50 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    src: `/Portfolio/${num}.jpg`,
    alt: `${SERVICES[i % SERVICES.length]} project ${num}`,
    category: SERVICES[i % SERVICES.length],
  };
});

const ALL_FILTER = "All Work";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === ALL_FILTER) return IMAGES;
    return IMAGES.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + filteredImages.length) % filteredImages.length,
    );
  }, [filteredImages.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length,
    );
  }, [filteredImages.length]);

  // Reset the open image if the filter changes while the lightbox is open
  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, [activeFilter]);

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

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <section className="portfolio-gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Portfolio</h1>
        <p className="gallery-subtitle">
          Browse our completed carpentry &amp; interior fit-out projects
        </p>

        <div className="gallery-services">
          <button
            className={`service-badge filter-badge ${
              activeFilter === ALL_FILTER ? "active" : ""
            }`}
            onClick={() => setActiveFilter(ALL_FILTER)}
          >
            {ALL_FILTER}
          </button>
          {SERVICES.map((service) => (
            <button
              key={service}
              className={`service-badge filter-badge ${
                activeFilter === service ? "active" : ""
              }`}
              onClick={() => setActiveFilter(service)}
            >
              {service}
            </button>
          ))}
        </div>

        <p className="gallery-count">
          {filteredImages.length} project
          {filteredImages.length !== 1 ? "s" : ""}
        </p>

        {filteredImages.length === 0 ? (
          <p className="gallery-empty">No projects in this category yet.</p>
        ) : (
          <div className="gallery-grid">
            {filteredImages.map((img, index) => (
              <div
                className="gallery-card"
                key={img.id}
                onClick={() => openLightbox(index)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <span className="gallery-card-tag">{img.category}</span>
              </div>
            ))}
          </div>
        )}
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
            {selectedImage.category} · {selectedIndex + 1} /{" "}
            {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
