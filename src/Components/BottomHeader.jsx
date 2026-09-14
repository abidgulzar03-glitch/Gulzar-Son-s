import "./BottomHeader.css";

/**
 * BottomHeader
 * Full-width white bar with a left-aligned category nav, contact
 * text, and a bordered monogram mark, placed below the contact section.
 *
 * Usage:
 * <BottomHeader
 *   monogram="GS"
 *   phone="+91 6005119121"
 *   location="Ganderbal J&K, India"
 *   categories={["Modular Kitchens", "Wardrobes", "Wall Paneling", "False Ceiling", "Flooring", "Doors & Windows"]}
 * />
 */
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
          <nav className="bottom-header__nav" aria-label="Service categories">
            {categories.map((category, i) => (
              <span className="bottom-header__nav-item" key={category}>
                {category}
                {i < categories.length - 1 && (
                  <span className="bottom-header__divider" aria-hidden="true">
                    |
                  </span>
                )}
              </span>
            ))}
          </nav>

          <p className="bottom-header__text">
            {phone} <span className="bottom-header__divider">|</span> {location}
          </p>
        </div>

        <div className="bottom-header__mark" aria-hidden="true">
          <span className="bottom-header__mark-text">{monogram}</span>
        </div>
      </div>
    </footer>
  );
}
