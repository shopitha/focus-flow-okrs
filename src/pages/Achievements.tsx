
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, MapPin, Calendar, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "GDSC Solution Challenge 2024",
      subtitle: "The Guardian Band",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      category: "Innovation Challenge",
      year: "2024",
      description: [
        "Wearable for vital sign monitoring",
        "Real-time alerts for emergency detection",
        "Google Developer Student Club recognition"
      ],
      impact: "Health Tech Innovation"
    },
    {
      title: "IIT Bombay FOSSEE Mapathon 2023",
      subtitle: "Geospatial Data Solutions",
      icon: Award,
      color: "from-blue-500 to-purple-500",
      category: "Technical Challenge",
      year: "2023",
      description: [
        "Solved real-world challenges with geospatial data",
        "IIT Bombay recognition for technical excellence",
        "Open source contribution to FOSSEE community"
      ],
      impact: "Data Science & Mapping"
    },
    {
      title: "Xyntra'25 36-Hour Hackathon",
      subtitle: "Smart Attendance Tracker",
      icon: Users,
      color: "from-teal-500 to-green-500",
      category: "Hackathon Winner",
      year: "2025",
      description: [
        "Built contactless RFID attendance system",
        "36-hour intensive development period",
        "Recognized by EDII, Govt. of Tamil Nadu"
      ],
      impact: "EdTech Innovation"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notable achievements, competition wins, and recognition received for innovative projects and technical excellence.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 animate-fade-in">
            <Trophy className="mx-auto mb-3 text-yellow-600" size={32} />
            <div className="text-2xl font-bold text-yellow-600 mb-1">3</div>
            <div className="text-gray-600 text-sm">Major Achievements</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 animate-fade-in">
            <Award className="mx-auto mb-3 text-blue-600" size={32} />
            <div className="text-2xl font-bold text-blue-600 mb-1">2024</div>
            <div className="text-gray-600 text-sm">Latest Recognition</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 border-teal-200 animate-fade-in">
            <Users className="mx-auto mb-3 text-teal-600" size={32} />
            <div className="text-2xl font-bold text-teal-600 mb-1">36</div>
            <div className="text-gray-600 text-sm">Hour Hackathon</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 animate-fade-in">
            <Star className="mx-auto mb-3 text-purple-600" size={32} />
            <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
            <div className="text-gray-600 text-sm">Tech Domains</div>
          </Card>
        </div>

        {/* Achievements Timeline */}
        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-l-4 border-l-yellow-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-full text-white`}>
                        <Icon size={28} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800 mb-1">
                          {achievement.title}
                        </CardTitle>
                        <p className="text-purple-600 font-semibold">
                          {achievement.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        {achievement.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        {achievement.year}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                    <div className="space-y-2">
                      {achievement.description.map((desc, descIndex) => (
                        <div key={descIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="flex items-center gap-2 pt-2">
                    <Badge variant="outline" className="border-teal-300 text-teal-700">
                      <MapPin size={14} className="mr-1" />
                      Impact: {achievement.impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recognition Summary */}
        <Card className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Recognition Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Trophy className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation Excellence</h4>
                <p className="text-gray-600 text-sm">
                  Recognized for innovative solutions in health tech and IoT applications
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Technical Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Demonstrated proficiency in data science, mapping, and system development
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Collaborative Impact</h4>
                <p className="text-gray-600 text-sm">
                  Successfully led teams and collaborated on impactful technology solutions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Goals */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Building on Success
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These achievements represent my commitment to innovation and technical excellence. 
              Each recognition has provided valuable experience and motivation to continue pushing 
              boundaries in technology and create meaningful solutions that make a difference.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
