import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Component import
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import AboutPage from "./components/About";
import Contactpage from "./components/Contact";
import ServicePage from "./components/Services";
import Home from "./home";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;

