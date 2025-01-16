import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/AdvizFull.png";
import { NavLink} from "react-router"; 

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);


 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const navLinks = [
    {
      id: "about",
      title: "About Us",
      // path: "/about",
      dropdownItems: [
        { id: "team", title: "Our Team", path: "/ourteam" },
        { id: "vision", title: "Our Vision", path: "vision" },
        { id: "mission", title: "Our Mission", path: "mission" },
      ],
    },
    {
      id: "work",
      title: "Work",
      // path: "/work",
      dropdownItems: [
        { id: "projects", title: "Projects", path: "/projects" },
        { id: "clients", title: "Clients", path: "/work/clients" },
      
      ],
    },
    {
      id: "contact",
      title: "Contact",
      // path: "/contact",
      dropdownItems: [
        { id: "support", title: "Support", path: "/support" },
        { id: "sales", title: "Sales Inquiry", path: "/sales" },
        { id: "feedback", title: "Feedback", path: "/feedback" },
      ],
    },
    {
      id: "career",
      title: "Career",
      // path: "/career",
      dropdownItems: [
        { id: "current-openings", title: "Current Openings", path: "/career/current-openings" },
        { id: "culture", title: "Company Culture", path: "/career/culture" },
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
      opacity: 0.35,
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2"
        >
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setToggle(false);
            }}
          >
            <motion.img
              src={logo}
              alt="Adviz Logo"
              width={100}
              height={100}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </NavLink>
        </motion.div>

        {/* Menu Utama */}
        <ul className="hidden sm:flex md:flex flex-row gap-10 text-slate-300 font-serif">
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
                className="text-lg font-medium cursor-pointer flex items-center gap-1 transition-colors duration-200 relative"
              >
                <NavLink
                  to={nav.path}
                  className={({ isActive }) =>
                    `relative ${
                      isActive ? "text-[#ffffff]" : "text-[#f4f4f6]"
                    } hover:text-[#EC9B4F]`
                  }
                  onClick={() => {
                    setToggle(false);
                    setHoveredItem(null);
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                >
                  {nav.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
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
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIndex * 0.05 }}
                      >
                        <NavLink
                          to={item.path}
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors duration-200 relative group"
                          onClick={() => {
                            setToggle(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll ke atas saat klik
                          }}
                        >
                          {item.title}
                        </NavLink>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        {/* Menu Mobile */}
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
                        className="font-medium cursor-pointer text-base transition-colors duration-200 relative"
                      >
                        <NavLink
                          to={nav.path}
                          className={({ isActive }) =>
                            `relative w-full block ${
                              isActive ? "text-[#EC9B4F]" : "text-white"
                            } hover:text-[#EC9B4F]`
                          }
                          onClick={() => setToggle(false)}
                        >
                          {nav.title}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
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
                                <NavLink
                                  to={item.path}
                                  className="text-sm text-gray-400 hover:text-[#EC9B4F] block transition-colors duration-200 relative"
                                  onClick={() => setToggle(false)}
                                >
                                  {item.title}
                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EC9B4F] transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
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
