import React from "react";
import { Card, CardContent } from "../ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gray-300 shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-6xl font-bold">
                  Photo
                </div>
              </div>
              {/* Decorative element */}
              <div 
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl opacity-20"
                style={{ backgroundColor: "#1261A0" }}
              />
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hello, I'm a Developer</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience in creating 
                    robust web applications and scalable software solutions. My journey in technology 
                    started with a curiosity about how things work, and has evolved into a career 
                    dedicated to building innovative digital experiences.
                  </p>
                  <p>
                    Specializing in modern web technologies, I enjoy tackling complex problems and 
                    turning ideas into reality. From responsive front-end interfaces to powerful 
                    back-end systems, I love working across the full technology stack to deliver 
                    comprehensive solutions.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or sharing knowledge with the developer community through 
                    blog posts and mentoring.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: "#1261A0" }}>5+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: "#1261A0" }}>50+</div>
                    <div className="text-sm text-gray-500">Projects Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;