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
                    At Blue Cross Blue Shield, I developed an in-call support app for customer service reps, transcribing live calls, retrieving answers from internal databases, and delivering AI-generated responses in under 5 seconds, serving 3M+ members. I engineered a Python-based RAG pipeline with LangChain (custom agents, RetrievalQA) using hybrid keyword + semantic search, Azure real-time transcription, and Azure OpenAI LLMs, cutting CSR lookup time by 95%+. I integrated the pipeline into a desktop app with automated post-call summaries for seamless real-time call assistance.
                  </p>
                  
                  <p>
                    As a Machine Learning Researcher in the Computational Optics Group, I developed ML pipelines with optical sensor data, enabling non-line-of-sight object imaging and reconstruction. I achieved 20% reduction in neural network inference overhead, improving edge deployment feasibility on embedded systems. I engineered embedded Python software for lasers and high-speed cameras for real-time photon capture, and trained/fine-tuned convolutional neural networks in Python/MATLAB on 3 large-scale datasets with varied scenes, noise, and sensor setups.
                  </p>
                  
                  <p>
                    I co-founded ClaimReady, a 5x award-winning AI web application that generates complete home inventories and reduces insurance claim valuation time from 20+ hours to under 2 minutes, accelerating post-disaster recovery for homeowners and adjusters. We scaled to 350+ users by deploying an image valuation pipeline via Docker AWS EC2, using YOLO11 for detection, Gemini API for brand/price identification, and SupabaseDB; processing 1,500+ images and valuing $800K+ in items. We were recognized as "investor-ready" by judges and acknowledged by YC partners and UW-Madison CS Dept for technical excellence.
                  </p>
                  
                  <p>
                    Check it out here: <a href="https://www.useclaimready.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.useclaimready.ai/</a>
                  </p>
                  
                  <p>
                    As Lead SWE & Co-founder of FiPet, I architected a cross-platform mobile app with AI-powered, gamified financial education modules tailored for Gen Z audiences. We scaled pre-launch to a 200+ user waitlist using ML-driven personalization for adaptive learning. I led a 15-person engineering team to build the MVP using React Native, Firebase (Firestore, Auth, Cloud Functions), and AI/LLM pipelines for automated bonus quest generation and progress tracking.
                  </p>
                  
                  <p>
                    Check it out here: <a href="https://www.fipet.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.fipet.dev/</a>
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