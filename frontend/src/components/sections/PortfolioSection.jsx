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
      title: "ClaimReady",
      description: "Co-founded a 5x award-winning AI startup web app to cut insurance claim valuation time from 20+ hrs to minutes. Utilized YOLO11 for detection, Google Lens API for identification/pricing, and Supabase for auth; processed 1200+ images. Deployed via Docker on an AWS EC2 instance; scaled to support our 300+ users. Recognized as 'investor-ready' by judges; acknowledged by YC's Jared Friedman, Ankit Gupta, and UW-Madison CS Dept.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["YOLO11", "Google Lens API", "Supabase", "Docker", "AWS EC2"],
      category: "ai",
      demoLink: "https://claim-ready.vercel.app",
      githubLink: "#",
      deployed: true
    },
    {
      id: 2,
      title: "Hyperacing",
      description: "Built and scaled Go backend with REST APIs for a real-time F1 daily fantasy sports app with 200+ active users. Integrated Firebase Auth for secure user login and session management, and used F1 websockets for live race telemetry data. Engineered a Next.js frontend with dynamic dashboards for AI-powered predictions, betting trends, and expert insights.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Go", "Next.js", "Firebase Auth", "WebSockets", "REST APIs"],
      category: "fullstack",
      demoLink: "https://hyperacing.us",
      githubLink: "#",
      deployed: true
    },
    {
      id: 3,
      title: "Voice-Controlled MCP Robot Arm",
      description: "Built a full-stack voice interface to control a robot arm by transcribing real-time speech into structured robot commands. Engineered an LLM task planner to convert prompts like 'clear the table' into JSON robot actions executed via MCP. Validated the entire pipeline with async audio input and physics-based simulation, ensuring robust task completion.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["LLM", "Voice Recognition", "MCP", "Robot Control", "Python"],
      category: "ai",
      demoLink: "#",
      githubLink: "#",
      deployed: false
    },
    {
      id: 4,
      title: "Greenhouse IoT Monitoring System",
      description: "Built IoT greenhouse system tracking temp, humidity, and brightness on Raspberry Pi in Python, optimizing GPIO control. Configured Azure IoT Hub and REST APIs for real-time transmission of over 10K data points daily. Deployed a Dockerized Django-React app on Azure App Services, enabling remote monitoring by parents in India.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Raspberry Pi", "Python", "Azure IoT Hub", "Django", "React"],
      category: "iot",
      demoLink: "#",
      githubLink: "#",
      deployed: false
    },
    {
      id: 5,
      title: "Project 5",
      description: "Coming soon...",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      technologies: ["Coming Soon"],
      category: "fullstack",
      demoLink: "#",
      githubLink: "#",
      deployed: false
    },
    {
      id: 6,
      title: "Project 6",
      description: "Coming soon...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["Coming Soon"],
      category: "fullstack",
      demoLink: "#",
      githubLink: "#",
      deployed: false
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI/ML" },
    { id: "fullstack", label: "Full Stack" },
    { id: "iot", label: "IoT" }
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
                project.deployed ? 'ring-2 ring-blue-100' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Deployed Badge */}
                {project.deployed && (
                  <Badge 
                    className="absolute top-4 right-4 text-white"
                    style={{ backgroundColor: "#1261A0" }}
                  >
                    Deployed
                  </Badge>
                )}

                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  {(project.title === "ClaimReady" || project.title === "Hyperacing") ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Website
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <Eye size={16} className="mr-2" />
                      Demo
                    </Button>
                  )}
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
                  {(project.title === "ClaimReady" || project.title === "Hyperacing") ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Visit Website
                    </Button>
                  ) : null}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className={project.title === "ClaimReady" || project.title === "Hyperacing" ? "" : "flex-1"}
                  >
                    <Github size={14} />
                    {project.title === "ClaimReady" || project.title === "Hyperacing" ? "" : "View Code"}
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