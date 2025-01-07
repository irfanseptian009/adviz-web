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
      image:
        'https://th.bing.com/th/id/R.da2e546841da40cdcf60061743233500?rik=IeO7Sr%2fkUW54wQ&riu=http%3a%2f%2fwww.venmond.com%2fdemo%2fvendroid%2fimg%2favatar%2fbig.jpg&ehk=JihI5nQ0BOd0W%2bZVhtIWmqwac0NMyRMOV7%2bzryywg%2fg%3d&risl=&pid=ImgRaw&r=0',
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
      image:
        'https://img.freepik.com/premium-vector/people-profile-graphic_24911-21373.jpg',
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
      image:
        'https://th.bing.com/th/id/OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA?rs=1&pid=ImgDetMain',
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
    <section className="w-full py-20 bg-gradient-to-b to-[#f4b071] from-white relative  shadow-xl" style={{borderBottomLeftRadius:"100px",borderBottomRightRadius:"100px"}}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Client Testimonials</h2>
          <p className="text-lg text-gray-600">
            See what our clients have to say about their experience working with us
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-6 -left-6 text-blue-900 opacity-20">
            <Quote size={80} />
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-transform duration-500">
            <div className="flex flex-col items-center">
              {/* Client Image */}
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-50">
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
              <blockquote className="text-xl text-center text-gray-700 mb-8 italic">
                &quot;{testimonials[currentIndex].testimonial}&quot;
              </blockquote>

              {/* Client Info */}
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600">{testimonials[currentIndex].position}</p>
                <p className="text-gray-500">{testimonials[currentIndex].company}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-2">
                {testimonials[currentIndex].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>  {/* Quote Icon */}
          <div className="absolute bottom-10 -right-6 text-blue-900 opacity-20">
            <Quote size={80} />
          </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-6 h-6 text-blue-600" />
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
                      ? 'bg-blue-600 w-4 h-4'
                      : 'bg-gray-300 hover:bg-blue-400'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        </div>

        {/* Consultation Section */}
        <div className="relative container mx-auto px-6 mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-block">
                <h4 className="text-blue-500 text-xl  font-semibold mb-2 flex items-center">
                  FREE CONSULTATION
                  <span className="ml-2 w-12 h-px bg-blue-500"></span>
                </h4>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get Expert Advice for Your Business Growth
              </h2>

              <p className="text-[#A71154] text-lg leading-relaxed">
                Take the first step towards transforming your business. Our expert consultants are ready to provide you with personalized solutions tailored to your needs.
              </p>

             
            </div>

            {/* Right Content (Optional) */}
        
            <div className="hidden lg:block">
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
                    className="flex items-start space-x-4 bg-white bg-opacity-20 p-8 rounded-lg hover:bg-opacity-30 shadow-lg transition-colors"
                  >
                    <div className="bg-white/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  
                ))}
                 
              </div>
              <button className="bg-[#0B0C1D] text-white mt-10 justify-center px-8 w w-full py-5 rounded-lg text-lg font-semibold hover:bg-[#A71154] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center group">
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
