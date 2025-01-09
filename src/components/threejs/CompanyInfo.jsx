

import { motion } from 'framer-motion';

const CompanyInfo = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        PT ADVIZ BISNIS SOLUSI
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl mb-6 max-w-2xl"
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        Kami menyediakan solusi terbaik untuk kebutuhan bisnis Anda dengan teknologi terkini.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-md shadow-lg transition duration-300"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.href = '#services'}
      >
        Pelajari Lebih Lanjut
      </motion.button>
    </>
  );
};

export default CompanyInfo;
