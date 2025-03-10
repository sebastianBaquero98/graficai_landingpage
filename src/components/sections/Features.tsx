
import { LineChart, Database, MessagesSquare, Clock, Coins, Zap, BarChart2, PieChart } from "lucide-react";

const features = [
  {
    icon: <Database size={24} />,
    title: "Excel Integration",
    description: "Connect your Excel files or databases in seconds with our simple upload interface.",
    delay: "0s",
  },
  {
    icon: <MessagesSquare size={24} />,
    title: "Chat Interface",
    description: "Ask for charts and analysis in plain language. No complex query languages needed.",
    delay: "0.1s",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Beautiful Charts",
    description: "Create professional-looking charts and graphs with automatic styling and formatting.",
    delay: "0.2s",
  },
  {
    icon: <LineChart size={24} />,
    title: "Trend Analysis",
    description: "Automatically identify trends and patterns in your data with AI-powered analysis.",
    delay: "0.3s",
  },
  {
    icon: <PieChart size={24} />,
    title: "Custom Visualizations",
    description: "Generate the perfect visualization for your specific data needs with simple prompts.",
    delay: "0.4s",
  },
  {
    icon: <Clock size={24} />,
    title: "Time Saving",
    description: "Reduce chart creation time from hours to seconds with our intuitive AI interface.",
    delay: "0.5s",
  },
  {
    icon: <Coins size={24} />,
    title: "Cost Effective",
    description: "Save on expensive data analysts and specialized software with our all-in-one platform.",
    delay: "0.6s",
  },
  {
    icon: <Zap size={24} />,
    title: "Real-Time Updates",
    description: "Connect live data sources for dashboards that update automatically in real-time.",
    delay: "0.7s",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">See <span className="text-gradient">How It Works</span></h2>
          <p className="text-gray-600 text-lg">
            Experience the simplicity of our conversational interface. Just chat with our AI and watch as it creates beautiful data visualizations for you.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Powerful Features, <span className="text-gradient">Simple Interface</span></h2>
          <p className="text-gray-600 text-lg">
            DataViz AI combines powerful data analysis capabilities with an
            incredibly simple user experience. No technical skills required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className="feature-icon-container mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

