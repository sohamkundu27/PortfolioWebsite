'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Award, Star, ExternalLink, Linkedin } from "lucide-react"

const Awards = () => {
  const awards = [
    {
      id: 1,
      title: "1st Place MadData25 Hackathon",
      description: "24 hour hackathon with 30+ teams and 120+ competitors. Won first place and best presentation for ClaimReady.",
      icon: Trophy,
      color: "#1261A0",
      category: "Hackathon",
      devpostLink: "https://devpost.com/sohamkundu2704"
    },
    {
      id: 2,
      title: "Top 3 at University Madness Startup Pitch Competition",
      description: "Achieved Top 3 and Audience Favorite among 30+ teams across 9 universities.",
      icon: Award,
      color: "#1261A0",
      category: "National Startup Competition",
      articleLink: "https://business.wisc.edu/centers/weinert/blog/uw-madisons-claimready-takes-home-audience-favorite-award-and-third-place-at-depaul-universitys-pitch-madness-competition/"
    },
    {
      id: 3,
      title: "Top 3 at Badger Launchpad Startup Pitch Competition",
      description: "Competed against 20+ teams from UW-Madison in the university startup competition.",
      icon: Star,
      color: "#1261A0",
      category: "University Startup Competition",
      linkedinPost: "https://www.linkedin.com/posts/activity-7318765475201458177-FNon?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEtjxmYBxAK3A_LeiJUpVyZJVtaqUvacUvA"
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

                  {/* Action Buttons */}
                  <div className="mt-4 space-y-2">
                    {/* Devpost Button for MadData25 */}
                    {award.devpostLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors w-full"
                        onClick={() => window.open(award.devpostLink, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View on Devpost
                      </Button>
                    )}

                    {/* Article Button for University Madness */}
                    {award.articleLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors w-full"
                        onClick={() => window.open(award.articleLink, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Read Article
                      </Button>
                    )}

                    {/* LinkedIn Post Button for Badger Launchpad */}
                    {award.linkedinPost && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors w-full"
                        onClick={() => window.open(award.linkedinPost, "_blank")}
                      >
                        <Linkedin size={16} className="mr-2" />
                        View LinkedIn Post
                      </Button>
                    )}
                  </div>

                  {/* ClaimReady Tag at bottom */}
                  <div className="mt-6 flex justify-center">
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm hover:bg-green-50 hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer bg-green-100 border-green-500 text-green-700 text-center"
                      onClick={() => {
                        const portfolioSection = document.getElementById('portfolio');
                        if (portfolioSection) {
                          portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      ClaimReady
                    </Badge>
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