'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Card */}
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-8 flex items-center justify-center h-full">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/sohamSenior.jpg"
                  alt="Soham Kundu"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8 h-full">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Currently building agentic AI prototypes at Blue Cross Blue Shield to streamline healthcare operations using Azure AI, .NET, and Python microservices.
                </p>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Developed LLM-powered prior-authorization agents for real-time support in customer service workflows. Built a hybrid keyword + semantic search pipeline that cut CSR search time by 90%, accelerating access to care for over 3M+ members.
                  </p>
                  
                  <p>
                    Co-founder of ClaimReady — 1st place winner at MadData25, recognized by YC&apos;s Jared Friedman and Ankit Gupta as well as the UW-Madison CS department. We cut wildfire insurance claim time from 10 hours to minutes using YOLO11, Gemini API, and real-time valuation deployed on AWS EC2.
                  </p>
                  
                  <p>
                    Lead Engineer & Co-founder of FiPet, a gamified financial literacy platform for teens. Designed the full-stack architecture (Firebase + React Native), integrated ML-powered personalization, and led a 15-person dev team through hiring, onboarding, and MVP delivery.
                  </p>
                  
                  <p>
                    Former ML researcher under Prof. Andreas Velten at UW-Madison. Wrote code in Python to control MEMS mirrors and SPAD sensors, built Python pipelines for dynamic scanning, and applied PCA + CNNs to extract signals from scattered hyperspectral data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About