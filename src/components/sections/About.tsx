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
                    SWE + Applied ML, End to End.
                  </p>
                </div>
                
                <div className="space-y-4 text-black leading-relaxed">
                  <p>
                    I'm a Computer Engineering + Computer Science student at UW-Madison focused on backend and applied ML systems.
                  </p>
                  
                  <p>
                    At Blue Cross Blue Shield, I built an in-call assistant that combined real-time transcription, retrieval over internal knowledge, and LLM response generation in a desktop workflow. It returned responses in under 5 seconds and cut CSR lookup time by 95% for workflows supporting 3M+ members.
                  </p>
                  
                  <p>
                    I also co-founded ClaimReady, where we deployed a YOLO11 + Gemini pipeline on AWS that reduced insurance claim valuation from 20+ hours to under 2 minutes.
                  </p>
                  
                  <p>
                    What I'm looking for: Summer 2026 SWE/ML internship shipping production systems.
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