
import React from "react";
import Navbar from "@/components/Navbar";
import CertificationsList from "@/components/CertificationsList";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const AllCertifications = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="py-20 bg-background relative overflow-hidden pt-24">
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
              <Award className="h-8 w-8 text-accent" />
            </motion.div>
            
            <h1 className="text-4xl font-bold mb-4">All Certifications</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-lg text-white/80">
              A comprehensive list of my professional certifications and ongoing education that 
              validate my expertise and commitment to cybersecurity excellence.
            </p>
          </motion.div>

          <CertificationsList showAll={true} />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AllCertifications;
