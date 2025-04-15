
import React from "react";
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProjectsList from "@/components/ProjectsList";
import { Link } from "react-router-dom";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-card animated-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="floating-particle" style={{ width: "60px", height: "60px", top: "20%", right: "15%", opacity: 0.1, animationDuration: "40s", animationDirection: "reverse" }}></div>
      <div className="floating-particle" style={{ width: "40px", height: "40px", bottom: "15%", left: "10%", opacity: 0.08, animationDuration: "35s" }}></div>
      
      <motion.div 
        className="container px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
          >
            <Shield className="h-8 w-8 text-accent"/>
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Explore my recent cybersecurity projects, research, and implementations that demonstrate 
            my technical expertise and problem-solving abilities. 
          </p>
        </motion.div>

        <ProjectsList showAll={false} />

        <motion.div 
          className="text-center mt-12"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.4 } }
          }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden"
            asChild
          >
            <Link to="/projects">
              <span className="relative z-10">View All Projects</span>
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
