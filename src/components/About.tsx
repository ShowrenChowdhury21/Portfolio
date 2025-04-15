
import React from "react";
import { Shield, Lock, Search, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: "Threat Detection & Analysis",
      description: "Comprehensive security monitoring and incident response utilizing SIEM, IDS/IPS for early threat detection."
    },
    {
      icon: <Search className="h-10 w-10 text-accent" />,
      title: "Malware Investigation",
      description: "Advanced malware analysis using YARA and machine learning to enhance detection of zero-day threats."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-accent" />,
      title: "Security Hardening",
      description: "Implementation of NIST and CIS benchmarks to strengthen system security and ensure compliance."
    },
    {
      icon: <Lock className="h-10 w-10 text-accent" />,
      title: "Network Security",
      description: "Network traffic monitoring and analysis using Wireshark and Zeek for enhanced threat intelligence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background animated-bg relative overflow-hidden">
      <div className="floating-particle" style={{ width: "50px", height: "50px", top: "10%", left: "5%", opacity: 0.1, animationDuration: "25s" }}></div>
      <div className="floating-particle" style={{ width: "80px", height: "80px", top: "60%", right: "10%", opacity: 0.05, animationDuration: "30s" }}></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            I'm a dedicated Cybersecurity Analyst currently pursuing a Master of Engineering in Information Systems Security 
            at Concordia University. With experience in security threat analysis, system monitoring, malware investigation, 
            and incident response, I'm passionate about implementing robust security solutions and staying ahead of emerging threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass-card animate-fadeInUp animate-delay-200 border-accent/20">
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="p-3 rounded-full bg-accent/10 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
