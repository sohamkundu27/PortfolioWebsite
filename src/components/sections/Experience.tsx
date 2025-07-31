'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Linkedin, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Blue Cross Blue Shield",
      position: "AI/Software Engineering Intern",
      duration: "May 2025 – Present",
      description: "Built agentic-AI prototypes at Blue Cross Blue Shield to streamline healthcare operations using Azure AI, .NET, and Python microservices. Developed LLM-powered prior-authorization agents for real-time support in customer service workflows. Built a hybrid keyword + semantic search pipeline that cut CSR search time by 90%, accelerating access to care for over 3M+ members. Implemented LangChain to orchestrate and deploy Large Language Model-based knowledge retrieval for live CSR use.",
      technologies: ["Azure AI", ".NET", "Python", "LangChain", "LLMs", "Microservices"],
      logo: "/assets/BCBSLOGO.png"
    },
    {
      id: 2,
      company: "FiPet",
      position: "Lead SWE/Co-Founder (Part-time)",
      duration: "May 2025 – Present",
      description: "Architecting a mobile app platform with AI-powered, gamified financial education modules tailored for Gen Z audiences. Built full-stack Firebase and React Native app integrating ML-driven personalization engines for adaptive learning. Executed and designed full intern hiring pipeline, interviewing and onboarding 10+ engineering candidates. Led 10-person development team across MVP roadmap and intern management; resulting in 200+ user waitlist.",
      technologies: ["React Native", "Firebase", "ML", "AI", "Mobile Development"],
      logo: "/assets/FipetLogo.jpeg"
    },
    {
      id: 3,
      company: "Machine Learning for NLOS Imaging Research",
      position: "Under Prof. Andreas Velten",
      duration: "January 2025 – May 2025",
      description: "Engineered python software for embedded NLOS hardware integrating lasers and SPADs for real-time photon data capture. Designed and trained CNNs in Python and MATLAB to reconstruct occluded objects from sparse time-of-flight datasets. Optimized neural network inference, reducing computational overhead by 20% for deployment on edge devices.",
      technologies: ["Python", "MATLAB", "CNNs", "SPADs", "Edge Computing", "Computer Vision"],
      logo: "/assets/uwmadisonlogo.png"
    },
    {
      id: 4,
      company: "Outlier AI",
      position: "Software Engineer",
      duration: "May 2024 – August 2024",
      description: "Optimized LLM code for 200+ tasks across 3 projects, improving accuracy by 25% while preserving efficiency and edge cases. Debugged and refactored codebases (Java, Python, JS), integrating RL to fine-tune multi-turn LLM reasoning. Collaborated with research, engineering, and product teams to optimize model outputs and system accuracy.",
      technologies: ["LLMs", "Python", "Java", "JavaScript", "Reinforcement Learning"],
      logo: "/assets/outlierlogo.jpeg"
    },
    {
      id: 5,
      company: "Wisconsin Autonomous",
      position: "Software Engineer",
      duration: "September 2024 – Present",
      description: "Built ML algorithms with OpenCV for real-time lane, cone, and boundary detection in autonomous vehicles. Integrated perception module into software pipeline coordinating sensor fusion, control systems, and vehicle decision-making. Collaborated with a 30+ person software team, managing version control, code reviews, and CI/CD workflows in Git.",
      technologies: ["OpenCV", "ML", "Computer Vision", "Git", "CI/CD", "Autonomous Systems"],
      logo: "/assets/WAlogo.jpeg"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            My professional journey in software engineering and AI/ML
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full rounded-full"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${
                index % 2 === 0 
                  ? 'lg:flex-row' 
                  : 'lg:flex-row-reverse'
              } flex-col lg:gap-8 gap-6`}>
                
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Experience Card */}
                <div className={`w-full lg:w-6/12 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <Card className="group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-gray-200 hover:border-blue-300 rounded-xl border-2">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-4">
                        {/* Header with Logo and Title */}
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-white shadow-md flex items-center justify-center">
                              <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Title and Duration */}
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {exp.company}
                            </h3>
                            <p className="text-lg text-gray-900 font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                              {exp.position}
                            </p>
                            <div className="flex items-center gap-2 text-gray-600 text-sm">
                              <Calendar size={16} className="text-gray-500" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Full Width Content */}
                        <div className="w-full">
                          <p className="text-gray-700 leading-relaxed mb-4 text-sm w-full">
                            {exp.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4 w-full">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="px-3 py-1 text-sm hover:bg-blue-50 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
                                style={{ borderColor: "#1261A0", color: "#1261A0" }}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          {/* Website and LinkedIn Buttons for FiPet */}
                          {exp.company === "FiPet" && (
                            <div className="flex gap-3">
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
                        </div>
                      </div>
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