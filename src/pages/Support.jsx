// ./components/Support.jsx

import { motion } from 'framer-motion';
import { Search, MessageCircle, Phone, Clock, CheckCircle2 } from 'lucide-react';
import { Footer } from '../components';

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-blue-900 p-6 relative overflow-hidden text-white">
      {/* Background Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-orange-500/30 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      ></motion.div>
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto text-center py-12 mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How Can We Help You?
        </h1>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          Our expert team is here to support your business growth journey.
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input 
            type="text"
            placeholder="Search for help articles..."
            className="w-full py-3 pl-12 pr-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </motion.div>

      {/* Quick Support Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="container mx-auto grid md:grid-cols-3 gap-8 mb-16"
      >
        {supportOptions.map((option, index) => (
          <motion.div
            key={index}
            className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all shadow-lg"
            style={{ boxShadow: "0px 20px 60px -20px orange" }} // Orange shadow
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-orange-400 mb-4">
              {option.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {option.title}
            </h3>
            <p className="text-white/70 mb-4">
              {option.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-orange-500 hover:text-orange-300 font-medium"
            >
              Learn more →
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      {/* Common Questions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="container mx-auto mb-16"
      >
        <div className="backdrop-blur-lg bg-white/10 rounded-xl p-8 border border-white/20 shadow-lg" style={{ boxShadow: "0px 20px 60px -20px orange" }}>
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-orange-500 pl-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-white/70">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="container mx-auto text-center"
      >
        <div className="backdrop-blur-lg bg-white/10 rounded-xl p-8 border border-white/20 shadow-lg" style={{ boxShadow: "0px 20px 60px -20px orange" }}>
          <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
          <p className="text-white/70 mb-8">Our support team is available 24/7.</p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              Start Chat
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2 backdrop-blur-lg transition-colors"
            >
              <Phone size={20} />
              Call Us
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}

const supportOptions = [
  {
    icon: <MessageCircle size={32} />,
    title: "Business Strategy",
    description: "Get expert guidance on developing and implementing effective business strategies."
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Market Analysis",
    description: "Comprehensive market research and competitive analysis for your business."
  },
  {
    icon: <Clock size={32} />,
    title: "Growth Planning",
    description: "Strategic planning for sustainable business growth and expansion."
  }
];

const faqItems = [
  {
    question: "How can I schedule a consultation?",
    answer: "You can schedule a consultation through our online booking system or by contacting our support team."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in technology, retail, healthcare, and manufacturing sectors, with expertise across various business models."
  },
  {
    question: "How long does a typical consultation take?",
    answer: "Initial consultations typically last 60-90 minutes, with follow-up sessions tailored to your needs."
  },
  {
    question: "What's included in the business analysis?",
    answer: "Our business analysis includes market research, competitor analysis, SWOT analysis, and growth opportunities."
  }
];
