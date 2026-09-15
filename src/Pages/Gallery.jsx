import { useState, useEffect, useCallback, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";

const categories = ["All", "Kitchens", "Wardrobes", "Furniture", "Restoration"];

const galleryItems = [
  { src: "/herokitchen1.jpg", category: "Kitchens" },
  { src: "/herokitchen2.jpg", category: "Kitchens" },
  { src: "/herokitchen4.jpg", category: "Kitchens" },
  { src: "/Portfolio/3.jpg", category: "Kitchens" },
  { src: "/Portfolio/4.jpg", category: "Kitchens" },
  { src: "/Portfolio/5.jpg", category: "Kitchens" },
  { src: "/Portfolio/17.jpg", category: "Kitchens" },
  { src: "/Portfolio/19.jpg", category: "Kitchens" },
  { src: "/Portfolio/18.jpg", category: "Kitchens" },
  { src: "/Portfolio/20.jpg", category: "Kitchens" },
  { src: "/Portfolio/21.jpg", category: "Kitchens" },
  { src: "/Portfolio/66.jpg", category: "Kitchens" },
  { src: "/Portfolio/67.jpg", category: "Kitchens" },
  { src: "/Portfolio/68.jpg", category: "Kitchens" },
  { src: "/Portfolio/69.jpg", category: "Kitchens" },
  { src: "/Portfolio/70.jpg", category: "Kitchens" },

  { src: "/Fitted Wardrobes.jpg", category: "Wardrobes" },
  { src: "/Portfolio/2.jpg", category: "Wardrobes" },
  { src: "/Portfolio/50.jpg", category: "Wardrobes" },
  { src: "/Portfolio/42.jpg", category: "Wardrobes" },
  { src: "/Portfolio/51.jpg", category: "Wardrobes" },
  { src: "/Portfolio/52.jpg", category: "Wardrobes" },
  { src: "/Portfolio/53.jpg", category: "Wardrobes" },
  { src: "/Portfolio/54.jpg", category: "Wardrobes" },
  { src: "/Portfolio/55.jpg", category: "Wardrobes" },
  { src: "/Portfolio/56.jpg", category: "Wardrobes" },
  { src: "/Portfolio/57.jpg", category: "Wardrobes" },
  { src: "/Portfolio/58.jpg", category: "Wardrobes" },
  { src: "/Portfolio/59.jpg", category: "Wardrobes" },
  { src: "/Portfolio/60.jpg", category: "Wardrobes" },
  { src: "/Portfolio/61.jpg", category: "Wardrobes" },
  { src: "/Portfolio/62.jpg", category: "Wardrobes" },
  { src: "/Portfolio/63.jpg", category: "Wardrobes" },
  { src: "/Portfolio/64.jpg", category: "Wardrobes" },
  { src: "/Portfolio/65.jpg", category: "Wardrobes" },

  { src: "/Portfolio/71.jpg", category: "Furniture" },
  { src: "/Portfolio/72.jpg", category: "Furniture" },
  { src: "/Portfolio/73.jpg", category: "Furniture" },
  { src: "/Portfolio/74.jpg", category: "Furniture" },
  { src: "/Portfolio/75.jpg", category: "Furniture" },
  { src: "/Portfolio/76.jpg", category: "Furniture" },
  { src: "/Portfolio/77.jpg", category: "Furniture" },
  { src: "/Portfolio/78.jpg", category: "Furniture" },
  { src: "/Portfolio/79.jpg", category: "Furniture" },
  { src: "/Portfolio/81.jpg", category: "Furniture" },
  { src: "/Portfolio/82.jpg", category: "Furniture" },
  { src: "/Portfolio/83.jpg", category: "Furniture" },
  { src: "/Portfolio/84.jpg", category: "Furniture" },
  { src: "/Portfolio/85.jpg", category: "Furniture" },
  { src: "/Portfolio/86.jpg", category: "Furniture" },
  { src: "/Bespoke Furniture img.webp", category: "Furniture" },

  { src: "/Restoration.jpg", category: "Restoration" },
  { src: "/Portfolio/87.jpg", category: "Restoration" },
  { src: "/Portfolio/88.jpg", category: "Restoration" },
  { src: "/Portfolio/89.jpg", category: "Restoration" },
  { src: "/Portfolio/90.jpg", category: "Restoration" },
  { src: "/Portfolio/91.jpg", category: "Restoration" },
  { src: "/Portfolio/92.jpg", category: "Restoration" },
  { src: "/Portfolio/93.jpg", category: "Restoration" },
  { src: "/Portfolio/94.jpg", category: "Restoration" },
  { src: "/Portfolio/95.jpg", category: "Restoration" },
  { src: "/Portfolio/96.jpg", category: "Restoration" },
  { src: "/Portfolio/97.jpg", category: "Restoration" },
  { src: "/Portfolio/98.jpg", category: "Restoration" },
  { src: "/Portfolio/99.jpg", category: "Restoration" },
  { src: "/Portfolio/100.jpg", category: "Restoration" },
  { src: "/Portfolio/101.jpg", category: "Restoration" },
  { src: "/Portfolio/102.jpg", category: "Restoration" },
  { src: "/Portfolio/103.jpg", category: "Restoration" },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

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
        <div className="gallery-hero-inner" data-aos="fade-up">
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
          <div className="gallery-filters" data-aos="fade-up">
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
                data-aos="fade-up"
                data-aos-delay={(index % 8) * 60}
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
