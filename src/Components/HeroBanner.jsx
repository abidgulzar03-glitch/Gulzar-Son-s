import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section className="hero-banner-section">
      <div className="hero-banner-overlay" />

      <div className="hero-banner-content">
        <div className="hero-banner-monogram-box">
          <span className="hero-banner-monogram">GS</span>
        </div>

        <h1 className="hero-banner-tagline">
          Home Carpentry <span className="hero-banner-divider">|</span> Modular
          Kitchens <span className="hero-banner-divider">|</span> Custom
          Interiors
        </h1>

        <p className="hero-banner-locations">
          Ganderbal <span className="hero-banner-divider">|</span> Srinagar{" "}
          <span className="hero-banner-divider">|</span> Baramulla{" "}
          <span className="hero-banner-divider">|</span> Budgam{" "}
          <span className="hero-banner-divider">|</span> Anantnag{" "}
          <span className="hero-banner-divider">|</span> Bandipora{" "}
          <span className="hero-banner-divider">|</span> Kupwara{" "}
          <span className="hero-banner-divider">|</span> Pulwama{" "}
          <span className="hero-banner-divider">|</span> Kulgam{" "}
          <span className="hero-banner-divider">|</span> Shopian
        </p>
      </div>
    </section>
  );
}

export default HeroBanner;
