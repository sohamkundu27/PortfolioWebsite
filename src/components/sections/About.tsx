'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Card */}
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardContent className="p-10 flex items-center justify-center h-full">
              <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/sohamsenior.jpg"
                  alt="Soham Kundu"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* Content Card */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-10 h-full">
              <div className="space-y-6">
                <div className="text-center">
                  <p className="text-xl font-semibold text-black mb-6">
                    Builder. Engineer. Visionary.
                  </p>
                </div>
                
                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    I'm a Computer Engineering & Computer Science student at UW–Madison who loves building AI systems that solve real-world problems at scale. I have worked in industry, research, and projects, and am actively looking for 2026 summer internships in SWE or AI/ML.
                  </p>
                  
                  <p>
                    At Blue Cross Blue Shield, I built an in-call AI assistant that transcribes calls, searches internal databases, and generates responses in under 5 seconds, cutting Customer Service Representatives' lookup time by 95%, impacting 3M+ members. I engineered the full RAG pipeline with LangChain, Azure OpenAI, and real-time transcription, integrating it into a desktop app with automated post-call summaries.
                  </p>
                  
                  <p>
                    As a Machine Learning Researcher in the Computational Optics Group, I developed ML pipelines for non-line-of-sight imaging, optimized neural network inference by 20% for embedded deployment, and trained models on large-scale, noisy datasets.
                  </p>
                  
                  <p>
                    I co-founded ClaimReady, a 5x award-winning AI web app that cuts insurance claim valuation from 20+ hours to under 2 minutes. We scaled to 350+ users, valued $800K+ in items, and deployed a YOLO11 + Gemini pipeline on AWS, earning recognition from YC partners and the UW–Madison CS dept.
                  </p>
                  
                  <p>
                    Check it out here: <a href="https://www.useclaimready.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">useclaimready.ai</a>
                  </p>
                  
                  <p>
                    As Lead SWE & Co-founder of FiPet, I built a cross-platform mobile app delivering gamified financial literacy for Gen Z. We grew a 200+ user waitlist pre-launch and shipped a React Native + Firebase MVP with AI-powered personalization and automated quest generation.
                  </p>
                  
                  <p>
                    Check it out here: <a href="https://www.fipet.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">fipet.dev</a>
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