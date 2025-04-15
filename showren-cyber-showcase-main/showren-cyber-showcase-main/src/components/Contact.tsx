
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-card relative overflow-hidden">
      {/* Animated floating particles */}
      <div className="floating-particle" style={{ width: "65px", height: "65px", top: "25%", right: "25%", opacity: 0.06, animationDuration: "42s" }}></div>
      <div className="floating-particle" style={{ width: "40px", height: "40px", bottom: "30%", left: "15%", opacity: 0.09, animationDuration: "36s" }}></div>
      
      {/* Gradient background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/10 animate-pulse-slow"></div>
      
      {/* Subtle radial pattern overlay */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 20% 30%, rgba(156, 236, 217, 0.15) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(0, 162, 255, 0.1) 0%, transparent 60%)"
      }}></div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="h-8 w-8 text-accent" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-white/80"
            variants={itemVariants}
          >
            Have a security concern or interested in working together? Feel free to reach out through any of these channels.
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/20 h-full hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-lg font-medium mb-2">Email</h4>
                <a 
                  href="mailto:showrenchowdhury21@gmail.com" 
                  className="text-white/70 hover:text-accent transition-colors group"
                >
                  <span className="hover-text-animation">showrenchowdhury21@gmail.com</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/20 h-full hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-lg font-medium mb-2">Phone</h4>
                <a 
                  href="tel:+15147101960" 
                  className="text-white/70 hover:text-accent transition-colors group"
                >
                  <span className="hover-text-animation">+1 (514) 710-1960</span>
                </a>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="glass-card border-accent/20 h-full hover:shadow-accent/10 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-white/70">Canada</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="glass-card border-accent/20 overflow-hidden">
            <CardContent className="p-8 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="text-white/70 mb-6">
                Follow me on social media to stay updated with my latest projects and security research.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ShowrenChowdhury21" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-background/50 hover:bg-accent/20 transition-colors group"
                  aria-label="Github"
                >
                  <Github className="h-5 w-5 group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/showren-chowdhury/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-background/50 hover:bg-accent/20 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors" />
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
