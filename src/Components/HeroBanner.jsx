import { useEffect } from "react";
import AOS from "aos";
import "./HeroBanner.css";

function HeroBanner() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section className="hero-banner-section">
      <div className="hero-banner-overlay" />

      <div className="hero-banner-content">
        <div
          className="hero-banner-monogram-box"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <span className="hero-banner-monogram">GS</span>
        </div>

        <h1
          className="hero-banner-tagline"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Home Carpentry <span className="hero-banner-divider">|</span> Modular
          Kitchens <span className="hero-banner-divider">|</span> Custom
          Interiors
        </h1>

        <p
          className="hero-banner-locations"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
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
