import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/sohamkundu27" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sohamkundu27" },
    { icon: Mail, label: "Email", href: "mailto:skundu6@wisc.edu" }
  ];

  const quickLinks = [
    { label: "About", onClick: () => scrollToSection("about") },
    { label: "Experience", onClick: () => scrollToSection("experience") },
    { label: "Skills", onClick: () => scrollToSection("skills") },
    { label: "Portfolio", onClick: () => scrollToSection("portfolio") },
    { label: "Contact", onClick: () => scrollToSection("contact") }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Your Name</h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.onClick}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>📍 San Francisco, CA</p>
              <p>📧 your.email@example.com</p>
              <p>📱 +1 (555) 123-4567</p>
            </div>
            <div className="mt-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-4 py-2 border border-blue-600 rounded-lg text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <Mail size={16} className="mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;