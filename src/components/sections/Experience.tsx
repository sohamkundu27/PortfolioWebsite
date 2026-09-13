'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Linkedin, Calendar, Github } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      id: 6,
      links: [
        { label: "Sensor Fusion Code", href: "https://github.com/sohamkundu27/sensor-fusion", icon: Github }
      ],
      company: "UW–Madison Computer Sciences",
      position: "Undergraduate Researcher",
      duration: "Sep 2026 - Present",
      employmentType: "Part-time",
      location: "Madison, Wisconsin, United States · On-site",
      description: "Mohit Gupta's WISION Lab - ML based Multi-sensor fusion (LiDAR, RGB, radar) for autonomous driving in fog",
      technologies: ["Machine Learning", "Sensor Fusion", "LiDAR", "Computer Vision"],
      logo: "/assets/uwmadisonlogo.png"
    },
    {
      id: 1,
      company: "Honeywell Aerospace",
      position: "Machine Learning Intern",
      duration: "May 2026 - Aug 2026",
      employmentType: "Internship",
      location: "United States · On-site",
      description: "Real-time detection & tracking, autonomous drones, ROS 2, NVIDIA Jetson AGX Orin",
      technologies: ["Computer Vision", "Robotics", "ROS 2", "NVIDIA Jetson AGX Orin"],
      logo: "/assets/honeywellogo.png"
    },
    {
      id: 2,
      company: "FiPet",
      position: "Co-Founder",
      duration: "Aug 2025 - Apr 2026",
      employmentType: "Full-time",
      location: "San Francisco, California, United States · Remote",
      description: "fipet.dev\n3000+ downloads on App Store",
      technologies: ["React Native", "Firebase", "LangGraph"],
      logo: "/assets/FipetLogo.jpeg"
    },
    {
      id: 3,
      company: "Blue Cross Blue Shield Association",
      position: "Software Engineer Intern",
      duration: "May 2025 - Aug 2025",
      employmentType: "Internship",
      location: "United States · On-site",
      description: "Built and shipped a RAG-based in-call assistant to production for member support workflows",
      technologies: ["Python", "RAG", "Azure OpenAI"],
      logo: "/assets/BCBSLOGO.png"
    },
    {
      id: 4,
      company: "UW–Madison Computer Sciences",
      position: "Undergraduate Researcher",
      duration: "Dec 2024 - Apr 2025",
      employmentType: "Part-time",
      location: "Madison, Wisconsin, United States · On-site",
      description: "Andreas Velten's Computational Optics Group - CNN reconstruction, computer vision, photon-level imaging, edge deployment optimization",
      technologies: ["Python", "CNNs", "Computer Vision", "Edge Computing"],
      logo: "/assets/uwmadisonlogo.png"
    },
    {
      id: 5,
      company: "Wisconsin Autonomous",
      position: "Software Engineer Intern",
      duration: "May 2024 - Nov 2024",
      employmentType: "Part-time",
      location: "Madison · On-site",
      description: "Built EKF-based sensor fusion (LiDAR, radar, camera) for real-time lane, cone, and boundary detection — Python, ROS 2",
      technologies: ["Python", "ROS 2", "Sensor Fusion", "Computer Vision"],
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
            My professional journey in robotics and computer vision
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

                        {exp.employmentType && (
                          <p className="text-sm text-gray-600">{exp.employmentType} · {exp.location}</p>
                        )}
                        {exp.description && (
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{exp.description}</p>
                        )}

                        {/* Full Width Content */}
                        <div className="w-full">
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

                          {exp.links && (
                            <div className="flex flex-wrap gap-3">
                              {exp.links.map(({ label, href, icon: Icon }) => (
                                <Button
                                  key={href}
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                                >
                                  <a href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon size={16} className="mr-2" aria-hidden="true" />
                                    {label}
                                  </a>
                                </Button>
                              ))}
                            </div>
                          )}

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