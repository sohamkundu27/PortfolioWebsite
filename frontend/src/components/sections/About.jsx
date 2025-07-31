import React from "react";
import { Card, CardContent } from "../ui/card";
import sohamSenior from "../assets/sohamsenior.jpg";

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
              <div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src={sohamSenior} 
                  alt="Soham Kundu Senior Photo" 
                  className="w-full h-full object-cover"
                />
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hello, I'm a Software Engineer</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                  Currently building agentic AI prototypes at Blue Cross Blue Shield to streamline healthcare operations using Azure AI, .NET, and Python microservices. Developed LLM-powered prior-authorization agents for real-time support in customer service workflows. Built a hybrid keyword + semantic search pipeline that cut CSR search time by 90%, accelerating access to care for over 3M+ members.
                  </p>
                  <p>
                  Co-founder of ClaimReady — 1st place winner at MadData25, recognized by YC’s Jared Friedman and Ankit Gupta as well as the UW-Madison CS department. We cut wildfire insurance claim time from 10 hours to minutes using YOLO11, Gemini API, and real-time valuation deployed on AWS EC2.

                  </p>
                  <p>
                  Lead Engineer & Co-founder of FiPet, a gamified financial literacy platform for teens.
                  Designed the full-stack architecture (Firebase + React Native), integrated ML-powered personalization, and led a 15-person dev team through hiring, onboarding, and MVP delivery.
                  </p>
                  <p>
                  Former ML researcher under Prof. Andreas Velten at UW-Madison. Wrote code in Python to control MEMS mirrors and SPAD sensors, built Python pipelines for dynamic scanning, and applied PCA + CNNs to extract signals from scattered hyperspectral data.
                  </p>
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