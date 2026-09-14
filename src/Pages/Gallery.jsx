import { useState, useEffect, useCallback, useMemo } from "react";
import "./Gallery.css";

const categories = ["All", "Kitchens", "Wardrobes", "Furniture", "Restoration"];

const galleryItems = [
  { src: "/herokitchen1.jpg", category: "Kitchens" },
  { src: "/herokitchen2.jpg", category: "Kitchens" },
  { src: "/herokitchen3.jpg", category: "Kitchens" },
  { src: "/herokitchen4.jpg", category: "Kitchens" },
  { src: "/Fitted Wardrobes.jpg", category: "Wardrobes" },
  { src: "/Bespoke Furniture img.webp", category: "Furniture" },
  { src: "/Restoration.jpg", category: "Restoration" },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % filtered.length,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, showPrev, showNext]);

  return (
    <main className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-inner">
          <p className="gallery-eyebrow">A CLOSER LOOK</p>
          <h1>
            Finished Work, <span>In The Wood.</span>
          </h1>
          <p className="gallery-lead">
            Explore our completed kitchens, wardrobes, custom furniture and
            restoration projects.
          </p>
        </div>
      </section>

      <section className="gallery-body">
        <div className="gallery-body-inner">
          <div className="gallery-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${
                  activeCategory === cat ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-masonry">
            {filtered.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className="gallery-tile"
                onClick={() => openLightbox(index)}
              >
                <img src={item.src} alt={item.category} loading="lazy" />
                <span className="tile-label">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ×
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>

          <img
            className="lightbox-image"
            src={filtered[activeIndex].src}
            alt={filtered[activeIndex].category}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>

          <div className="lightbox-counter">
            {activeIndex + 1} / {filtered.length}
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
