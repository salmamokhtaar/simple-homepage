
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-maroon-950 text-maroon-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-maroon-400 to-maroon-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-2xl font-bold text-white">Dhaqaaleeye</span>
            </div>
            <p className="text-maroon-300 leading-relaxed">
              Empowering individuals and families to take control of their financial future 
              through intelligent expense tracking and budget management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-maroon-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-maroon-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-maroon-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-maroon-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-maroon-300 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-maroon-800 mt-12 pt-8 text-center">
          <p className="text-maroon-400">
            © 2024 Dhaqaaleeye. All rights reserved. Built with ❤️ for financial wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
