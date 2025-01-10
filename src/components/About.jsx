import { useState, useEffect } from 'react';
import { Users, Target, Award, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

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

const AboutCompany = () => {
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
      scale: 1.05,
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
    { number: "10+", label: "Years Experience" },
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Team Experts" },
    { number: "99", label: "Client Satisfaction" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gradient-to-b py-10 from-white to-[#ffcd9e] shadow-xl"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Transforming Ideas Into Digital Reality
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-[#A71154]"
          >
            With over a decade of excellence, we&apos;ve been at the forefront of digital innovation, 
            helping businesses achieve their technological aspirations.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.h3 
                className="text-4xl font-bold text-[#A71154] mb-2"
              >
                <AnimatedCounter 
                  value={stat.number.replace('+', '')} 
                  duration={2}
                />
              </motion.h3>
              <p className="text-[#A71154]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Values */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: <Target className="w-12 h-12 text-[#A71154]" />,
              title: "Our Mission",
              description: "To deliver innovative digital solutions that empower businesses to thrive in the modern era."
            },
            {
              icon: <Award className="w-12 h-12 text-[#A71154]" />,
              title: "Our Vision",
              description: "To become the global leader in digital transformation, setting new standards of excellence and innovation."
            },
            {
              icon: <Users className="w-12 h-12 text-[#A71154]" />,
              title: "Our Values",
              description: "Integrity, innovation, collaboration, and commitment to delivering exceptional results for our clients."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-orange-100 p-8 rounded-xl shadow-xl transition-all"
            >
              <motion.div 
                className="mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.6 }}
              >
                {value.icon}
              </motion.div>
              <motion.h3 
                className="text-xl font-bold mb-3"
              >
                {value.title}
              </motion.h3>
              <motion.p 
                className="text-[#A71154]"
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1C43] text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            Learn More About Us
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

export default AboutCompany;