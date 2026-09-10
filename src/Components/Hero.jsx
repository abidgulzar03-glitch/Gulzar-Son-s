import { useState, useEffect, useRef, useCallback } from "react";
import "./Hero.css";

const slides = [
  {
    image: "/herokitchen1.jpg",
    title: "Crafted Kitchens,",
    highlight: "Built to Last",
    subtitle: "Custom cabinetry and woodwork made for the way you live.",
  },
  {
    image: "/herokitchen2.jpg",
    title: "Timeless Design,",
    highlight: "Modern Craft",
    subtitle: "Where classic joinery meets contemporary style.",
  },
  {
    image: "/heroitchen3.jpg",
    title: "Every Detail,",
    highlight: "Handmade",
    subtitle: "From the first sketch to the final finish, all by hand.",
  },
  {
    image: "/herokitchen4.jpg",
    title: "Your Vision,",
    highlight: "Our Wood",
    subtitle: "Three generations of carpentry, tailored to your home.",
  },
];

const AUTOPLAY_INTERVAL = 2000;
const FLASH_DURATION = 250; // ms the white flash stays visible

function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFlashing, setIsFlashing] = useState(false);
  const timerRef = useRef(null);
  const flashTimeoutRef = useRef(null);

  const triggerFlash = () => {
    setIsFlashing(true);
    clearTimeout(flashTimeoutRef.current);
    flashTimeoutRef.current = setTimeout(() => {
      setIsFlashing(false);
    }, FLASH_DURATION);
  };

  const goTo = useCallback((index) => {
    triggerFlash();
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      triggerFlash();
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  useEffect(() => {
    return () => clearTimeout(flashTimeoutRef.current);
  }, []);

  // Pause on hover/touch, resume on leave
  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  // Basic swipe support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section
      className="hero"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={(e) => {
        pause();
        handleTouchStart(e);
      }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        handleTouchEnd();
        resume();
      }}
    >
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== current}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      {/* White flash overlay */}
      <div className={`hero-flash ${isFlashing ? "active" : ""}`}></div>

      <div className={`hero-content ${isFlashing ? "flashing" : ""}`}>
        <div className="hero-text-wrap">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-text ${index === current ? "active" : ""}`}
            >
              <h1>
                {slide.title} <span>{slide.highlight}</span>
              </h1>
              <p>{slide.subtitle}</p>
              <button className="hero-cta">Explore Our Work</button>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="hero-arrow hero-arrow-left"
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            d="M15 18l-6-6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className="hero-arrow hero-arrow-right"
        onClick={next}
        aria-label="Next slide"
      >
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path
            d="M9 18l6-6-6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
