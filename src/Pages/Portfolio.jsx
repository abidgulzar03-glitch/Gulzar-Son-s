import "./Portfolio.css";

function Portfolio() {
  const images = Array.from(
    { length: 100 },
    (_, i) => `/Portfolio/${i + 1}.jpg`,
  );

  return (
    <section className="portfolio-gallery-page">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Portfolio</h1>

        <p className="gallery-subtitle">
          Luxury Residences • Commercial • Hospitality
        </p>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
