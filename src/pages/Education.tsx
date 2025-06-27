
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Information Technology",
      institution: "St. Joseph's College of Engineering, Chennai",
      duration: "Nov 2022 – May 2026",
      score: "CGPA: 8.41",
      status: "ongoing",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sri Vijay Vidyalaya Matric Hr. Sec. School",
      duration: "2021 – 2022",
      score: "86.3%",
      status: "completed",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "C.S.I Girls Matric Hr. Sec. School",
      duration: "2019 – 2020",
      score: "82.4%",
      status: "completed",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and educational achievements that have shaped my technical foundation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-l-4 border-l-purple-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full text-white">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-800 mb-1">
                        {edu.degree}
                      </CardTitle>
                      <p className="text-purple-600 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <Badge 
                      variant={edu.status === "ongoing" ? "default" : "secondary"}
                      className="capitalize"
                    >
                      {edu.status}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      {edu.duration}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" size={20} />
                  <span className="text-lg font-semibold text-gray-700">
                    {edu.score}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 border-purple-200 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Throughout my academic journey, I have maintained consistent performance while 
              actively engaging in practical learning experiences. My education in Information 
              Technology has provided me with a strong foundation in programming, web development, 
              and emerging technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Education;
