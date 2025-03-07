
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Data Analyst",
    company: "TechCorp Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote: "DataViz AI has completely transformed how I create charts. What used to take me hours now takes minutes. The conversational interface is intuitive and the AI actually understands what I'm asking for!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    company: "Growth Metrics",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote: "As someone with no technical background, I always struggled with data visualization tools. DataViz AI changed everything. I can now create beautiful marketing reports without any help from our data team.",
    rating: 5,
  },
  {
    name: "Jessica Rivera",
    title: "Financial Analyst",
    company: "Capital Investments",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote: "The time savings alone justify the subscription cost. DataViz AI has helped our finance team create consistent reports faster than ever, with better insights than we were getting before.",
    rating: 4,
  },
  {
    name: "David Park",
    title: "Product Manager",
    company: "InnovateTech",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote: "We've replaced three different tools with DataViz AI. The ability to just chat with the AI and get exactly the visualization I need has made our product meetings much more productive and data-driven.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    title: "Operations Manager",
    company: "Logistics Plus",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote: "Our team was spending too much time creating charts and not enough time acting on insights. DataViz AI flipped that ratio completely. Now we're making better decisions faster.",
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, autoplay]);

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our <span className="text-gradient">Users Say</span></h2>
          <p className="text-gray-600 text-lg">
            Thousands of professionals are saving time and creating better
            visualizations with DataViz AI. Here are some of their stories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative animate-fade-in">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-dataviz-600 focus:outline-none focus:ring-2 focus:ring-dataviz-500/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-dataviz-600 focus:outline-none focus:ring-2 focus:ring-dataviz-500/50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="md:w-1/4 flex flex-col items-center md:items-start">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-dataviz-100">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                          <p className="text-sm text-dataviz-600">{testimonial.company}</p>
                          <div className="flex items-center mt-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <blockquote>
                          <p className="text-gray-700 text-lg italic leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-dataviz-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
