
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import logo from "../assets/adviz_logo.jpeg"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1C43] to-[#2A2C63]"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-lg shadow-lg">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-10 w-10"
                />
              </div>
              <h3 className="text-2xl font-bold text-white leading-tight">PT Adviz Bisnis Solusi</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing innovative solutions and exceptional service since 1999. We&apos;re committed to excellence in everything we do.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12">
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Quick Links
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Projects', 'Team', 'Careers', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="bg-white/10 p-1.5 rounded mr-3 group-hover:bg-white/20 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Our Services
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                'Financial Consultant',
                'HR Management Consultant',
                'Legal Consultant',
                'Business Strategy',
                'Risk Management',
                'Corporate Planning'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="bg-white/10 p-1.5 rounded mr-3 group-hover:bg-white/20 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Contact Us
              <span className="absolute -bottom-3 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h4>
            <div className="space-y-6">
              {[
                { Icon: MapPin, text: "Jl. Example Street No. 123, Jakarta, Indonesia" },
                { Icon: Phone, text: "+62 21 1234 5678" },
                { Icon: Mail, text: "contact@adviz.com" }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-white/10 p-2.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                    <item.Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="text-gray-300 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {currentYear} PT Adviz Bisnis Solusi. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;