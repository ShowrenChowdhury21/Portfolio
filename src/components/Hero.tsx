import React, { useEffect, useState } from "react";
import { Shield, ChevronDown, MapPin, Mail, Linkedin, Code, BriefcaseBusiness, Lock, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to manage loading for animations
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null); // Canvas state
  const [isCVDropdownOpen, setIsCVDropdownOpen] = useState(false); // State for CV dropdown

  // Toggle CV dropdown
  const toggleCVDropdown = () => {
    setIsCVDropdownOpen(!isCVDropdownOpen);
  };

  // Handle CV download
  const handleCVDownload = (type: string) => {
    let fileUrl = '';
    
    // Set the file URL based on the selected CV type
    if (type === 'IT Support') {
      fileUrl = '/resumes/showren_chowdhury_it_support.pdf';
    } else if (type === 'Cybersecurity Analyst') {
      fileUrl = '/resumes/showren_chowdhury_cybersecurity.pdf';
    }
    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', `Showren_Chowdhury_${type.replace(/\s+/g, '_')}_Resume.pdf`);
    link.setAttribute('target', '_blank'); // In case download fails, open in new tab
    
    // Append to the document, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsCVDropdownOpen(false); // Close dropdown after selection
  };

  useEffect(() => {
    setIsLoaded(true);

    if (canvas) {
      const ctx = canvas.getContext('2d'); // Get 2D rendering context
      if (!ctx) return; // Exit if context is not available

      // Set canvas dimensions to match window size
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const resizeObserver = new ResizeObserver(() => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      resizeObserver.observe(document.body);

      // Characters for the matrix effect
      const characters = "10ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]:;?><,./-=".split("");
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = [];
      const colors = ['#0ea5e9', '#06b6d4', '#3b82f6', '#10b981'];

      for (let i = 0; i < columns; i++) { // Initialize drops array
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize); // Start drops from above the canvas
      }
      
      const drawMatrix = () => {
        if (!ctx) return;
        ctx.fillStyle = "rgba(13, 27, 42, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < drops.length; i++) {
          const text = characters[Math.floor(Math.random() * characters.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          ctx.fillStyle = color;
          ctx.font = `${fontSize}px monospace`;
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          drops[i]++;
        } // Increment drop position
      };
      
      const matrixInterval = setInterval(drawMatrix, 60);

      return () => {
        clearInterval(matrixInterval);
        resizeObserver.disconnect();
      };
    }
  }, [canvas]); // Effect runs when canvas is set

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Stagger child animations
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  // Floating particles setup with more density and visual appeal
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 8 + 2,
    duration: Math.random() * 10 + 10,
    color: Math.random() > 0.5 ? 'accent' : 'primary'
  }));

  // Typing effect component
  const TypingText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    }, [index, text]);

    return (
      <span className="gradient-text animate-pulse-slow">{displayedText}</span>
    );
  };


  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-16">      
      <canvas ref={setCanvas} className="absolute inset-0 z-0 opacity-70" />
      
      {/* Enhanced animated particles with glowing effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-${particle.color}/20 backdrop-blur-sm shadow-lg shadow-${particle.color}/20`}
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.1, 0.9, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Enhanced gradient overlay with more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background z-10"></div>
      
      {/* Digital circuit pattern overlay for a tech feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5 z-5"></div>
      
      <motion.div 
        className="container relative z-20 px-4"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Role cards with enhanced styling */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.div 
              className="inline-flex items-center px-5 py-3 rounded-xl border-2 border-accent/30 bg-gradient-to-r from-background/80 to-accent/5 backdrop-blur-md shadow-lg shadow-accent/5 hover:shadow-accent/10 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Shield className="h-5 w-5 text-accent mr-2" />
              <span className="text-sm font-medium">Cybersecurity Analyst</span>              
            </motion.div>
            
            <motion.div
              className="inline-flex items-center px-5 py-3 rounded-xl border-2 border-primary/30 bg-gradient-to-r from-background/80 to-primary/5 backdrop-blur-md shadow-lg shadow-primary/5 hover:shadow-primary/10 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <BriefcaseBusiness className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">IT Analyst & Support</span>
            </motion.div>
            
            <motion.div
              className="inline-flex items-center px-5 py-3 rounded-xl border-2 border-blue-400/30 bg-gradient-to-r from-background/80 to-blue-400/5 backdrop-blur-md shadow-lg shadow-blue-400/5 hover:shadow-blue-400/10 hover:scale-105 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Lock className="h-5 w-5 text-blue-400 mr-2" />              
              <span className="text-sm font-medium">Security Engineer</span>
            </motion.div>
          </div>

          <motion.h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold mb-6 py-2" variants={itemVariants}>            
              <TypingText text="Showren Chowdhury" />
          </motion.h1>
            
        <motion.p className="text-xl md:text-2xl mb-8 text-white/90 font-light" variants={itemVariants}>
          Securing digital assets through advanced threat detection and proactive defense strategies supporting IT infrastructure.
        </motion.p>



          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-white/80 text-sm mb-10"
            variants={itemVariants}
          >
            <div className="flex items-center hover:text-accent transition-colors group">
              <MapPin className="h-4 w-4 mr-1 group-hover:text-accent transition-colors" />
              <span>Canada</span>
            </div>
            <div className="flex items-center hover:text-accent transition-colors group">
              <Mail className="h-4 w-4 mr-1 group-hover:text-accent transition-colors" />
              <span>showrenchowdhury21@gmail.com</span>
            </div>
            <div className="flex items-center hover:text-accent transition-colors group">
              <Linkedin className="h-4 w-4 mr-1 group-hover:text-accent transition-colors" />
              <a href="https://www.linkedin.com/in/showren-chowdhury/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </motion.div>

        {/* Buttons */}
        <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="font-medium relative overflow-hidden group bg-gradient-to-r from-accent/80 to-primary/80 border-0 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300" 
              asChild              
            >
              <a href="#projects">
                <Code className="mr-2 h-5 w-5" />
                <span className="relative z-10">View My Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary/80 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-medium border-2 border-accent/50 relative overflow-hidden group hover:shadow-lg hover:shadow-accent/10 transition-all duration-300" 
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
            </Button>            
            
            {/* CV Download Button with Dropdown */}
            <div className="relative inline-block">
              <Button 
                size="lg" 
                variant="secondary" 
                className="font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                onClick={toggleCVDropdown}
              >
                <FileText className="mr-2 h-5 w-5" />
                <span className="relative z-10">Download Resume</span>
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isCVDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Button>
              
              {/* CV Dropdown Menu */}
              {isCVDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl overflow-hidden z-50 border border-primary/20 shadow-lg shadow-primary/10">
                  <div className="bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-lg">
                    <button 
                      className="w-full text-left px-4 py-3 hover:bg-accent/10 transition-colors flex items-center space-x-2"
                      onClick={() => handleCVDownload('Cybersecurity Analyst')}
                    >
                      <Shield className="h-5 w-5 text-accent/80" />
                      <span>Cybersecurity Analyst</span>
                    </button>
                    <button 
                      className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors flex items-center space-x-2 border-b border-primary/10"
                      onClick={() => handleCVDownload('IT Support')}
                    >
                      <BriefcaseBusiness className="h-5 w-5 text-primary/80" />
                      <span>IT Support</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2,
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <a 
            href="#about" 
            className="text-white/60 hover:text-white transition-colors flex flex-col items-center"
            aria-label="Scroll down"
          >
            <span className="text-xs mb-2 opacity-80">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </div>  
  );
};

export default Hero;
