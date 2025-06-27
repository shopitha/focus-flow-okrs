
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, GraduationCap, Briefcase, Code, FolderOpen, Award, Trophy, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/education", label: "Education", icon: GraduationCap },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/skills", label: "Skills", icon: Code },
    { path: "/projects", label: "Projects", icon: FolderOpen },
    { path: "/certificates", label: "Certificates", icon: Award },
    { path: "/achievements", label: "Achievements", icon: Trophy },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Shopitha K
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white shadow-lg"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-3 ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-purple-500 to-teal-500 text-white"
                        : "text-gray-700 hover:bg-purple-50"
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
