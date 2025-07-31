'use client'

import { useEffect } from "react"
import PostHogProviderWrapper from "./PostHogProvider"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Awards from "./sections/Awards"
import Experience from "./sections/Experience"
import Skills from "./sections/Skills"
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
    const sections = ["home", "about", "awards", "experience", "skills", "portfolio", "contact"]
    
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
    <PostHogProviderWrapper>
      <div className="min-h-screen">
        <Header scrollToSection={scrollToSection} />
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Awards />
        <Experience />
        <Skills />
        <PortfolioSection />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </div>
    </PostHogProviderWrapper>
  )
}

export default Portfolio 