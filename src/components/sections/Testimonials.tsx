
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Data Analyst",
    quote: "DataViz AI has completely transformed how I create charts. What used to take me hours now takes minutes!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    quote: "As someone with no technical background, I can now create beautiful marketing reports without any help from our data team.",
    rating: 5,
  },
  {
    name: "Jessica Rivera",
    title: "Financial Analyst",
    quote: "The time savings alone justify the subscription cost. Better insights than we were getting before.",
    rating: 4,
  }
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
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, autoplay]);

  return (
    <section id="testimonials" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">What Our <span className="text-gradient">Users Say</span></h2>
        </div>

        <div className="max-w-3xl mx-auto relative animate-fade-in">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-dataviz-600"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-dataviz-600"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        <div className="flex items-center justify-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={16}
                              className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                          "{testimonial.quote}"
                        </p>
                      </blockquote>
                      <div className="mt-2">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
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
