import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Server, Database, Wrench, Palette, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "#1261A0",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "#374151",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 92 },
        { name: "GraphQL", level: 75 },
        { name: "Java", level: 70 }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "#059669",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "Redis", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "MySQL", level: 78 },
        { name: "Elasticsearch", level: 65 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "#DC2626",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
        { name: "Linux", level: 82 },
        { name: "Kubernetes", level: 65 }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "#7C3AED",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Responsive Design", level: 90 },
        { name: "User Experience", level: 85 },
        { name: "Prototyping", level: 78 },
        { name: "Design Systems", level: 82 }
      ]
    },
    {
      title: "Other Technologies",
      icon: Globe,
      color: "#EA580C",
      skills: [
        { name: "Next.js", level: 85 },
        { name: "Webpack", level: 70 },
        { name: "Testing (Jest)", level: 80 },
        { name: "Socket.io", level: 75 },
        { name: "Microservices", level: 78 },
        { name: "Agile/Scrum", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon size={24} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Additional Technologies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Sass/SCSS", "Material-UI", "Bootstrap", "Styled Components",
              "Storybook", "Cypress", "Postman", "Insomnia", "Jira", "Slack",
              "Visual Studio Code", "IntelliJ IDEA", "Photoshop", "Illustrator"
            ].map((tech) => (
              <Badge 
                key={tech} 
                variant="outline"
                className="px-3 py-1 text-sm hover:bg-gray-100 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;