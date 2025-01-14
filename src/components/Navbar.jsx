import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/AdvizFull.png";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navLinks = [
    {
      id: "about",
      title: "About Us",
      dropdownItems: [
        { id: "team", title: "Our Team" },
        { id: "vision", title: "Our Vision" },
        { id: "mission", title: "Our Mission" },
      ],
    },
    {
      id: "work",
      title: "Work",
      dropdownItems: [
        { id: "projects", title: "Projects" },
        { id: "clients", title: "Clients" },
        { id: "case-studies", title: "Case Studies" },
      ],
    },
    {
      id: "contact",
      title: "Contact",
      dropdownItems: [
        { id: "support", title: "Support" },
        { id: "sales", title: "Sales Inquiry" },
        { id: "feedback", title: "Feedback" },
      ],
    },
    {
      id: "career",
      title: "Career",
      dropdownItems: [
        { id: "jobs", title: "Current Openings" },
        { id: "internship", title: "Internship" },
        { id: "culture", title: "Company Culture" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: {
      y: -50,
      opacity: 35,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`w-full flex items-center py-3 fixed top-0 z-20 px-5 lg:px-16 ${
        scrolled
          ? "opacity-30 backdrop-blur-[8px] border-2 border-white/20"
          : "opacity-30 backdrop-blur-[8px] text-black"
      } transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-full mx-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm lg:text-xl md:text-base font-extrabold text-[#EC9B4F] cursor-pointer flex"
          >
            <img src={logo} alt="Adviz Logo" width={100} height={100} />
          </motion.p>
        </motion.button>

        <ul className="hidden sm:flex md:flex flex-row gap-10 text-white">
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredItem(nav.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                whileHover={{ y: -2 }}
                className={`${
                  active === nav.title ? "text-[#EC9B4F]" : "text-bg-[#1A1C43]"
                } hover:text-[#EC9B4F] text-lg font-medium cursor-pointer flex items-center gap-1 transition-colors duration-200 relative`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`} className="relative">
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                </a>
                {nav.dropdownItems && (
                  <motion.div
                    animate={hoveredItem === nav.id ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={14} />
                  </motion.div>
                )}
              </motion.div>

              <AnimatePresence>
                {nav.dropdownItems && hoveredItem === nav.id && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 w-48 mt-2 rounded-lg overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {nav.dropdownItems.map((item, itemIndex) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                        className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200 relative group"
                        onClick={() => {
                          setActive(item.title);
                          setHoveredItem(null);
                        }}
                      >
                        {item.title}
                      
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <div className="flex sm:hidden md:hidden flex-1 justify-end items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-400 hover:text-white transition-colors duration-200"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </motion.button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={mobileMenuVariants}
                className="p-6 fixed top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl"
                style={{
                  background: "rgba(15, 23, 42, 0.8)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <ul className="flex flex-col gap-4 items-start">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative w-full group"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`font-medium cursor-pointer text-base ${
                          active === nav.title ? "text-[#EC9B4F]" : "text-white"
                        } transition-colors duration-200 relative`}
                        onClick={() => {
                          if (!nav.dropdownItems) {
                            setToggle(!toggle);
                            setActive(nav.title);
                          }
                        }}
                      >
                        <a href={`#${nav.id}`} className="relative">
                          {nav.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                        {nav.dropdownItems && <ChevronDown size={14} className="inline ml-2" />}
                      </motion.div>
                      <AnimatePresence>
                        {nav.dropdownItems && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 mt-2 space-y-2 overflow-hidden"
                          >
                            {nav.dropdownItems.map((item, itemIndex) => (
                              <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05 }}
                                className="group"
                              >
                                <motion.a
                                  whileHover={{ x: 5 }}
                                  href={`#${item.id}`}
                                  className="text-sm text-gray-400 hover:text-[#EC9B4F] block transition-colors duration-200 relative"
                                  onClick={() => {
                                    setToggle(!toggle);
                                    setActive(item.title);
                                  }}
                                >
                                  {item.title}
                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                                </motion.a>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;