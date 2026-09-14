import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import Hero from "./Components/Hero";
import WhatWeDo from "./Components/WhatWedo";
import HeroBanner from "./Components/HeroBanner";
import PortfolioSection from "./Components/PortfolioSection";
import InstagramFeed from "./Components/InstagramFeed";
import ContactSection from "./Components/ContactSection";
import BottomHeader from "./Components/BottomHeader";
import Footer from "./Components/Footer";
import WhatsAppButton from "./Components/WhatsAppButton";

import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

const instagramPosts = [
  {
    image: "/images/insta1.jpg",
    url: "https://www.instagram.com/p/Db5HbEVJajo/?stkn=MzRlODBiNWFlZA==",
    username: "i_am_zahidgulzar",
  },
  {
    image: "/images/insta2.jpg",
    url: "https://www.instagram.com/i_am_zahidgulzar/",
  },
  {
    image: "/images/insta3.jpg",
    url: "https://www.instagram.com/i_am_zahidgulzar/",
  },
  {
    image: "/images/insta4.jpg",
    url: "https://www.instagram.com/i_am_zahidgulzar/",
  },
  {
    image: "/images/insta5.jpg",
    url: "https://www.instagram.com/i_am_zahidgulzar/",
  },
  {
    image: "/images/insta6.jpg",
    url: "https://www.instagram.com/i_am_zahidgulzar/",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <WhatWeDo />

      <HeroBanner />

      <PortfolioSection />

      <InstagramFeed
        name="Gulzar&Son's"
        instagramUrl="https://www.instagram.com/i_am_zahidgulzar/"
        posts={instagramPosts}
      />

      <ContactSection
        name="Gulzar&Son's"
        email="abidgulzar03@gmail.com"
        backgroundImage="/contactbg.jpg"
      />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });

    setTimeout(() => {
      AOS.refresh();
    }, 300);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <WhatsAppButton />

      <BottomHeader monogram="GS" />

      <Footer monogram="GS" brandName="Gulzar & Son's" />
    </BrowserRouter>
  );
}

export default App;
