import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online marketplace with user authentication, payment processing, and admin dashboard. Built with modern technologies for scalability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "fullstack",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      category: "frontend",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "Interactive data visualization dashboard displaying weather patterns and forecasts with responsive charts and real-time data updates.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "frontend",
      demoLink: "#",
      githubLink: "#",
      featured: true
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "Microservices architecture with API gateway, authentication, rate limiting, and service discovery. Handles 1000+ requests per second.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Docker", "Redis", "AWS"],
      category: "backend",
      demoLink: "#",
      githubLink: "#",
      featured: false
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and money transfer capabilities.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      category: "mobile",
      demoLink: "#",
      githubLink: "#",
      featured: true
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent projects and technical accomplishments
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-300 ${
                activeFilter === category.id
                  ? "text-white"
                  : "text-gray-700 hover:text-white"
              }`}
              style={{
                backgroundColor: activeFilter === category.id ? "#1261A0" : "transparent",
                borderColor: "#1261A0"
              }}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className={`group shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-100' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <Badge 
                    className="absolute top-4 right-4 text-white"
                    style={{ backgroundColor: "#1261A0" }}
                  >
                    Featured
                  </Badge>
                )}

                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <Eye size={16} className="mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <ExternalLink size={14} className="mr-2" />
                    View Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
            onClick={() => window.open("#", "_blank")}
          >
            View All Projects on GitHub
            <ExternalLink size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;