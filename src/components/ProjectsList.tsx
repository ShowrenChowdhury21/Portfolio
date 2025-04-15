
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
      title: "Oracle Padding Attack on RSA",
      description: "Conducted a simulation of the Oracle Padding Attack on cryptographic implementations, identifying three major flaws in the system architecture.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=500",
      tags: ["Cryptography", "RSA", "Security Analysis", "Vulnerability Assessment"],
      githubUrl: "https://github.com/ashiq4321/INSE6120-Fall2023-Project-Group5",
      period: "April 2024",
      color: "from-purple-500/20 to-pink-400/20"
    },
    {
      title: "Secure API Implementation with RabbitMQ",
      description: "Implemented secure API communication using RabbitMQ, enhancing data transmission security and improving response time efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=500",
      tags: ["API Security", "RabbitMQ", "System Architecture", "Performance Optimization"],
      githubUrl: "https://github.com/ShowrenChowdhury21",
      period: "2022",
      color: "from-green-500/20 to-emerald-400/20"
    },
    {
      title: "Intrusion Detection System with ML",
      description: "Built a custom IDS using machine learning algorithms to identify and classify abnormal network behaviors with 92% accuracy.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=500",
      tags: ["Machine Learning", "Network Security", "Python", "Data Analysis"],
      githubUrl: "https://github.com/ShowrenChowdhury21",
      period: "2023",
      color: "from-red-500/20 to-orange-400/20"
    },
    {
      title: "Blockchain Security Analysis Framework",
      description: "Developed a framework for analyzing security vulnerabilities in smart contracts and blockchain implementations.",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=500",
      tags: ["Blockchain", "Smart Contracts", "Security Analysis", "Ethereum"],
      githubUrl: "https://github.com/ShowrenChowdhury21",
      period: "2023",
      color: "from-yellow-500/20 to-amber-400/20"
    },
    {
      title: "Cloud Security Posture Management Tool",
      description: "Created an automated tool for assessing and managing security posture across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=500",
      tags: ["Cloud Security", "AWS", "Azure", "Automation"],
      githubUrl: "https://github.com/ShowrenChowdhury21",
      period: "2024",
      color: "from-sky-500/20 to-blue-400/20"
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
