
import { ChevronRight, BarChart2, Zap, LineChart } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-ocean-600 to-ocean-700 text-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center space-x-1 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium mb-6 animate-pulse-light">
              <Zap size={14} />
              <span>AI-Powered Data Analysis</span>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-white">Professional Data Analysis</span>
              <span className="bg-gradient-to-r from-white to-dataviz-300 bg-clip-text text-transparent">Without Technical Knowledge</span>
            </h1>
            
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Upload your Excel data and chat with our AI to create beautiful charts and insightful analysis. It's that simple.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <GradientButton size="lg" className="bg-gradient-to-r from-white to-dataviz-300 text-ocean-700 hover:from-white hover:to-dataviz-400">
                Try For Free
              </GradientButton>
              <button className="inline-flex items-center justify-center text-white hover:text-dataviz-300 font-medium transition-colors">
                <span>Watch Demo</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <BarChart2 size={18} className="text-white" />
                </div>
                <span className="text-sm text-white/90">Easy Chart Creation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <LineChart size={18} className="text-white" />
                </div>
                <span className="text-sm text-white/90">Smart Data Analysis</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-dataviz-400/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-40"></div>
            
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
                      <div className="w-full h-6 bg-ocean-500 rounded-md"></div>
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
                      <div className="w-24 h-8 bg-ocean-500 rounded-md"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {/* Chart 1 */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                        <div className="mb-2 w-24 h-4 bg-gray-200 rounded-md"></div>
                        <div className="relative h-32">
                          <div className="absolute bottom-0 left-0 w-4 h-16 bg-ocean-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-6 w-4 h-24 bg-ocean-400 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-12 w-4 h-20 bg-ocean-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-18 w-4 h-28 bg-ocean-400 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-24 w-4 h-12 bg-ocean-500 rounded-t-md"></div>
                          <div className="absolute bottom-0 left-30 w-4 h-22 bg-ocean-400 rounded-t-md"></div>
                        </div>
                      </div>
                      
                      {/* Chart 2 */}
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-3">
                        <div className="mb-2 w-24 h-4 bg-gray-200 rounded-md"></div>
                        <div className="relative h-32 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full border-8 border-dataviz-500"></div>
                          <div className="absolute w-24 h-24 rounded-full border-8 border-transparent border-t-ocean-500 rotate-45"></div>
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
                            stroke="#0ea5e9"
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
      
      {/* Stats section with green gradient */}
      <div className="w-full py-16 bg-gradient-to-r from-ocean-400 via-dataviz-500 to-dataviz-400 mt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-8 md:mb-0 md:mr-8 max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Data Into Insights With GraficAI</h2>
              <p className="text-white/90 text-lg">
                Our AI-powered platform makes data visualization accessible to everyone. No coding required, just upload your data and start asking questions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 max-w-md w-full">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-white/80">Data Visualizations</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-white/80">Customer Satisfaction</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">10x</div>
                <div className="text-white/80">Faster Analysis</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/80">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
