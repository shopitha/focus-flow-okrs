
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const experience = {
    title: "Intern – Front-End Development",
    company: "Aristocrat Solutions Pvt Ltd",
    duration: "Jul 2024 – Aug 2024",
    location: "Chennai",
    project: "Task Management Application",
    achievements: [
      "Implemented JWT authentication for secure access",
      "Built features for task creation, assignment, and tracking", 
      "Developed using HTML, CSS, JavaScript (responsive design)"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "JWT", "Responsive Design"]
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience and internships that have contributed to my growth as a developer.
          </p>
        </div>

        {/* Experience Card */}
        <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-l-4 border-l-teal-500 animate-fade-in">
          <CardHeader className="pb-6">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-teal-500 to-purple-500 rounded-full text-white">
                  <Briefcase size={28} />
                </div>
                <div>
                  <CardTitle className="text-2xl text-gray-800 mb-2">
                    {experience.title}
                  </CardTitle>
                  <p className="text-teal-600 font-semibold text-lg">
                    {experience.company}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <Badge className="bg-gradient-to-r from-teal-500 to-purple-500 text-white">
                  Internship
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  {experience.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin size={16} />
                  {experience.location}
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Project */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">
                Project: {experience.project}
              </h4>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Key Achievements:</h4>
              <div className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <Card className="mt-12 bg-gradient-to-r from-teal-50 to-purple-50 border-teal-200 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Professional Growth
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              This internship experience at Aristocrat Solutions provided me with valuable hands-on 
              experience in frontend development and project management. Working on a real-world 
              task management application helped me understand the importance of secure authentication, 
              user experience design, and responsive web development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
