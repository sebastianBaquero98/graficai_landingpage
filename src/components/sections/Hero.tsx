
import { ChevronRight, BarChart2, Zap, LineChart } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center space-x-1 bg-dataviz-50 text-dataviz-700 px-3 py-1 rounded-full text-sm font-medium mb-6 animate-pulse-light">
              <Zap size={14} />
              <span>AI-Powered Data Analysis</span>
            </div>
            
            <h1 className="mb-6">
              <span className="block">Professional Data Analysis</span>
              <span className="text-gradient">Without Technical Knowledge</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Upload your Excel data and chat with our AI to create beautiful charts and insightful analysis. It's that simple.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <GradientButton size="lg">
                Try For Free
              </GradientButton>
              <button className="inline-flex items-center justify-center text-dataviz-600 hover:text-dataviz-700 font-medium transition-colors">
                <span>Watch Demo</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dataviz-50 flex items-center justify-center">
                  <BarChart2 size={18} className="text-dataviz-600" />
                </div>
                <span className="text-sm text-gray-600">Easy Chart Creation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-dataviz-50 flex items-center justify-center">
                  <LineChart size={18} className="text-dataviz-600" />
                </div>
                <span className="text-sm text-gray-600">Smart Data Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-dataviz-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-dataviz-200 rounded-full blur-3xl opacity-40"></div>
            
            {/* Dashboard mockup */}
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 animate-float">
              <div className="bg-gray-50 border-b border-gray-100 flex items-center justify-between px-4 py-2">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="w-48 h-4 bg-gray-200 rounded-full"></div>
                <div className="w-6"></div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-6 gap-4">
                  {/* Sidebar */}
                  <div className="col-span-1">
                    <div className="bg-gray-50 rounded-lg p-3 flex flex-col space-y-4">
                      <div className="w-full h-6 bg-dataviz-500 rounded-md"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
                      <div className="w-full h-4 bg-gray-200 rounded-md"></div>
                      <div className="mt-auto w-full h-10 bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="col-span-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="w-40 h-6 bg-gray-200 rounded-md"></div>
                      <div className="w-24 h-8 bg-dataviz-500 rounded-md"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Chart 1 */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                        <div className="mb-2 w-24 h-4 bg-gray-200 rounded-md"></div>
                        <div className="relative h-32">
                          <div className="absolute bottom-0 left-0 w-4 h-16 bg-dataviz-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-6 w-4 h-24 bg-dataviz-400 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-12 w-4 h-20 bg-dataviz-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-18 w-4 h-28 bg-dataviz-400 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-24 w-4 h-12 bg-dataviz-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-30 w-4 h-22 bg-dataviz-400 rounded-t-md"></div>
                        </div>
                      </div>
                      
                      {/* Chart 2 */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                        <div className="mb-2 w-24 h-4 bg-gray-200 rounded-md"></div>
                        <div className="relative h-32 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-8 border-dataviz-500"></div>
                          <div className="absolute w-24 h-24 rounded-full border-8 border-transparent border-t-dataviz-300 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart 3 - Line chart */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                      <div className="mb-2 w-24 h-4 bg-gray-200 rounded-md"></div>
                      <div className="h-40 w-full flex items-end">
                        <svg viewBox="0 0 500 100" className="w-full">
                          <path
                            d="M0,90 C50,80 100,30 150,50 C200,70 250,10 300,20 C350,30 400,90 500,20"
                            fill="none"
                            stroke="#25ab86"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
