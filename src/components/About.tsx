import React from "react";
import { Shield, Lock, Search, AlertTriangle, Server, Activity, Wifi, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const services = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Threat Detection & Analysis",
      description: "Comprehensive security monitoring and incident response utilizing SIEM, IDS/IPS for early threat detection."
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: "Malware Investigation",
      description: "Advanced malware analysis using YARA and machine learning to enhance detection of zero-day threats."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: "Security Hardening",
      description: "Implementation of NIST and CIS benchmarks to strengthen system security and ensure compliance."
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Network Security",
      description: "Network traffic monitoring and analysis using Wireshark and Zeek for enhanced threat intelligence."
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "IT Support",
      description: "End-to-end technical support including hardware troubleshooting, software configuration, and system optimization."
    },
    {
      icon: <Activity className="h-10 w-10 text-primary" />,
      title: "Network Monitoring",
      description: "Proactive network performance monitoring using advanced tools to ensure optimal uptime and reliability."
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
            I'm a dedicated Cybersecurity Analyst pursued a Master of Engineering in Information Systems Security 
            at Concordia University. With experience in security threat analysis, system monitoring, malware investigation, 
            and incident response, I'm passionate about implementing robust security solutions and staying ahead of emerging threats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card animate-fadeInUp animate-delay-200 border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="flex flex-col items-center text-center p-6 relative">
                <div className="p-3 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">{service.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
