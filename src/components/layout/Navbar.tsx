
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/GradientButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dataviz-400 to-dataviz-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
            GA
          </div>
          <span className="text-xl font-semibold">GraficAI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
          >
            FAQ
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <GradientButton>Get Started Free</GradientButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in-fast">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#demo"
                className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-gray-700 hover:text-dataviz-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" size="sm">
                  Login
                </Button>
                <GradientButton>Get Started Free</GradientButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
