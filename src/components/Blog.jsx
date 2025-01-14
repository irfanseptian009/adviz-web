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
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg",
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
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg",
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
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg",
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
      image: "https://www.theforage.com/blog/wp-content/uploads/2022/07/finance-careers.jpg",
      tags: ["Strategy", "Growth", "Tech"]
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

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
      className="min-h-screen mt-10 py-16 px-6 md:px-20 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-black " style={{borderBottomLeftRadius:"100px",borderBottomRightRadius:"100px", boxShadow: "0px 20px 60px -20px blue", }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 ml-72 w-96 h-96 bg-slate-500 rounded-full  filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full  filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full  filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center justify-center mb-16"
        >
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4 text-orange-500"
          >
            Latest Insights
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90"
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
          className={`px-6 py-2 rounded-full transition-all backdrop-blur-lg
            ${activeCategory === category 
              ? 'bg-white/20 text-white shadow-lg border border-white/30' 
              : 'bg-white/10 text-white/90 border border-white/20 hover:bg-white/15'}`}
          style={{
            boxShadow: activeCategory === category
              ? '0px 0px 20px 5px rgba(255, 165, 0, 0.8)'
              : 'none',
            transition: 'box-shadow 0.3s ease-in-out',
          }}
        >
          {category}
        </motion.button>
        
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 "
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
                className="backdrop-blur-lg bg-gradient-to-b from-orange-300 via-black to-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all"
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
                    <span className="px-4 py-2 backdrop-blur-md bg-black/30 text-white text-sm rounded-full border border-white/20">
                      {article.category}
                    </span>
                  </motion.div>
                </motion.div>

                {/* Article Content */}
                <div className="p-6">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-xl font-bold mb-3 line-clamp-2 text-white hover:text-white/80 transition-colors"
                  >
                    {article.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/80 mb-4 line-clamp-2"
                  >
                    {article.excerpt}
                  </motion.p>

                  {/* Meta Info */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 text-sm text-white/70 mb-4"
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
                        className="px-3 py-1 backdrop-blur-sm bg-white/5 text-white/90 text-sm rounded-full border border-white/10"
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Read More Link */}
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-2 text-white group"
                  >
                    Read More 
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
            className="backdrop-blur-lg bg-white/10 text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all inline-flex items-center gap-2"
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