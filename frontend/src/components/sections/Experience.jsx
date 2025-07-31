import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Building, Calendar, ExternalLink, Linkedin } from "lucide-react";
import bcbsLogo from "../assets/BCBSLOGO.png";
import fipetLogo from "../assets/FipetLogo.jpeg";
import uwMadisonLogo from "../assets/uwmadisonlogo.png";
import outlierLogo from "../assets/outlierlogo.jpeg";
import waLogo from "../assets/WAlogo.jpeg";

const Experience = () => {
  const experiences = [
    {
      company: "Blue Cross Blue Shield",
      role: "AI/Software Engineering Intern",
      duration: "May 2025 – Present",
      logo: bcbsLogo,
      description: [
        "Built agentic-AI prototypes with Azure AI, integrating .NET/Python services for real-time prior-authorization support",
        "Pioneered real-time knowledge retrieval pipeline combining keyword & semantic search, cutting Customer Service Rep search time by 90% and accelerating patient access to critical healthcare info, impacting 3M+ members",
        "Implemented LangChain to orchestrate and deploy Large Language Model-based knowledge retrieval for live CSR use"
      ],
      technologies: ["Azure AI", ".NET", "Python", "LangChain", "LLM", "Semantic Search", "Real-time Systems"]
    },
    {
      company: "FiPet",
      role: "Lead SWE/Co-Founder (Part-time)",
      duration: "May 2025 – Present",
      logo: fipetLogo,
      description: [
        "Architecting a mobile app platform with AI-powered, gamified financial education modules tailored for Gen Z audiences",
        "Built full-stack Firebase and React Native app integrating ML-driven personalization engines for adaptive learning",
        "Executed and designed full intern hiring pipeline, interviewing and onboarding 10+ engineering candidates",
        "Led 10-person development team across MVP roadmap and intern management; resulting in 200+ user waitlist"
      ],
      technologies: ["React Native", "Firebase", "ML", "AI", "Gamification", "Mobile Development", "Team Leadership"]
    },
    {
      company: "Machine Learning for NLOS Imaging Research",
      role: "Research Assistant (Under Prof. Andreas Velten)",
      duration: "January 2025 – May 2025",
      logo: uwMadisonLogo,
      description: [
        "Engineered python software for embedded NLOS hardware integrating lasers and SPADs for real-time photon data capture",
        "Designed and trained CNNs in Python and MATLAB to reconstruct occluded objects from sparse time-of-flight datasets",
        "Optimized neural network inference, reducing computational overhead by 20% for deployment on edge devices"
      ],
      technologies: ["Python", "MATLAB", "CNN", "Neural Networks", "Computer Vision", "Embedded Systems", "SPADs", "Laser Systems"]
    },
    {
      company: "Outlier AI",
      role: "Software Engineer",
      duration: "May 2024 – August 2024",
      logo: outlierLogo,
      description: [
        "Optimized LLM code for 200+ tasks across 3 projects, improving accuracy by 25% while preserving efficiency and edge cases",
        "Debugged and refactored codebases (Java, Python, JS), integrating RL to fine-tune multi-turn LLM reasoning",
        "Collaborated with research, engineering, and product teams to optimize model outputs and system accuracy"
      ],
      technologies: ["LLM", "Java", "Python", "JavaScript", "Reinforcement Learning", "Multi-turn Reasoning", "Model Optimization"]
    },
    {
      company: "Wisconsin Autonomous",
      role: "Software Engineer",
      duration: "September 2024 – Present",
      logo: waLogo,
      description: [
        "Built ML algorithms with OpenCV for real-time lane, cone, and boundary detection in autonomous vehicles",
        "Integrated perception module into software pipeline coordinating sensor fusion, control systems, and vehicle decision-making",
        "Collaborated with a 30+ person software team, managing version control, code reviews, and CI/CD workflows in Git"
      ],
      technologies: ["OpenCV", "Machine Learning", "Computer Vision", "Autonomous Vehicles", "Sensor Fusion", "Git", "CI/CD", "Real-time Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div 
                  className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10"
                  style={{ backgroundColor: "#1261A0" }}
                />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderTopColor: "#1261A0" }}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                          <div className="flex items-center space-x-4">
                            {/* Company Logo */}
                            <div className="flex-shrink-0">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-20 h-20 rounded-lg object-contain shadow-md"
                              />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                              <div className="flex items-center text-gray-600">
                                <Building size={16} className="mr-2" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Calendar size={12} className="mr-1" />
                            {exp.duration}
                          </Badge>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4 text-gray-600">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Website and LinkedIn Buttons for FiPet */}
                      {exp.company === "FiPet" && (
                        <div className="mt-4 flex gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                            onClick={() => window.open("https://fipet.dev", "_blank")}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Visit Website
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                            onClick={() => window.open("https://linkedin.com/company/fipet", "_blank")}
                          >
                            <Linkedin size={16} className="mr-2" />
                            LinkedIn
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;