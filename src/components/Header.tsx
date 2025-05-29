
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-maroon-900/95 backdrop-blur-sm border-b border-maroon-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-2xl font-bold text-white">Dhaqaaleeye</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-maroon-100 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-maroon-100 hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="text-maroon-100 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-maroon-100 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-maroon-100 hover:text-white hover:bg-maroon-800">
              Sign In
            </Button>
            <Button className="bg-maroon-600 hover:bg-maroon-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-maroon-800">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-maroon-100 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-maroon-100 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-maroon-100 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-maroon-100 hover:text-white transition-colors">Contact</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-maroon-100 hover:text-white hover:bg-maroon-800 justify-start">
                  Sign In
                </Button>
                <Button className="bg-maroon-600 hover:bg-maroon-700 text-white justify-start">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
