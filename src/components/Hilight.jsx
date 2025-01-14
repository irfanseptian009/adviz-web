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

const Highlight = () => {
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
      bgColor: "from-orange-300/50 to-orange-600/50"
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
      bgColor: "from-purple-500/50 to-purple-600/50"
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
      bgColor: "from-green-500/50 to-green-600/50"
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
      bgColor: "from-orange-500/50 to-orange-600/50"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden"
      style={{borderTopLeftRadius:"50px", borderTopRightRadius:"50px"}}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 mt-32 left-0 ml-96 w-96 h-96 bg-blue-800 rounded-full filter blur-md opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 mt-96 bg-orange-500 rounded-full filter blur-md opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-900 rounded-full filter blur-md opacity-60 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-orange-500 drop-shadow-lg">Company Highlight</h2>
          <p className="text-lg text-white/90">
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
              className={`px-6 py-2 rounded-full transition-all backdrop-blur-lg
                ${activeTab === index 
                  ? 'bg-white/20 text-white shadow-lg border border-white/30' 
                  : 'bg-white/10 text-white/90 border border-white/20 hover:bg-white/15'}`}
              style={{
                boxShadow: activeTab === index
                  ? '0px 0px 20px 5px rgba(255, 165, 0, 0.8)'
                  : 'none',
                transition: 'box-shadow 0.3s ease-in-out',
              }}
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
              className="space-y-8 backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${highlights[activeTab].bgColor} backdrop-blur-lg text-white border border-white/20`}
              >
                {highlights[activeTab].icon}
              </motion.div>
              
              <div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold mb-2 text-white"
                >
                  {highlights[activeTab].title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-orange-300 mb-4"
                >
                  {highlights[activeTab].subTitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/80 text-lg leading-relaxed mb-6"
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
                    className="text-center backdrop-blur-lg bg-white/5 p-4 rounded-xl border border-white/10"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-lg bg-white/10 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
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
            className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl border border-white/20"
          >
            <h4 className="text-xl font-semibold mb-6 text-white">Key Achievements</h4>
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
                  className="flex items-center gap-3 backdrop-blur-lg bg-white/5 p-3 rounded-xl border border-white/10"
                >
                  <CheckCircle className="w-5 h-5 text-orange-300 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Highlight;