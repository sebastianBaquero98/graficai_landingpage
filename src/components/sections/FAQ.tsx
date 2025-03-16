
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";

const faqs = [
  {
    question: "How does DataViz AI work?",
    answer:
      "DataViz AI uses natural language processing to understand your requests and automatically generate visualizations based on your data. Simply upload your Excel files or connect to your data source, then chat with our AI to create charts, graphs, and data analysis.",
  },
  {
    question: "Do I need to know programming or data science?",
    answer:
      "Not at all! DataViz AI is specifically designed for users without technical knowledge. The conversational interface lets you request visualizations and analysis in plain English. No coding, SQL, or specialized data skills required.",
  },
  {
    question: "What types of data sources can I connect?",
    answer:
      "DataViz AI supports a wide range of data sources including Excel files, CSV files, Google Sheets, database connections (MySQL, PostgreSQL, etc.), and API integrations with popular services like Salesforce, HubSpot, and Google Analytics.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We take data security extremely seriously. All data is encrypted in transit and at rest. We use industry-standard security practices and never share your data with third parties. Enterprise plans include additional security features.",
  },
  {
    question: "Can I export my visualizations?",
    answer:
      "Yes! You can export your visualizations in multiple formats including PNG, PDF, SVG, and interactive HTML. You can also embed charts directly into your websites, presentations, or dashboards with our embedding feature.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-gray-600 text-lg">
            Get answers to common questions about DataViz AI.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 animate-fade-in">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full text-left px-5 py-3 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500/50"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-medium text-gray-900 text-base">{faq.question}</h3>
                  <ChevronDown
                    size={18}
                    className={`text-ocean-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-4 text-gray-600 text-sm">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Our support team is ready to help you with any questions you may have.
            </p>
            <GradientButton>Contact Support</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
