
import React from "react";
import { Button } from "@/components/ui/button";
import CertificationsList from "@/components/CertificationsList";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background animated-bg relative overflow-hidden">
      <div className="floating-particle" style={{ width: "70px", height: "70px", top: "30%", left: "15%", opacity: 0.07, animationDuration: "45s" }}></div>
      <div className="floating-particle" style={{ width: "55px", height: "55px", bottom: "20%", right: "8%", opacity: 0.1, animationDuration: "38s", animationDirection: "alternate" }}></div>
      
      <div className="container px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Certifications & Professional Development</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Professional certifications and ongoing education that validate my expertise and commitment to cybersecurity excellence.
          </p>
        </motion.div>

        <CertificationsList showAll={false} limit={6} />

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="group relative overflow-hidden"
            asChild
          >
            <Link to="/certifications">
              <span className="relative z-10">View All Certifications</span>
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
