import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Eye, Play } from "lucide-react";
import crPic from "../assets/CRPIC.png";
import hrPic from "../assets/HRPIC.png";
import robotArmPic from "../assets/RobotArmPic.png";
import ghmsPic from "../assets/GHMS3.jpg";
import SectionTracker from "../SectionTracker";

const PortfolioSection = () => {


  const projects = [
    {
      id: 1,
      title: "ClaimReady",
      description: "• Co-founded a 2x award-winning AI startup web app to cut insurance claim valuation time from **20+ hrs to minutes**\n• Utilized YOLO11 for detection, Gemini API for identification/pricing, and Supabase for auth; processed 1200+ images\n• Deployed via **Docker** on an **AWS EC2** instance; scaled to support our **350+ users**\n• Recognized as 'investor-ready' by judges; acknowledged by YC's Jared Friedman, Ankit Gupta, and UW-Madison CS Dept",
      image: crPic,
      technologies: ["YOLO11", "Google Lens API", "Supabase", "Docker", "AWS EC2", "AI/ML"],
      category: "ai",
      demoLink: "https://claim-ready.vercel.app",
      githubLink: "https://github.com/sohamkundu27/MadData25",
      deployed: true
    },
    {
      id: 2,
      title: "Hyperacing",
      description: "• Built and scaled Go backend with REST APIs for a real-time F1 daily fantasy sports app with **200+ active users**\n• Integrated Firebase Auth for secure user login and session management, and used F1 websockets for live race telemetry data\n• Engineered a Next.js frontend with dynamic dashboards for AI-powered predictions, betting trends, and expert insights",
      image: hrPic,
      technologies: ["Go", "Next.js", "Firebase Auth", "WebSockets", "REST APIs", "F1 API"],
      category: "fullstack",
      demoLink: "https://hyperacing.us",
      githubLink: "https://github.com/B-a-1-a/HypeRacing",
      deployed: true
    },
    {
      id: 3,
      title: "Voice-Controlled MCP Robot Arm",
      description: "• Built a **full-stack** voice interface to control a robot arm by transcribing real-time speech into structured robot commands\n• Engineered an **LLM** task planner to convert prompts like 'clear the table' into JSON robot actions executed via MCP\n• Validated the entire pipeline with async audio input and physics-based simulation, ensuring robust task completion",
      image: robotArmPic,
      technologies: ["LLM", "Voice Recognition", "MCP", "Robot Control", "Python", "Real-time Systems"],
      category: "ai",
      demoLink: "https://www.youtube.com/watch?v=ek3yyC_W1UA&feature=youtu.be",
      githubLink: "https://github.com/sohamkundu27/UCBerkeleyAIHackathon",
      deployed: false
    },
    {
      id: 4,
      title: "Greenhouse IoT Monitoring System",
      description: "• Built IoT greenhouse system tracking temp, humidity, and brightness on Raspberry Pi in Python, optimizing GPIO control\n• Configured Azure IoT Hub and **REST APIs** for real-time transmission of over 10K data points daily\n• Deployed a **Dockerized Django-React** app on Azure App Services, enabling remote monitoring by parents in India",
      image: ghmsPic,
      technologies: ["Raspberry Pi", "Python", "Azure IoT Hub", "Django", "React", "Docker"],
      category: "iot",
      demoLink: "#",
      githubLink: "https://github.com/sohamkundu27/GIoTMS",
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





  return (
    <SectionTracker sectionId="portfolio">
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A showcase of my recent projects and technical accomplishments
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
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
                  {project.title === "ClaimReady" || project.title === "Hyperacing" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Website
                    </Button>
                  ) : project.title === "Voice-Controlled MCP Robot Arm" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-gray-900"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <Play size={16} className="mr-2" />
                      Watch Demo
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
                
                <div className="text-gray-600 mb-4 space-y-2">
                  {project.description.split('\n').map((line, index) => (
                    <p key={index} className="text-sm">
                      {line.split('**').map((part, partIndex) => 
                        partIndex % 2 === 0 ? part : <strong key={partIndex}>{part}</strong>
                      )}
                    </p>
                  ))}
                </div>

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
                  {project.title === "ClaimReady" || project.title === "Hyperacing" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Visit Website
                    </Button>
                  ) : project.title === "Voice-Controlled MCP Robot Arm" ? (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                      onClick={() => window.open(project.demoLink, "_blank")}
                    >
                      <Play size={14} className="mr-2" />
                      Watch Demo
                    </Button>
                  ) : null}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className={project.title === "ClaimReady" || project.title === "Hyperacing" || project.title === "Voice-Controlled MCP Robot Arm" ? "" : "flex-1"}
                  >
                    <Github size={14} />
                    {project.title === "ClaimReady" || project.title === "Hyperacing" || project.title === "Voice-Controlled MCP Robot Arm" ? "" : "View Code"}
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
            onClick={() => window.open("https://github.com/sohamkundu27", "_blank")}
          >
            View All Projects on GitHub
            <ExternalLink size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
    </SectionTracker>
  );
};

export default PortfolioSection;