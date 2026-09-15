import "./BottomHeader.css";

export default function BottomHeader({
  monogram = "GS",
  phone = "+91 6005119121",
  location = "Ganderbal J&K, India",
  categories = [
    "Modular Kitchens",
    "Wardrobes",
    "Wall Paneling",
    "False Ceiling",
    "Flooring",
    "Doors & Windows",
  ],
}) {
  return (
    <footer className="bottom-header">
      <div className="bottom-header__inner">
        <div className="bottom-header__content">
          {/* Categories */}
          <nav
            className="bottom-header__nav"
            aria-label="Service categories"
            data-aos="fade-up"
          >
            {categories.map((category, i) => (
              <span
                className="bottom-header__nav-item"
                key={category}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {category}

                {i < categories.length - 1 && (
                  <span className="bottom-header__divider" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </nav>

          {/* Contact */}
          <p
            className="bottom-header__text"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {phone}

            <span className="bottom-header__divider">|</span>

            {location}
          </p>
        </div>

        {/* Monogram */}
        <div
          className="bottom-header__mark"
          aria-hidden="true"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <span className="bottom-header__mark-text">{monogram}</span>
        </div>
      </div>
    </footer>
  );
}
