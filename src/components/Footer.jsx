import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon,] = useState(null);




  return (
    <footer className="relative">
   

      {/* Main Content */}
      <div 
        className="relative container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div  className="space-y-8">
            <div 
              className="flex items-center space-x-4"
            
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl shadow-lg">
                {/* <img src={logo} alt="Company Logo" className="h-12 w-12" /> */}
              </div>
              <h3 className="text-2xl font-bold text-white">PT Adviz Bisnis Solusi</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative solutions and exceptional service. Your success is our commitment.
            </p>

            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "#4267B2" },
                { Icon: Twitter, color: "#1DA1F2" },
                { Icon: Instagram, color: "#E1306C" },
                { Icon: Linkedin, color: "#0077B5" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative group"
                
                >
                  <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  <div 
                    className="relative bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10"
                    style={{
                      backgroundColor: hoveredIcon === index ? social.color : 'transparent',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <social.Icon className="w-5 h-5 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div  className="lg:ml-12">
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Quick Links
              <span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              
              />
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Projects', 'Team', 'Careers', 'Contact Us'].map((item) => (
                <li 
                  key={item}
                
                >
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white">
                    <span className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div >
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Our Services
              <span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            
              />
            </h4>
            <ul className="space-y-4">
              {[
                'Financial Consultant',
                'HR Management',
                'Legal Consultant',
                'Business Strategy',
                'Risk Management',
                'Corporate Planning'
              ].map((service) => (
                <li 
                  key={service}
                
                >
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white">
                    <span className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                      <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div >
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Contact Us
              <span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
              
              />
            </h4>
            <div className="space-y-6">
              {[
                { Icon: MapPin, text: "Arva Building, 4th floor, Cikini Raya Street No. 60, Jakarta Pusat, Provinsi DKI Jakarta" },
                { Icon: Phone, text: "+62 21 1234 5678" },
                { Icon: Mail, text: "contact@adviz.com" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group"
             
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <item.Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="relative border-t border-white/10"
      
      >
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
                  className="text-gray-400 hover:text-white"
               
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