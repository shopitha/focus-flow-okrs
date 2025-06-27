
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderOpen, Github, ExternalLink, Zap, Brain, BarChart3, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: [
        "Dynamic menu with real-time updates",
        "Order customization and tracking system",
        "Integrated chatbot for user support"
      ],
      category: "Web Development",
      githubUrl: "https://github.com/shopitha/food-delivery-website", // Replace with actual repo URL
      demoUrl: "https://shopitha-food-delivery.netlify.app" // Replace with actual demo URL
    },
    {
      title: "Plant Disease Detection",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      technologies: ["Python", "TensorFlow", "CNN"],
      description: [
        "CNN model trained on PlantVillage dataset",
        "Advanced preprocessing for accurate classification",
        "Real-time disease detection and recommendations"
      ],
      category: "Machine Learning",
      githubUrl: "https://github.com/shopitha/plant-disease-detection", // Replace with actual repo URL
      demoUrl: "https://plant-disease-detector.herokuapp.com" // Replace with actual demo URL
    },
    {
      title: "Power BI Dashboards",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      technologies: ["Power BI", "Data Analysis", "Excel"],
      description: [
        "Call Center Dashboard – Call volume, response time, agent performance",
        "PhoneNow Churn Dashboard – Churn analysis and retention indicators",
        "Diversity & Inclusion Report – Gender, age, department representation"
      ],
      category: "Data Analytics",
      githubUrl: "https://github.com/shopitha/powerbi-dashboards", // Replace with actual repo URL
      demoUrl: "https://app.powerbi.com/view?r=your-dashboard-id" // Replace with actual demo URL
    },
    {
      title: "Sentiment Analysis",
      icon: Eye,
      color: "from-purple-500 to-pink-500",
      technologies: ["Flask", "OpenCV", "Hugging Face"],
      description: [
        "Real-time facial emotion detection via webcam",
        "Optimized model for scalable performance",
        "Web-based interface for easy interaction"
      ],
      category: "AI/ML",
      githubUrl: "https://github.com/shopitha/sentiment-analysis", // Replace with actual repo URL
      demoUrl: "https://sentiment-analyzer-flask.herokuapp.com" // Replace with actual demo URL
    }
  ];

  const handleGithubClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank');
  };

  const handleDemoClick = (demoUrl: string) => {
    window.open(demoUrl, '_blank');
  };

  const handleViewAllGithub = () => {
    window.open('https://github.com/shopitha', '_blank'); // Replace with your actual GitHub profile
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, machine learning, and data analytics.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-br ${project.color} rounded-full text-white`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-800 mb-1">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <FolderOpen className="text-gray-400" size={20} />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Description */}
                  <div className="space-y-2">
                    {project.description.map((desc, descIndex) => (
                      <div key={descIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="px-2 py-1 bg-purple-100 text-purple-700 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-gray-50"
                      onClick={() => handleGithubClick(project.githubUrl)}
                    >
                      <Github size={16} />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 hover:bg-blue-50"
                      onClick={() => handleDemoClick(project.demoUrl)}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Project Stats */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 border-purple-200 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Project Portfolio Overview
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">4+</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Tech Categories</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-gray-600">Technologies Used</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              These projects represent my journey in software development, from web applications 
              to machine learning models. Each project has taught me valuable lessons and helped 
              me grow as a developer.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                onClick={handleViewAllGithub}
              >
                <Github className="mr-2" size={20} />
                View All on GitHub
              </Button>
              <Button variant="outline">
                Contact Me for Collaboration
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
