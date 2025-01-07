import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Users, 
  Gavel,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const OurServices = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <DollarSign className="w-12 h-12" aria-label="Financial Consultant Icon" />,
      title: "Financial Consultant",
      description: "Optimize your financial strategy and growth",
      features: [
        "Financial Planning",
        "Investment Advisory",
        "Risk Management",
        "Tax Optimization"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="w-12 h-12" aria-label="HR Management Consultant Icon" />,
      title: "HR Management Consultant",
      description: "Enhance your workforce and organizational effectiveness",
      features: [
        "Talent Acquisition",
        "Employee Engagement",
        "Performance Management",
        "HR Compliance"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Gavel className="w-12 h-12" aria-label="Legal Consultant Icon" />,
      title: "Legal Consultant",
      description: "Navigate legal complexities with expert guidance",
      features: [
        "Contract Drafting",
        "Regulatory Compliance",
        "Dispute Resolution",
        "Intellectual Property"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-20 bg-white mt-8"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600"
          >
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`relative overflow-hidden bg-white rounded-xl shadow-2xl p-8 cursor-pointer transition-all duration-300 ${
                activeService === index ? 'ring-2 ring-orange-500' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <motion.div 
                className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 bg-gradient-to-br ${service.color} opacity-10 rounded-full`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 text-gray-800"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-600 inline-flex items-center gap-2 transition-all"
                >
                  Learn More 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Service Details */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-2xl p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${services[activeService].color} text-white mb-6`}
                >
                  {services[activeService].icon}
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold mb-4"
                >
                  {services[activeService].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-6"
                >
                  {services[activeService].description}
                </motion.p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#1A1C43] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
              <div>
                <motion.h4 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-semibold mb-4"
                >
                  Key Features
                </motion.h4>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default OurServices;