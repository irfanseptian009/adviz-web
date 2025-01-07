import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image from '../assets/herro.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Financial Freedom Starts Here",
      subtitle: "Take control of your financial future with our expert guidance",
      buttonText: "Get Started",
      content: "Transform your financial journey today"
    },
    {
      id: 2,
      title: "Smart Investments, Better Returns",
      subtitle: "Discover innovative ways to grow your wealth",
      buttonText: "Learn More",
      content: "Expert financial advice at your fingertips"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen  bg-gradient-to-b from-orange-200 to-white ">
      <div className="absolute inset-0">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="relative h-full flex items-center">
            {/* Content Slider */}
            <div className="w-full">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b -mb-10 from-orange-400 to-white ">
                <div className="relative h-[80vh] md:h-[80vh]">
                  {/* Slides */}
                  <div 
                    className="h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    <div className="absolute inset-0 flex">
                      {slides.map((slide, index) => (
                        <div 
                          key={slide.id}
                          className="w-full h-full flex-shrink-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16"
                        >
                          {/* Text Content */}
                          <div className="w-full md:w-1/2 space-y-6 text-white ">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                              {slide.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-pink-500 opacity-90">
                              {slide.subtitle}
                            </p>
                            <button className="px-8 py-3 bg-[#1A1C43] text-white  rounded-full font-semibold text-lg hover:bg-orange-100 transition-colors">
                              {slide.buttonText}
                            </button>
                          </div>
                          
                          {/* Placeholder for Image */}
                          <div className="w-full md:w-1/2 h-64 md:h-full mt-8 md:mt-0">
                            <div className="w-full h-full  rounded-xl flex items-center justify-center">
                              <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3   hover:bg-white/50 transition-colors"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-8 h-8 font-bold text-white" />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3  hover:bg-white/50 transition-colors"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-8 h-8 font-bold text-white" />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
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