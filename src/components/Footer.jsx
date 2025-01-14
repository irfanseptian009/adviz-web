import { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <footer className="relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative container mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-xl shadow-lg">
                {/* <img src={logo} alt="Company Logo" className="h-12 w-12" /> */}
              </div>
              <h3 className="text-2xl font-bold text-white">PT Adviz Bisnis Solusi</h3>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through innovative solutions and exceptional service since 1999. Your success is our commitment.
            </p>

            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: "#4267B2" },
                { Icon: Twitter, color: "#1DA1F2" },
                { Icon: Instagram, color: "#E1306C" },
                { Icon: Linkedin, color: "#0077B5" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredIcon(index)}
                  onHoverEnd={() => setHoveredIcon(null)}
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
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:ml-12">
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Quick Links
              <motion.span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </h4>
            <ul className="space-y-4">
              {['About Us', 'Our Services', 'Projects', 'Team', 'Careers', 'Contact Us'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white">
                    <span className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Our Services
              <motion.span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
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
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="group flex items-center text-gray-300 hover:text-white">
                    <span className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-blue-500/30 transition-all duration-300">
                      <ExternalLink className="w-3 h-3 group-hover:rotate-45 transition-transform" />
                    </span>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-bold text-white mb-8 relative">
              Contact Us
              <motion.span 
                className="absolute -bottom-3 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </h4>
            <div className="space-y-6">
              {[
                { Icon: MapPin, text: "Jl. Example Street No. 123, Jakarta, Indonesia" },
                { Icon: Phone, text: "+62 21 1234 5678" },
                { Icon: Mail, text: "contact@adviz.com" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                    <div className="relative bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 group-hover:bg-blue-500/30 transition-colors duration-300">
                      <item.Icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-300 pt-2">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative border-t border-white/10"
        variants={itemVariants}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {currentYear} PT Adviz Bisnis Solusi. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;