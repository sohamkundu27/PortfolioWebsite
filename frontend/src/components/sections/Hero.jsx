import React from "react";
import { Button } from "../ui/button";
import { Github, FileText, Linkedin, Briefcase, Mail } from "lucide-react";
import bgImage from "../assets/bgproper-DkkcksB5-DkkcksB5.png";
import sohamHeadshot from "../assets/sohamheadshot.jpg";
import sokuLogo from "../assets/sokulogo.png";
import { usePostHogTracking } from "../../hooks/usePostHog";

const Hero = ({ scrollToSection }) => {
  const { trackResumeDownload } = usePostHogTracking();
  
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/sohamkundu27" },
    { icon: FileText, label: "Resume", href: "/SohamKunduResume.pdf", onClick: trackResumeDownload },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sohamkundu27/" },
    { icon: Briefcase, label: "Portfolio", onClick: () => scrollToSection("portfolio") },
    { icon: Mail, label: "Contact", onClick: () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }) },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
            <img 
              src={sohamHeadshot} 
              alt="Soham Kundu" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Tagline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Soham Kundu
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto">
          Computer Engineering + Computer Science @ UW-Madison
          <br />
          <span className="text-lg text-gray-300">
            Pursuing a career in Software Engineering & AI/ML.
          </span>
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {socialLinks.map(({ icon: Icon, label, href, onClick }) => (
          href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              onClick={onClick}
            >
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Icon size={20} className="mr-2" />
                {label}
              </Button>
            </a>
          ) : (
            <Button
              key={label}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              onClick={onClick}
            >
              <Icon size={20} className="mr-2" />
              {label}
            </Button>
          )
        ))}
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="text-white border-2 border-blue-500 hover:bg-blue-500 transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: "#1261A0" }}
          onClick={() => scrollToSection("about")}
        >
          Learn More About Me
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;