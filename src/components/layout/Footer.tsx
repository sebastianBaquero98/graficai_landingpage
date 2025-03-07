
import { Twitter, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dataviz-400 to-dataviz-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                DV
              </div>
              <span className="text-lg font-semibold">DataViz AI</span>
            </div>
            <p className="text-gray-600 text-sm">
              Professional data visualization and analysis powered by AI. No technical knowledge required.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-dataviz-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dataviz-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dataviz-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-dataviz-500 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase text-gray-500 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase text-gray-500 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-dataviz-500" />
                <a href="mailto:info@datavizai.com" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  info@datavizai.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-dataviz-500" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-dataviz-600 text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} DataViz AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
