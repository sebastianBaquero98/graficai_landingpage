
import { Check, X } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals just getting started",
    features: [
      "10 charts per month",
      "Basic chart types",
      "Excel file upload",
      "Export as PNG",
      "Email support"
    ],
    limitations: [
      "No API access",
      "No team collaboration",
      "No custom branding",
      "Limited chat history",
      "No advanced analysis"
    ],
    cta: "Start Free",
    mostPopular: false,
    delay: "0s"
  },
  {
    name: "Basic",
    price: "$29",
    description: "For professionals and small teams",
    features: [
      "100 charts per month",
      "All chart types",
      "Multiple data sources",
      "Export in all formats",
      "Priority email support",
      "7-day chat history",
      "Basic team sharing"
    ],
    limitations: [
      "Limited API access",
      "No custom branding",
      "Basic analytics only"
    ],
    cta: "Start 7-Day Trial",
    mostPopular: true,
    delay: "0.1s"
  },
  {
    name: "Pro",
    price: "$79",
    description: "For teams with advanced needs",
    features: [
      "Unlimited charts",
      "All chart types",
      "Multiple data sources",
      "Export in all formats",
      "Priority support",
      "30-day chat history",
      "Advanced team sharing",
      "Custom branding",
      "API access",
      "Advanced analytics"
    ],
    limitations: [],
    cta: "Start 7-Day Trial",
    mostPopular: false,
    delay: "0.2s"
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with specific requirements",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom feature development",
      "On-premise installation",
      "SSO & advanced security",
      "Training & onboarding",
      "SLA guarantees",
      "Unlimited everything"
    ],
    limitations: [],
    cta: "Contact Sales",
    mostPopular: false,
    delay: "0.3s"
  }
];

const Pricing = () => {
  const [featureRequest, setFeatureRequest] = useState("");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleFeatureRequest = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feature request submitted:", featureRequest);
    // Here you would typically send this to your backend
    setRequestSubmitted(true);
    // Reset after 3 seconds
    setTimeout(() => {
      setRequestSubmitted(false);
      setFeatureRequest("");
    }, 3000);
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Simple, <span className="text-gradient">Transparent Pricing</span></h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that's right for you. All plans include core features with different limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 animate-fade-in ${
                plan.mostPopular
                  ? "ring-2 ring-dataviz-500 shadow-lg transform hover:-translate-y-1"
                  : "border border-gray-100 shadow-sm hover:shadow-md"
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.mostPopular && (
                <div className="bg-gradient-to-r from-dataviz-600 to-dataviz-500 text-white text-xs font-semibold text-center py-1.5">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-500">/user/month</span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-700 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <Check size={16} className="text-dataviz-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-medium text-sm text-gray-700 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, lIndex) => (
                        <li key={lIndex} className="flex items-start">
                          <X size={16} className="text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-500">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <GradientButton className="w-full" variant={plan.mostPopular ? "default" : "outline"}>
                  {plan.cta}
                </GradientButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">Compare DataViz AI vs Traditional Tools</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Feature</th>
                    <th className="text-center py-3 px-4 font-medium text-dataviz-600">DataViz AI</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-600">Power BI</th>
                    <th className="text-center py-3 px-4 font-medium text-gray-600">Tableau</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">Learning Curve</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">Minimal (minutes)</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Steep (weeks)</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Very Steep (months)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">Technical Knowledge Required</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">None</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Significant</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Extensive</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">Time to Create First Chart</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">1 minute</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">30+ minutes</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">60+ minutes</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">Natural Language Interface</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">Advanced</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Basic</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Limited</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">Automatic Insights</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">Yes</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Limited</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">Limited</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700">Monthly Cost (Basic)</td>
                    <td className="py-3 px-4 text-center text-sm text-dataviz-600 font-medium">$29/user</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">$10-100+/user</td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">$70+/user</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Feature Request Box */}
        <div className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-dataviz-50 to-dataviz-100 p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-semibold mb-4">Need Custom Features?</h3>
          <p className="text-gray-700 mb-6">
            Tell us about your specific data analysis needs or any features you'd like to see. Our team will get back to you with customized solutions.
          </p>
          
          <form onSubmit={handleFeatureRequest} className="space-y-4">
            <Textarea 
              className="w-full p-3 rounded-lg border border-dataviz-200 focus:border-dataviz-500 focus:ring focus:ring-dataviz-200 focus:ring-opacity-50 transition-all resize-none"
              placeholder="Describe the features or data analysis capabilities you need..."
              rows={5}
              value={featureRequest}
              onChange={(e) => setFeatureRequest(e.target.value)}
              required
            />
            
            <div className="flex justify-end">
              <GradientButton 
                type="submit" 
                disabled={requestSubmitted} 
                className="transition-all"
              >
                {requestSubmitted ? "Thank You!" : "Submit Request"}
              </GradientButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
