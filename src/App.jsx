import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutSection from "./Components/AboutSection";
import WhatWeDo from "./Components/WhatWedo";
import HeroBanner from "./Components/HeroBanner";
import PortfolioSection from "./Components/PortfolioSection";

// Import Portfolio Page
import Portfolio from "./Pages/Portfolio";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhatWeDo />
      <HeroBanner />
      <PortfolioSection />
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
    </BrowserRouter>
  );
}

export default App;
