import React from "react";
import { Card, CardContent } from "../ui/card";
import { Trophy, Award, Star } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "1st Place MadData25 Hackathon",
      description: "24 hour hackathon, 30+ teams and 120+ competitors. Won first place and best presentation. Built ClaimReady.",
      icon: Trophy,
      color: "#FFD700",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "Top 3 at the University Madness Startup Pitch Competition",
      description: "ClaimReady - Top 3 and Audience Favorite. 30+ teams across 9 universities.",
      icon: Award,
      color: "#C0C0C0",
      category: "Startup Competition"
    },
    {
      id: 3,
      title: "Top 3 at Badger Launchpad Startup Pitch Competition",
      description: "ClaimReady - 20+ teams from UW-Madison",
      icon: Star,
      color: "#CD7F32",
      category: "University Competition"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "#1261A0" }} />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Recognition for innovative projects and entrepreneurial achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <Card 
              key={award.id} 
              className="group shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 overflow-hidden bg-white"
            >
              <CardContent className="p-8">
                {/* Award Icon */}
                <div className="flex justify-center mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${award.color}20` }}
                  >
                    <award.icon 
                      size={32} 
                      style={{ color: award.color }}
                      className="group-hover:rotate-12 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Award Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {award.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {award.description}
                  </p>

                  {/* Category Badge */}
                  <div className="inline-block">
                    <span 
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{ 
                        backgroundColor: `${award.color}15`,
                        color: award.color,
                        border: `1px solid ${award.color}30`
                      }}
                    >
                      {award.category}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards; 