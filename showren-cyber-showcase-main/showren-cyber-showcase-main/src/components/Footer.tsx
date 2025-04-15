
import React, { useEffect, useRef } from "react";
import { Shield, Mail, Linkedin, Github, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const resizeObserver = new ResizeObserver(() => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    });
    
    resizeObserver.observe(document.body);
    
    // Grid animation
    const gridSize = 30;
    const dots: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const numDots = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.25
      });
    }
    
    const drawGrid = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(62, 142, 208, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw and update dots
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(62, 142, 208, ${dot.opacity})`;
        ctx.fill();
        
        dot.y -= dot.speed;
        if (dot.y < -10) {
          dot.y = canvas.height + 10;
          dot.x = Math.random() * canvas.width;
        }
      });
    };
    
    const animationInterval = setInterval(drawGrid, 30);
    
    return () => {
      clearInterval(animationInterval);
      resizeObserver.disconnect();
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
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
  
  const iconVariants = {
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-t from-background to-background/95 border-t border-accent/10 py-12 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full opacity-20" />
      </div>
      
      <motion.div 
        className="container px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col md:flex-row justify-between items-center" variants={containerVariants}>
          <motion.div 
            className="flex items-center mb-6 md:mb-0 group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-full blur-sm group-hover:blur-md transition-all"></div>
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                <Shield className="h-6 w-6 text-accent mr-2 relative" />
              </motion.div>
            </div>
            <span className="font-bold text-lg">Showren Chowdhury</span>
          </motion.div>
          
          <motion.div 
            className="text-center md:text-left mb-6 md:mb-0"
            variants={itemVariants}
          >
            <p className="text-white/70 text-sm mb-4">
              Montreal, Quebec, Canada • +1-514-710-1960
            </p>
            <div className="flex space-x-6 justify-center md:justify-start">
              <motion.a 
                href="mailto:showrenchowdhury21@gmail.com" 
                className="text-white/60 hover:text-accent transition-all duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </div>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/showren-chowdhury" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-accent transition-all duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </motion.a>
              <motion.a 
                href="https://github.com/ShowrenChowdhury21" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-accent transition-all duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </motion.a>
              <motion.a 
                href="tel:+15147101960" 
                className="text-white/60 hover:text-accent transition-all duration-300"
                variants={iconVariants}
                whileHover="hover"
              >
                <div className="relative p-2 rounded-full hover:bg-accent/10 transition-colors">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </div>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-white/60 text-sm group"
            variants={itemVariants}
          >
            © {currentYear} <span className="group-hover:text-accent transition-colors">Showren Chowdhury</span>
            <div className="text-xs mt-1 flex items-center justify-center">
              <ExternalLink className="h-3 w-3 mr-1" />
              <span>All rights reserved</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
