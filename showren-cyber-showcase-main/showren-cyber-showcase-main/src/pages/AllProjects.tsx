
import React from "react";
import Navbar from "@/components/Navbar";
import ProjectsList from "@/components/ProjectsList";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const AllProjects = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="py-20 bg-card relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <motion.div 
          className="container px-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 }}
              className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
            >
              <Shield className="h-8 w-8 text-accent" />
            </motion.div>
            
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              A complete collection of my cybersecurity projects, research, and implementations
              showcasing my technical expertise and problem-solving abilities.
            </p>
          </motion.div>

          <ProjectsList showAll={true} />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProjects;
