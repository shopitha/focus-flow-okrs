
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and conversations about technology. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-gradient-to-br from-purple-50 to-teal-50 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                  <MessageCircle className="text-purple-600" size={28} />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  I'm currently seeking opportunities in full-stack development and would love to 
                  discuss potential collaborations, internships, or just chat about technology and innovation.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full text-white">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">shopitha2004@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full text-white">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 8610889325</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white/60 rounded-lg backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-br from-teal-500 to-green-500 rounded-full text-white">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Location</p>
                      <p className="text-gray-600">Chennai, Tamil Nadu</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h4 className="font-medium text-gray-800 mb-4">Connect with me on:</h4>
                  <div className="flex gap-4">
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
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Info */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-800 mb-3">Response Time</h4>
                <p className="text-gray-600 text-sm mb-4">
                  I typically respond to messages within 24-48 hours. For urgent matters, 
                  feel free to reach out via phone or LinkedIn.
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Currently available for new opportunities
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 flex items-center gap-3">
                <Send className="text-teal-600" size={28} />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-purple-200 focus:border-purple-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="border-purple-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                    rows={5}
                    className="w-full px-3 py-2 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white transition-all duration-200 hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <Card className="mt-12 bg-gradient-to-r from-purple-50 to-teal-50 border-purple-200 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
              Whether you have a project in mind, want to discuss opportunities, or just want to 
              connect with a fellow tech enthusiast, I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                asChild
              >
                <a href="mailto:shopitha2004@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Email Me Directly
                </a>
              </Button>
              <Button variant="outline">
                Schedule a Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
