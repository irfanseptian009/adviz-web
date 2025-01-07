import { useState } from 'react';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Technology', 'Innovation', 'Business', 'Development'];

  const articles = [
    {
      id: 1,
      title: "The Future of Digital Transformation in 2025",
      excerpt: "Explore how digital transformation is reshaping businesses and what to expect in the coming years...",
      category: "Technology",
      author: "John Anderson",
      date: "Jan 15, 2025",
      readTime: "5 min read",
      image: "https://www.jetorbit.com/blog/wp-content/uploads/2019/05/8-Situs-Penyedia-Gambar-Gratis-Untuk-Blog-1-1-1-1-1.jpg",
      tags: ["Digital", "Innovation", "Future"]
    },
    {
      id: 2,
      title: "Building Scalable Solutions for Enterprise",
      excerpt: "Learn about the best practices in creating scalable solutions that meet enterprise needs...",
      category: "Development",
      author: "Sarah Johnson",
      date: "Jan 10, 2025",
      readTime: "8 min read",
      image: "https://www.jetorbit.com/blog/wp-content/uploads/2019/05/8-Situs-Penyedia-Gambar-Gratis-Untuk-Blog-1-1-1-1-1.jpg",
      tags: ["Enterprise", "Scaling", "Solutions"]
    },
    {
      id: 3,
      title: "Innovation in AI: Latest Trends",
      excerpt: "Discover the latest trends in artificial intelligence and how they're impacting businesses...",
      category: "Innovation",
      author: "Michael Chen",
      date: "Jan 5, 2025",
      readTime: "6 min read",
      image: "https://www.jetorbit.com/blog/wp-content/uploads/2019/05/8-Situs-Penyedia-Gambar-Gratis-Untuk-Blog-1-1-1-1-1.jpg",
      tags: ["AI", "Technology", "Trends"]
    },
    {
      id: 4,
      title: "Strategic Business Growth Through Technology",
      excerpt: "Understanding how technology can drive business growth and strategic advantages...",
      category: "Business",
      author: "Emily Parker",
      date: "Jan 1, 2025",
      readTime: "7 min read",
      image: "https://www.jetorbit.com/blog/wp-content/uploads/2019/05/8-Situs-Penyedia-Gambar-Gratis-Untuk-Blog-1-1-1-1-1.jpg",
      tags: ["Strategy", "Growth", "Tech"]
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  // Animation variants
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
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="py-16 bg-gray-50 mb-10 px-20 shadow-2xl"
      style={{borderBottomLeftRadius:"100px",borderBottomRightRadius:"100px"}}
    >
      <div className="container">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center justify-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Latest Insights
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Stay updated with our latest articles, news, and industry insights
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full transition-all
                ${activeCategory === category 
                  ? 'bg-[#1A1C43] text-white shadow-lg' 
                  : 'bg-white shadow-lg text-gray-600 hover:bg-gray-50'}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="wait">
            {filteredArticles.map((article) => (
              <motion.article 
                key={article.id}
                layout
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
              >
                {/* Article Image */}
                <motion.div 
                  className="relative h-48 overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="px-4 py-2 bg-[#1A1C43] text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Article Content */}
                <div className="p-6">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-xl font-bold mb-3 line-clamp-2 hover:text-blue-600"
                  >
                    {article.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 mb-4 line-clamp-2"
                  >
                    {article.excerpt}
                  </motion.p>

                  {/* Meta Info */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 text-sm text-gray-500 mb-4"
                  >
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {article.readTime}
                    </div>
                  </motion.div>

                  {/* Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {article.tags.map((tag, index) => (
                      <motion.span 
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Read More Link */}
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-2 text-blue-600"
                  >
                    Read More <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1C43] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
          >
            View All Articles
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogSection;