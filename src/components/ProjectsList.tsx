
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  period: string;
  color: string;
}

interface ProjectsListProps {
  showAll?: boolean;
}

const ProjectsList = ({ showAll = false }: ProjectsListProps) => {
  const projects: Project[] = [
    {
      title: "Enhanced YARA with ML for Advanced Malware Detection",
      description: "Strengthened zero-day malware detection accuracy by 30% using a YARA-based machine learning model and leveraged advanced behavioral analysis.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500",
      tags: ["Machine Learning", "YARA", "Malware Detection", "Threat Analysis"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Enhanced_Yara_with_ML",
      period: "April 2025",
      color: "from-blue-500/20 to-cyan-400/20"
    },
    {
      title: "Building a Malware Analysis Lab & Analyzing Static & Dynamic Malware",
      description: "We have tried to build a malware analysis lab to examine static and dynamic malware samples. Analyzed file behaviour, strings, API calls, and registry changes using tools like PEiD, Ghidra, Procmon, and Wireshark. The goal was to understand malware functionality and indicators of compromise.",
      image: "https://img.freepik.com/free-photo/hacked-unprotected-system-dark-background-3d-illustration_1419-2813.jpg",
      tags: ["Malware", "Detection", "Threat Analysis", "Cybersecurity"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Building-a-Malware-Analysis-Lab-and-Analyzing-Static-and-Dynamic-Malware",
      period: "May 2025",
      color: "from-red-500/20 to-orange-400/20"
    },
    {
      title: "Oracle Padding Attack on RSA",
      description: "Conducted a simulation of the Oracle Padding Attack on cryptographic implementations, identifying three major flaws in the system architecture.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      tags: ["Cryptography", "RSA", "Security Analysis", "Vulnerability Assessment"],
      githubUrl: "https://github.com/ashiq4321/INSE6120-Fall2023-Project-Group5",
      period: "April 2024",
      color: "from-purple-500/20 to-pink-400/20"
    },
    {
      title: "Analyzing & Investigating Web Attacks",
      description: "This project showcases my hands-on investigation of web-based attacks via LetsDefend’s SOC Analyst path. It covers HTTP log analysis, detection of threats like command injection, alert triage, and incident handling using SIEM tools and threat intelligence techniques.",
      image: "https://img.freepik.com/free-photo/cybersecurity-concept-collage-design_23-2151877154.jpg?t=st=1748093530~exp=1748097130~hmac=779b90459ab29fde67873d373203d1a3d0e4d96323ca982441d5df1292d787a6&w=2000",
      tags: ["Web Attacks", "Cybersecurity", "Security Analysi", "Threat Analysis"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Analyzing-and-Investigating-Web-Attacks",
      period: "May 2025",
      color: "from-green-500/20 to-emerald-400/20"
    },
    {
      title: "Quantum Computing in recent era of cryptography",
      description: "Quantum computing threatens current cryptographic systems by breaking algorithms based on factoring and discrete logs. This paper explores quantum attacks, assesses post-quantum cryptography (e.g., lattice-based), and urges collaboration for secure migration to quantum-resistant standards.",
      image: "https://img.freepik.com/free-photo/ai-powered-device-concept_23-2151924113.jpg?t=st=1748093563~exp=1748097163~hmac=5b55fd7fedf2062740e12cf09e0111e534f3ec260f8c059578c270cf281c6174&w=2000",
      tags: ["Quantum Computing", "cryptography", "Recent Development", "Cybersecurity"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Quantum-Computing-in-recent-era-of-cryptography",
      period: "November 2024",
      color: "from-yellow-500/20 to-amber-400/20"
    },
    {
      title: "Honeypot Deployment in Smart Grid for enhanced security",
      description: "Smart grids increase cyber risks in systems like SCADA and IoT. Honeypots, as deception tools, detect threats and profile attackers. This study explores their types, challenges, and AI-based advances, supporting their integration into standards like NIST CSF and IEC 62351.",
      image: "https://img.freepik.com/free-photo/dropbox-icon-line-icon-connection-circuit-board_1379-896.jpg?t=st=1748093602~exp=1748097202~hmac=9435f325ed5bdf7501ee197b4bbeacc79c3f1bccdffb347b8bca3805d898ab4e&w=2000",
      tags: ["Honeypot Deployment", "Smart Grid", "Cloud", "Security"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Honeypot-deployment-in-Smart-Grid-for-enhanced-security",
      period: "April 2025",
      color: "from-sky-500/20 to-blue-400/20"
    },
    {
      title: "Face recognition using pre trained inception model using transfer learning",
      description: "In this project, we will be using a pre-trained inception model inspired by Googles FaceNet to create a face recognition model that trains on custom dataset. This project was done for my university course Computer Vision and Pattern recognition.",
      image: "https://img.freepik.com/free-photo/facial-recognition-software_52683-104208.jpg?t=st=1748093694~exp=1748097294~hmac=1bffdfc5a58a168a9f79e9681baa0cf72d988fb31eb02627df51ce0e4254880e&w=2000",
      tags: ["Transfer learning", "Face recognition", "Google FaceNet", "Deep Learning"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Face-recognition-using-pre-trained-inception-model-transfer-learning-",
      period: "2020",
      color: "from-blue-500/20 to-cyan-400/20"
    },
    {
      title: "Building a SOC LAB at Home",
      description: "We have tried to built a SOC lab at home to simulate real-world cybersecurity operations. Deployed tools like SIEM, IDS, and EDR for threat detection and response. Configured virtual machines to generate logs and tested attack scenarios to practice log analysis, alert triage, and incident handling.",
      image: "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150165975.jpg",
      tags: ["SOC analysis", "Cybersecurity", "Threat Analysis", "Blue Team"],
      githubUrl: "https://github.com/ShowrenChowdhury21/Building-a-SOC-LAB-at-Home",
      period: "2020",
      color: "from-yellow-500/20 to-amber-400/20"
    },
    {
      title: "Secure API Implementation with RabbitMQ and Docker",
      description: "Implemented secure API communication using RabbitMQ, enhancing data transmission security and improving response time efficiency by 40% using Docker.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      tags: ["API Security", "RabbitMQ", "System Architecture", "Docker"],
      githubUrl: "https://github.com/ShowrenChowdhury21",
      period: "2022",
      color: "from-purple-500/20 to-pink-400/20"
    }
  ];

  // Display only the first 3 projects if not showing all
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {displayProjects.map((project, index) => (
        <motion.div 
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="flex"
        >
          <Card className={`overflow-hidden border-accent/20 flex flex-col w-full bg-gradient-to-br ${project.color} bg-opacity-5 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 shadow-md shadow-accent/10`}>
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500"
                style={{height: "200px"}}
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <CardHeader className="absolute bottom-0 left-0 w-full p-4 flex-none">
                <CardTitle className="text-xl font-bold text-white group">
                  <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    {project.title}
                  </span>
                </CardTitle>
              </CardHeader>
            </div>

            <CardContent className="flex-grow p-4">
              <CardDescription className="text-white/70 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    whileHover={{ scale: 1.1, backgroundColor: "#4ade80", color: "#121212" }}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-accent/30 text-white/80 bg-background/50 hover:bg-accent/20"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex-none mt-auto p-4">
              <Button variant="secondary" size="sm" className="w-full justify-center hover:bg-emerald-400 hover:text-black" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="h-4 w-4 mr-2" />
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectsList;
