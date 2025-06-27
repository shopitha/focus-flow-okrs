
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Tool, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "C Programming", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-teal-500",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Tool,
      color: "from-teal-500 to-green-500",
      skills: [
        { name: "GitHub", level: 90 },
        { name: "Figma", level: 80 },
        { name: "PowerBI", level: 85 },
        { name: "Excel", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "from-green-500 to-purple-500",
      skills: [
        { name: "TensorFlow", level: 70 },
        { name: "Flask", level: 75 },
        { name: "OpenCV", level: 65 },
        { name: "Hugging Face", level: 60 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-orange-500";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-full text-white`}>
                      <Icon size={24} />
                    </div>
                    <CardTitle className="text-xl text-gray-800">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className={`${getProgressColor(skill.level)} text-white border-0`}
                        >
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Highlights */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 border-purple-200 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Technical Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">4+</div>
                <div className="text-gray-600">Programming Languages</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">6+</div>
                <div className="text-gray-600">Web Technologies</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-teal-600">8+</div>
                <div className="text-gray-600">Tools & Platforms</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <Card className="mt-8 bg-white/80 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My skill set reflects hands-on experience through academic projects, internships, 
              and personal development initiatives. I'm always eager to explore new technologies 
              and improve my existing skills.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
