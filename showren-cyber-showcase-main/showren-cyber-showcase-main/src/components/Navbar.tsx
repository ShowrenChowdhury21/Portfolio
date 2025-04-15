
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck, Moon, Sun, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // Only track sections on the home page
      if (isHomePage) {
        const sections = ["about", "projects", "certifications", "experience", "skills", "contact"];
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
        
        if (scrollPosition < 100) {
          setActiveSection("home");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const menuItems = isHomePage 
    ? [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
      ] 
    : [
        { name: "Home", href: "/" },
        { name: "Projects", href: "/projects" },
        { name: "Certifications", href: "/certifications" }
      ];

  const navVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-background/30 backdrop-blur-sm'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isHomePage ? (
              <a href="#" className="flex items-center space-x-2">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full ${scrolled ? 'bg-accent/20' : 'bg-accent/10'} blur-sm`}></div>
                  <ShieldCheck className="h-8 w-8 text-accent relative z-10" />
                </div>
                <span className="font-bold text-lg tracking-tight">Showren Chowdhury</span>
              </a>
            ) : (
              <Link to="/" className="flex items-center space-x-2">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full ${scrolled ? 'bg-accent/20' : 'bg-accent/10'} blur-sm`}></div>
                  <ShieldCheck className="h-8 w-8 text-accent relative z-10" />
                </div>
                <span className="font-bold text-lg tracking-tight">Showren Chowdhury</span>
              </Link>
            )}
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeSection === item.name.toLowerCase() ? 'bg-secondary text-accent' : 'hover:bg-secondary/70'}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === item.href ? 'bg-secondary text-accent' : 'hover:bg-secondary/70'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            {isHomePage && (
              <Button 
                variant="default" 
                size="sm" 
                className="ml-2 bg-gradient-to-r from-accent/80 to-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            )}
          </div>

          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary/70 transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto px-4 py-2 space-y-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.href.startsWith('#') ? (
                    <a 
                      href={item.href} 
                      className={`block px-3 py-2 text-base font-medium rounded-md ${activeSection === item.name.toLowerCase() ? 'bg-secondary text-accent' : 'hover:bg-secondary/70'} transition-colors`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className={`block px-3 py-2 text-base font-medium rounded-md ${
                        location.pathname === item.href ? 'bg-secondary text-accent' : 'hover:bg-secondary/70'
                      } transition-colors`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              {isHomePage && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full mt-2 bg-gradient-to-r from-accent/80 to-primary hover:opacity-90 transition-opacity"
                    onClick={toggleMenu}
                    asChild
                  >
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
