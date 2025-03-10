
import { useState } from "react";
import { Send, User, Bot, BarChart2, LineChart, PieChart, Download } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const demoChats = [
  {
    message: "Show me a bar chart of monthly sales for 2023",
    type: "user",
  },
  {
    message: "Here's your bar chart showing monthly sales for 2023. The highest sales were in December, followed by November and October. Would you like me to analyze any specific trends?",
    type: "ai",
    chart: "bar",
  },
  {
    message: "Can you show me the trend line for this data?",
    type: "user",
  },
  {
    message: "I've added a trend line to your sales data. There's a clear upward trend throughout the year with seasonal peaks in Q2 and Q4. Sales grew by approximately 15% from January to December.",
    type: "ai",
    chart: "line",
  },
  {
    message: "Show me a breakdown of sales by product category",
    type: "user",
  },
  {
    message: "Here's a pie chart showing the breakdown of sales by product category. Electronics represents 42% of total sales, followed by Clothing at 28%, Home Goods at 18%, and Other at 12%.",
    type: "ai",
    chart: "pie",
  },
];

const Demo = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatHistory, setChatHistory] = useState(demoChats);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setChatHistory([
      ...chatHistory,
      {
        message: inputValue,
        type: "user",
      },
    ]);

    // Clear input
    setInputValue("");

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          message: "I've analyzed your request and created a customized visualization. The data shows interesting patterns that might be valuable for your analysis. Would you like me to explain any specific aspects of this chart?",
          type: "ai",
          chart: "bar",
        },
      ]);
    }, 1000);
  };

  const renderChart = (type: string) => {
    switch (type) {
      case "bar":
        return (
          <div className="mt-3 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-medium">Monthly Sales (2023)</h4>
              <button className="text-gray-500 hover:text-dataviz-600">
                <Download size={16} />
              </button>
            </div>
            <div className="h-48 flex items-end space-x-2 pb-6 border-b border-gray-200">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = 20 + Math.random() * 80;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gradient-to-t from-dataviz-500 to-dataviz-400 rounded-t"
                      style={{ height: `${height}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">
                      {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][i]}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "line":
        return (
          <div className="mt-3 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-medium">Sales Trend (2023)</h4>
              <button className="text-gray-500 hover:text-dataviz-600">
                <Download size={16} />
              </button>
            </div>
            <div className="h-48 relative">
              <svg viewBox="0 0 500 200" className="w-full h-full">
                <path
                  d="M0,180 C20,140 40,120 60,150 C80,180 100,120 120,100 C140,80 160,90 180,80 C200,70 220,50 240,60 C260,70 280,90 300,80 C320,70 340,40 360,30 C380,20 400,30 420,20 C440,10 460,20 480,10 L480,200 L0,200 Z"
                  fill="url(#gradient)"
                  fillOpacity="0.2"
                  stroke="none"
                />
                <path
                  d="M0,180 C20,140 40,120 60,150 C80,180 100,120 120,100 C140,80 160,90 180,80 C200,70 220,50 240,60 C260,70 280,90 300,80 C320,70 340,40 360,30 C380,20 400,30 420,20 C440,10 460,20 480,10"
                  fill="none"
                  stroke="#25ab86"
                  strokeWidth="3"
                />
                <path
                  d="M0,180 L480,20"
                  stroke="#25ab86"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.5"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#25ab86" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#25ab86" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );
      case "pie":
        return (
          <div className="mt-3 bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-sm font-medium">Sales by Category</h4>
              <button className="text-gray-500 hover:text-dataviz-600">
                <Download size={16} />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-36 h-36 relative">
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#25ab86"
                    strokeWidth="20"
                    strokeDasharray="251.2 251.2"
                    strokeDashoffset="0"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#42c49f"
                    strokeWidth="20"
                    strokeDasharray="251.2 251.2"
                    strokeDashoffset="105.5"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#79dcbe"
                    strokeWidth="20"
                    strokeDasharray="251.2 251.2"
                    strokeDashoffset="176.3"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#aeebd7"
                    strokeWidth="20"
                    strokeDasharray="251.2 251.2"
                    strokeDashoffset="221.1"
                  />
                </svg>
              </div>
              <div className="ml-4 space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dataviz-600 rounded-sm mr-2"></div>
                  <span className="text-xs">Electronics (42%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dataviz-500 rounded-sm mr-2"></div>
                  <span className="text-xs">Clothing (28%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dataviz-400 rounded-sm mr-2"></div>
                  <span className="text-xs">Home Goods (18%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-dataviz-200 rounded-sm mr-2"></div>
                  <span className="text-xs">Other (12%)</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Interactive <span className="text-gradient">Chat Demo</span></h2>
          <p className="text-gray-600 text-lg">
            Try our interactive demo below to see how simple it is to create beautiful data visualizations with GraficAI.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 bg-gray-50 px-4 py-3 flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="mx-auto text-sm font-medium text-gray-500">GraficAI Chat</div>
              <div className="w-9"></div>
            </div>
            
            <div className="h-96 px-4 py-4 overflow-y-auto">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`mb-4 ${chat.type === "user" ? "text-right" : "text-left"}`}>
                  <div className={`inline-flex ${chat.type === "user" ? "flex-row-reverse" : ""} items-start max-w-[80%]`}>
                    <div className={`flex-shrink-0 ${chat.type === "user" ? "ml-2" : "mr-2"}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        chat.type === "user" ? "bg-dataviz-100 text-dataviz-600" : "bg-dataviz-600 text-white"
                      }`}>
                        {chat.type === "user" ? <User size={16} /> : <Bot size={16} />}
                      </div>
                    </div>
                    <div className={`${
                      chat.type === "user"
                        ? "bg-dataviz-100 text-gray-800"
                        : "bg-white border border-gray-200 text-gray-700"
                    } p-3 rounded-lg shadow-sm`}>
                      <p>{chat.message}</p>
                      
                      {chat.chart && renderChart(chat.chart)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-100 p-4">
              <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask for a chart or analysis..."
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dataviz-500/50"
                />
                <button
                  type="submit"
                  className="p-2 bg-dataviz-500 text-white rounded-lg hover:bg-dataviz-600 transition-colors focus:outline-none focus:ring-2 focus:ring-dataviz-500/50"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <GradientButton>
              Try the Full Demo
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
