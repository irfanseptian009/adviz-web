

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Footer } from '../components';

const FeedbackPage = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form data
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: '',
      });
    }, 2000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      {/* Hero Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-24 text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Value Your Feedback
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Share your thoughts and experiences to help us improve our services.
        </p>
      </motion.div>

      {/* Feedback Form */}
      <div className="max-w-4xl mx-auto bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl p-8">
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="email">
                Business Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                placeholder="you@company.com"
              />
            </div>
          </div>

          {/* Feedback Details */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="feedback">
              Your Feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              required
              rows={4}
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
              placeholder="Describe your experience..."
            ></textarea>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="rating">
              Rating
            </label>
            <select
              name="rating"
              id="rating"
              required
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-slate-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            >
              <option value="" disabled>Select your rating</option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
            </select>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={formStatus !== 'idle'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 
              ${
                formStatus === 'idle'
                  ? 'bg-orange-500 hover:bg-orange-600'
                  : formStatus === 'submitting'
                  ? 'bg-orange-300 cursor-not-allowed'
                  : 'bg-green-500'
              } 
              transition-colors`}
          >
            {formStatus === 'idle' && (
              <>
                <Send className="w-5 h-5" />
                <span>Submit Feedback</span>
              </>
            )}
            {formStatus === 'submitting' && (
              <span>Submitting...</span>
            )}
            {formStatus === 'success' && (
              <>
                <CheckCircle className="w-5 h-5" />
                <span>Feedback Submitted</span>
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {formStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center text-green-400"
          >
            <CheckCircle className="w-6 h-6 mr-2" />
            <span>Your feedback has been successfully submitted. Thank you!</span>
          </motion.div>
        )}
      </div>

      {/* Additional Information */}
      <div className="max-w-4xl mx-auto mt-16">
        <motion.div
          className="bg-slate-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Why Your Feedback Matters</h2>
          <p className="text-gray-300">
            At [Your Company Name], we continuously strive to improve our services and offerings. Your insights and experiences are invaluable in helping us achieve this goal. Whether it&apos;s about our consulting processes, communication, or overall experience, we appreciate your honest feedback.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeedbackPage;
