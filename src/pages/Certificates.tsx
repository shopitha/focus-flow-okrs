
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB",
      category: "Database",
      color: "from-green-500 to-emerald-500",
      status: "Completed"
    },
    {
      title: "Front-End Development",
      issuer: "Coursera",
      category: "Web Development",
      color: "from-blue-500 to-indigo-500",
      status: "Completed"
    },
    {
      title: "Postman API Fundamentals",
      issuer: "Postman Student Expert",
      category: "API Testing",
      color: "from-orange-500 to-red-500",
      status: "Completed"
    },
    {
      title: "Power BI",
      issuer: "Forage",
      category: "Data Analytics",
      color: "from-yellow-500 to-orange-500",
      status: "Completed"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "Coursera",
      category: "Cloud Computing",
      color: "from-purple-500 to-pink-500",
      status: "Completed"
    },
    {
      title: "SQL (Basic)",
      issuer: "HackerRank",
      category: "Database",
      color: "from-teal-500 to-cyan-500",
      status: "Completed"
    }
  ];

  const categoryColors = {
    "Database": "bg-green-100 text-green-700",
    "Web Development": "bg-blue-100 text-blue-700",
    "API Testing": "bg-orange-100 text-orange-700",
    "Data Analytics": "bg-yellow-100 text-yellow-700",
    "Cloud Computing": "bg-purple-100 text-purple-700"
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Certificates & Credentials
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and course completions that validate my technical expertise.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 animate-fade-in">
            <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
            <div className="text-gray-600">Total Certificates</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-blue-200 animate-fade-in">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-gray-600">Skill Categories</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-teal-50 to-green-50 border-teal-200 animate-fade-in">
            <div className="text-3xl font-bold text-teal-600 mb-2">100%</div>
            <div className="text-gray-600">Completion Rate</div>
          </Card>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-full text-white`}>
                    <Award size={24} />
                  </div>
                  <Badge 
                    variant="secondary"
                    className={categoryColors[cert.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-700"}
                  >
                    {cert.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-gray-800 leading-tight">
                  {cert.title}
                </CardTitle>
                <p className="text-purple-600 font-medium text-sm">
                  {cert.issuer}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={16} />
                  <span className="text-sm text-gray-600">{cert.status}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-2 hover:bg-purple-50"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Validation */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 border-purple-200 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Skill Validation
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technical Domains</h4>
                <div className="space-y-2">
                  {Object.keys(categoryColors).map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700">MongoDB Database Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700">Postman API Testing Expert</span>             
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700">Power BI Data Visualization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-gray-700">Cloud Computing Fundamentals</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continuous Learning */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Professional Development
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              These certifications represent my commitment to continuous learning and professional 
              development. Each credential validates specific technical skills and demonstrates 
              my dedication to staying current with industry standards and best practices.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
            >
              View All Credentials
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificates;
