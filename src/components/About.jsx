import { useState, useEffect } from 'react';
import { Users, Target, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startValue = 0;
    const endValue = parseInt(value);
    const incrementTime = (duration * 1000) / endValue;
    
    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [value, duration, isVisible]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <span>{count}{value.toString().includes('+') ? '+' : '%'}</span>
  );
};

import PropTypes from 'prop-types';

AnimatedCounter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.number
};

const AboutConsultant = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Clients Served" },
    { number: "30+", label: "Industry Experts" },
    { number: "98", label: "Success Rate" },
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full min-h-screen bg-gradient-to-b from-slate-900 via-black to-slate-800 py-20 relative overflow-hidden"
    >
      {/* Decorative Circles */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute top-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
      ></motion.div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold text-orange-500 mb-4 drop-shadow-lg"
          >
            Empowering Business Excellence
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-white/90"
          >
            With over a years of consulting excellence, we&apos;ve guided businesses through 
            transformative growth, strategic innovation, and sustainable success.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statsVariants}
              whileHover={{ scale: 1.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 text-center border border-white/20 shadow-xl"
              style={{ boxShadow: "0px 20px 60px -20px rgb(59, 130, 246)" }}
            >
              <motion.h3 
                className="text-4xl font-bold text-white mb-2"
              >
                <AnimatedCounter 
                  value={stat.number.replace('+', '')} 
                  duration={2}
                />
              </motion.h3>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Target className="w-12 h-12 text-white" />,
              title: "Strategic Approach",
              description: "We deliver tailored consulting solutions that drive measurable business growth and operational excellence."
            },
            {
              icon: <Award className="w-12 h-12 text-white" />,
              title: "Expert Guidance",
              description: "Our team of industry veterans provides deep insights and practical strategies for sustainable success."
            },
            {
              icon: <Users className="w-12 h-12 text-white" />,
              title: "Client Partnership",
              description: "We build lasting relationships through transparent communication and commitment to your business goals."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3 text-white"
              >
                {value.title}
              </motion.h3>
              <motion.p 
                className="text-white/80"
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          variants={itemVariants}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-lg bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
          >
            Schedule a Consultation
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutConsultant;