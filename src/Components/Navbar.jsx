import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const ticking = useRef(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    closeMenu();

    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function updateScrollState() {
      setScrolled(window.scrollY > 40);
      ticking.current = false;
    }

    function handleScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollState);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <nav className="nav-left desktop-nav">
          <Link to="/">Home</Link>
          <a href="#about" onClick={scrollToAbout}>
            About
          </a>
          <Link to="/services">Services</Link>
        </nav>

        <Link to="/" className="brand" onClick={closeMenu}>
          <div className="monogram">
            <span className="g">G</span>
            <span className="s">S</span>
          </div>

          <div className="brand-name">Gulzar &amp; Sons</div>
          <div className="brand-tagline">w o o d w o r k</div>
        </Link>

        <nav className="nav-right desktop-nav">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-nav ${isOpen ? "active" : ""}`}>
        <nav>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <a href="#about" onClick={scrollToAbout}>
            About
          </a>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <Link to="/gallery" onClick={closeMenu}>
            Gallery
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>

      <div
        className={`mobile-overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />
    </header>
  );
}

export default Navbar;
