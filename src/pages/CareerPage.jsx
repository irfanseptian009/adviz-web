import { motion } from 'framer-motion';
import { Footer } from '../components';

const CareerPage = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Jakarta, Indonesia",
      type: "Full Time",
      description: "We are looking for an experienced Software Engineer to join our team."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Jakarta, Indonesia",
      type: "Full Time",
      description: "Join our design team to create exceptional user experiences."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Jakarta, Indonesia",
      type: "Full Time",
      description: "Lead the development of our product to the next level."
    }
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b  from-slate-900 via-black to-blue-900 p-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-24 text-center bg-white mt-24 bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg"
        style={{ boxShadow: '0 4px 20px rgba(255, 165, 0, 0.8)' }} 
      >
        <h1 className="text-5xl font-bold text-white mb-6">
          Join Our Team
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Together we will build a brighter future. Find career opportunities that match your passion.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
        >
          View All Positions
        </motion.button>
      </motion.div>

      {/* Job Listings */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Available Positions
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
              style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.8)' }} // Orange shadow
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-300 mb-2">{job.department}</p>
                </div>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{job.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange-300 font-semibold hover:text-orange-400"
                >
                  Apply Now →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-transparent to-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg"
              style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.8)' }} // Orange shadow
            >
              <div className="w-16 h-16 bg-orange-100 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Competitive Compensation</h3>
              <p className="text-gray-300">We offer a competitive compensation package tailored to your experience.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg"
              style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.8)' }} // Orange shadow
            >
              <div className="w-16 h-16 bg-orange-100 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Flexible Work Environment</h3>
              <p className="text-gray-300">Flexible work policies to help you maintain a healthy work-life balance.</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg"
              style={{ boxShadow: '0 4px 15px rgba(255, 165, 0, 0.8)' }} // Orange shadow
            >
              <div className="w-16 h-16 bg-orange-100 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Career Development</h3>
              <p className="text-gray-300">Structured career development programs for your professional growth.</p>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CareerPage;
