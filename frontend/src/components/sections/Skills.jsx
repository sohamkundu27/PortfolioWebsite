import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code, Server, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "#1261A0",
      skills: ["Go", "Java", "JavaScript", "Python", "SQL"]
    },
    {
      title: "Frameworks/Libraries",
      icon: Server,
      color: "#374151",
      skills: ["Django", "Flask", "Matplotlib", "NumPy", "OpenCV", "Pandas", "Pytorch", "Sklearn", "TensorFlow", ".NET"]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      color: "#DC2626",
      skills: ["AWS", "Azure", "CI/CD", "Docker", "Git/GitHub", "Google Cloud", "Linux", "REST APIs", "Test-Driven Development"]
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
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="px-3 py-1 text-sm hover:bg-gray-50 transition-colors cursor-default"
                      style={{ borderColor: category.color, color: category.color }}
                    >
                      {skill}
                    </Badge>
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