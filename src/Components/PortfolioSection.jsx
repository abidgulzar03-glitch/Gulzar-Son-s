import { Link } from "react-router-dom";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="portfolio-commercial3.jpg" alt="Luxury Residence" />
            <h3>LUXURY RESIDENCES</h3>
          </div>

          <div className="portfolio-card">
            <img src="/portfolio-commercial.jpg" alt="Commercial" />
            <h3>COMMERCIAL</h3>
          </div>

          <div className="portfolio-card">
            <img src="portfolio-commercial2.jpg" alt="Hospitality" />
            <h3>HOSPITALITY</h3>
          </div>
        </div>

        <div className="portfolio-line"></div>

        <div className="portfolio-btn-wrap">
          <Link to="/portfolio" className="portfolio-btn">
            SEE PORTFOLIO
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
