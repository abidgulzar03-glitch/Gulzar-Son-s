import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import WhatWeDo from "./Components/WhatWedo";
import HeroBanner from "./Components/HeroBanner";
import PortfolioSection from "./Components/PortfolioSection";
import InstagramFeed from "./Components/InstagramFeed";
import ContactSection from "./Components/ContactSection";
import BottomHeader from "./Components/BottomHeader";
import Footer from "./Components/Footer";
import Portfolio from "./Pages/Portfolio";

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
      <AboutSection />
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
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <BottomHeader monogram="GS" />
      <Footer monogram="GS" brandName="Gulzar & Son's" />
    </BrowserRouter>
  );
}

export default App;
