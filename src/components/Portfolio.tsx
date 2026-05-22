'use client'

import { useEffect } from "react"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Awards from "./sections/Awards"
import PortfolioSection from "./sections/PortfolioSection"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const sections = ["home", "about", "experience", "portfolio", "awards", "contact"]
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          // Update active section in header if needed
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <PortfolioSection />
      <Awards />
      <Contact />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default Portfolio 