import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Full Stack Developer",
      duration: "2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led development of microservices architecture serving 100K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews",
        "Built responsive web applications using React and Node.js"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      company: "Digital Innovations",
      role: "Full Stack Developer",
      duration: "2020 - 2022",
      location: "Austin, TX",
      description: [
        "Developed and maintained 5+ client-facing web applications",
        "Collaborated with UI/UX team to implement pixel-perfect designs",
        "Optimized database queries improving application performance by 40%",
        "Integrated third-party APIs and payment processing systems"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "Stripe API"]
    },
    {
      company: "StartupXYZ",
      role: "Frontend Developer",
      duration: "2019 - 2020",
      location: "Remote",
      description: [
        "Built responsive single-page applications from scratch",
        "Implemented modern development workflows and testing strategies",
        "Worked directly with stakeholders to translate requirements into features",
        "Maintained high code quality standards and documentation"
      ],
      technologies: ["React", "JavaScript", "SASS", "Jest", "Cypress"]
    },
    {
      company: "CodeCraft Solutions",
      role: "Junior Developer",
      duration: "2018 - 2019",
      location: "New York, NY",
      description: [
        "Contributed to development of e-commerce platforms for mid-size businesses",
        "Assisted in debugging and fixing critical production issues",
        "Participated in agile development processes and daily standups",
        "Learned modern web technologies and best practices through mentorship"
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"]
    },
    {
      company: "University Tech Lab",
      role: "Software Development Intern",
      duration: "2017 - 2018",
      location: "Boston, MA",
      description: [
        "Developed internal tools and automation scripts for research projects",
        "Assisted professors and graduate students with technical implementations",
        "Created data visualization dashboards for academic research",
        "Gained hands-on experience with version control and collaborative coding"
      ],
      technologies: ["Python", "JavaScript", "Git", "SQLite", "Chart.js"]
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
                        <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Calendar size={12} className="mr-1" />
                            {exp.duration}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-600 mb-3">
                          <Building size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.location}</span>
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
                      <div className="flex flex-wrap gap-2">
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