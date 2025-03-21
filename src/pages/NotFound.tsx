
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GradientButton from "@/components/ui/GradientButton";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ocean-500 text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-white/90 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <GradientButton onClick={() => window.location.href = "/"}>
            <ChevronLeft size={16} className="mr-1" />
            Return to Home
          </GradientButton>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
