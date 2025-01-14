import { useState, useEffect } from 'react';
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Quote,
  PhoneCall,
  Clock,
} from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'CEO at TechCorp',
      company: 'TechCorp Solutions',
      image: 'https://tse3.mm.bing.net/th?id=OIP.tHoXCdncHBSqVXXwJ7FIPwHaE7&pid=Api&P=0&h=220',
      rating: 5,
      testimonial:
        'Working with this company has transformed our business operations completely. Their innovative solutions and dedicated team have helped us achieve remarkable growth.',
      tags: ['Software Development', 'Digital Transformation'],
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Marketing Director',
      company: 'Global Innovations',
      image: 'https://simpleoffer.com/wp-content/uploads/2017/03/testimonial-profile-300x300.png',
      rating: 5,
      testimonial:
        'The level of expertise and professionalism shown by their team is outstanding. They delivered beyond our expectations and continue to provide excellent support.',
      tags: ['Marketing Solutions', 'Customer Service'],
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Future Systems',
      image: 'https://tse3.mm.bing.net/th?id=OIP.iVEKdf_orJAcfuWt2OrzewAAAA&pid=Api&P=0&h=220',
      rating: 5,
      testimonial:
        "Their technical expertise and attention to detail are unmatched. They've been instrumental in our digital transformation journey.",
      tags: ['Technical Support', 'Innovation'],
    },
  ];

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoPlay(false);
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-orange-500">Client Testimonials</h2>
          <p className="text-xl text-white/80">
            See what our clients have to say about their experience working with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Quote Icons */}
          <div className="absolute -top-6 -left-6 text-white/20">
            <Quote size={80} />
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20 transition-all" style={{   boxShadow: "0px 20px 60px -20px orange", }}>
            <div className="flex flex-col items-center">
              {/* Client Image */}
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/30 backdrop-blur-lg">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl text-center text-white mb-8 italic">
                &quot;{testimonials[currentIndex].testimonial}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-200">{testimonials[currentIndex].position}</p>
                <p className="text-white/70">{testimonials[currentIndex].company}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {testimonials[currentIndex].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 backdrop-blur-md bg-white/10 text-white rounded-full text-sm border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all
                    ${currentIndex === index
                      ? 'bg-white w-6'
                      : 'bg-white/30 hover:bg-white/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Consultation Section */}
        <div className="relative container mx-auto px-6 mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-block">
                <h4 className=" text-xl text-orange-500 font-semibold mb-2 flex items-center">
                  FREE CONSULTATION
                  <span className="ml-2 w-12 h-px bg-white/50"></span>
                </h4>
              </div>

              <h2 className="text-4xl md:text-5xl  font-bold leading-tight">
                Get Expert Advice for Your Business Growth
              </h2>

              <p className="text-white/80 text-lg leading-relaxed">
                Take the first step towards transforming your business. Our expert consultants are ready to provide you with personalized solutions tailored to your needs.
              </p>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: PhoneCall,
                    title: 'Direct Contact',
                    desc: 'Speak directly with our expert consultants',
                  },
                  {
                    icon: Clock,
                    title: 'Quick Response',
                    desc: 'Get response within 24 hours',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-lg hover:bg-white/20 transition-all group"
                  >
                    <div className="bg-white/10 p-3 rounded-lg mb-4 inline-block group-hover:bg-white/20 transition-all">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="backdrop-blur-lg bg-white/10 border border-white/20 text-white w-full py-5 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center group">
                Get a free consultation now!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;