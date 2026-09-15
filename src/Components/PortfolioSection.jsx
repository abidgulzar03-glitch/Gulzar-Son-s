import { Link } from "react-router-dom";
import "./PortfolioSection.css";

function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-grid">
          <div className="portfolio-card">
            <img src="/Portfolio/1.jpg" alt="Portfolio project" />
          </div>

          <div className="portfolio-card">
            <img src="/Portfolio/2.jpg" alt="Portfolio project" />
          </div>

          <div className="portfolio-card">
            <img src="/Portfolio/14.jpg" alt="Portfolio project" />
          </div>
        </div>

        <div className="portfolio-line"></div>

        <div className="portfolio-btn-wrap">
          <Link to="/gallery" className="portfolio-btn">
            VIEW MORE <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
