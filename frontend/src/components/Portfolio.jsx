import React, { useState, useEffect } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Awards from "./sections/Awards";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import PortfolioSection from "./sections/PortfolioSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Toaster } from "sonner";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "awards", "experience", "skills", "portfolio", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Awards />
        <Experience />
        <Skills />
        <PortfolioSection />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <Toaster position="top-right" richColors />
    </div>
  );
};

export default Portfolio;