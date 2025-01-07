import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Globe,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Hilight = () => {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      icon: <Award className="w-14 h-14" />,
      title: "Excellence Recognition",
      subTitle: "Award Winning Company",
      description: "Recognized for outstanding achievement in digital innovation and client satisfaction",
      stats: [
        { number: "50+", label: "Awards Won" },
        { number: "95%", label: "Success Rate" },
        { number: "10+", label: "Years Experience" }
      ],
      bgColor: "from-orange-300 to-orange-600"
    },
    {
      icon: <Users className="w-14 h-14" />,
      title: "Expert Team",
      subTitle: "Dedicated Professionals",
      description: "Our team of experts brings diverse skills and deep industry knowledge",
      stats: [
        { number: "200+", label: "Team Members" },
        { number: "15+", label: "Countries" },
        { number: "24/7", label: "Support" }
      ],
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      icon: <TrendingUp className="w-14 h-14" />,
      title: "Growth & Impact",
      subTitle: "Proven Track Record",
      description: "Consistent growth and measurable impact across diverse industries",
      stats: [
        { number: "500+", label: "Clients" },
        { number: "30M+", label: "Revenue" },
        { number: "40%", label: "YoY Growth" }
      ],
      bgColor: "from-green-500 to-green-600"
    },
    {
      icon: <Globe className="w-14 h-14" />,
      title: "Global Reach",
      subTitle: "International Presence",
      description: "Serving clients worldwide with localized expertise and global standards",
      stats: [
        { number: "25+", label: "Countries" },
        { number: "100+", label: "Partners" },
        { number: "5", label: "Global Offices" }
      ],
      bgColor: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-20  bg-gradient-to-b from-orange-300 to-white "
      style={{borderTopLeftRadius:"50px", borderTopRightRadius:"50px"}}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Company Hilight</h2>
          <p className="text-lg text-gray-600">
            Discover what makes us stand out in the industry
          </p>
        </motion.div>

        {/* Highlight Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {highlights.map((highlight, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all
                ${activeTab === index 
                  ? ' bg-[#0B0C1D] text-white shadow-xl' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
            >
              {highlight.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Highlight Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${highlights[activeTab].bgColor} text-white`}
              >
                {highlights[activeTab].icon}
              </motion.div>
              
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-2"
                >
                  {highlights[activeTab].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-[#EC9B4F] mb-4"
                >
                  {highlights[activeTab].subTitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                >
                  {highlights[activeTab].description}
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-3 gap-6"
              >
                {highlights[activeTab].stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1A1C43] text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          {/* Right Content - Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h4 className="text-xl font-semibold mb-6">Key Achievements</h4>
            <div className="space-y-4">
              {[
                "Industry-leading customer satisfaction rates",
                "Innovative solutions with cutting-edge technology",
                "Sustainable and scalable business practices",
                "Strategic partnerships with global leaders",
                "Continuous investment in R&D",
                "Strong focus on employee development"
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hilight;