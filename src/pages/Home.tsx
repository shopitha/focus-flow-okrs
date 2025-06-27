
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-scale-in">
            SK
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Shopitha K
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate and driven B.Tech IT student with hands-on experience in 
            <span className="text-purple-600 font-semibold"> front-end development</span>, 
            <span className="text-blue-600 font-semibold"> data analysis</span>, and 
            <span className="text-teal-600 font-semibold"> AI-powered applications</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">Full Stack Developer</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">B.Tech IT Student</Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm">Chennai, Tamil Nadu</Badge>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-purple-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="text-purple-500" size={20} />
                  <span>shopitha2004@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="text-blue-500" size={20} />
                  <span>+91 8610889325</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="text-teal-500" size={20} />
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-purple-100">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-blue-600" size={20} />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="text-gray-700" size={20} />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-8 py-3 transition-all duration-200 hover:scale-105 shadow-lg"
            asChild
          >
            <Link to="/projects">
              View My Work
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-purple-300 hover:bg-purple-50 transition-all duration-200 hover:scale-105"
            asChild
          >
            <Link to="/contact">
              <Mail size={20} className="mr-2" />
              Contact Me
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-2 border-teal-300 hover:bg-teal-50 transition-all duration-200 hover:scale-105"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
