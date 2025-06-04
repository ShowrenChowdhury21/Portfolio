import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  logo: string;
  color: string;
  linkText: string;
  link: string;
}

interface CertificationsListProps {
  showAll?: boolean;
  limit?: number;
}

const CertificationsList = ({ showAll = false, limit = 6 }: CertificationsListProps) => {
  const certifications: Certification[] = [
    {
      name: "Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2025",
      logo: "/placeholder.svg",
      color: "from-blue-400 to-blue-600",
      linkText: "View Certificate",
      link: "https://coursera.org/share/0291e19159635bc4568784051f0a8712"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Expected June 2025",
      logo: "/placeholder.svg",
      color: "from-green-400 to-green-600",
      linkText: "In Progress",
      link: ""
    },
    {
      name: "SOC Analyst Path",
      issuer: "Let's Defend",
      date: "2025",
      logo: "/placeholder.svg",
      color: "from-red-400 to-red-600",
      linkText: "View Certificate",
      link: "https://app.letsdefend.io/certificate/show/a40eefce-cdf5-482e-91eb-6ec0ddcf3512"
    },
    {
      name: "Digital Forensics and Incident Response Certification",
      issuer: "Let's Defend",
      date: "2025",
      logo: "/placeholder.svg",
      color: "from-cyan-400 to-cyan-600",
      linkText: "View Certificate",
      link: "https://app.letsdefend.io/certificate/show/75a59eca-2c3e-4414-845c-99577bd08e7e"
    },
    {
      name: "Malware Analysis Path",
      issuer: "Let's Defend",
      date: "2025",
      logo: "/placeholder.svg",
      color: "from-yellow-400 to-yellow-600",
      linkText: "View Certificate",
      link: "https://app.letsdefend.io/certificate/show/a3172fab-50c0-4c88-9e80-f96c5179dd23"
    },
    {
      name: "Information Security Specialist",
      issuer: "Let's Defend",
      date: "2025",
      logo: "/placeholder.svg",
      color: "from-cyan-400 to-cyan-600",
      linkText: "View Certificate",
      link: "https://app.letsdefend.io/certificate/show/85497e6b-4433-4239-bc52-985ceafc2663"
    },
    {
      name: "AWS Certified SysOps Administrator - Associate",
      issuer: "AWS",
      date: "Expected July 2025",
      logo: "/placeholder.svg",
      color: "from-blue-400 to-blue-600",
      linkText: "In Progress",
      link: ""
    },
    {
      name: "SANS GIAC Security Essentials (GSEC)",
      issuer: "SANS Institute",
      date: "Expected 2026",
      logo: "/placeholder.svg",
      color: "from-purple-400 to-purple-600",
      linkText: "Planned",
      link: ""
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      issuer: "ISC²",
      date: "Long-term Goal",
      logo: "/placeholder.svg",
      color: "from-cyan-400 to-cyan-600",
      linkText: "Future Goal",
      link: ""
    }
  ];

  // Display certifications based on showAll flag and limit
  const displayCertifications = showAll ? certifications : certifications.slice(0, limit);

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
    },
    hover: {
      y: -5,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayCertifications.map((cert, index) => (
        <motion.a
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: index * 0.1 }}
          whileHover="hover"
          href={cert.link !== "" ? cert.link : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("flex no-underline")}
          aria-disabled={cert.link === ""}
        >
          <Card className={cn("glass-card border-accent/20 overflow-hidden flex flex-col w-full h-full hover:shadow-lg hover:shadow-accent/10 transition-shadow duration-300", cert.link === "" ? "cursor-default" : "cursor-pointer")}>
            <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
            <CardContent className="p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 mr-4 text-accent transition-colors duration-300" />
                <div>
                  <h3 className="font-bold text-lg">{cert.name}</h3>
                  <Badge variant="secondary" className="mt-1">{cert.issuer}</Badge>
                </div>
              </div>
              <div className="flex items-center text-sm text-white/70 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{cert.date}</span>
              </div>
              {cert.linkText && (
                <div className="mt-auto">
                  {cert.linkText === "In Progress" || cert.linkText === "Planned" || cert.linkText === "Future Goal" ? (
                    <Badge
                      variant={cert.linkText === "In Progress" ? "default" : "outline"}
                      className={cn("w-fit", cert.linkText === "Planned" ? "bg-yellow-700 text-black border-yellow-700" : (cert.linkText === "Future Goal" ? "bg-gray-500 text-white border-gray-500" : ""))}
                    >
                      {cert.linkText}
                    </Badge>
                  ) : (
                    <Badge className="w-fit">
                      {cert.linkText}
                    </Badge>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.a>
      ))}
    </div>
  );
};

export default CertificationsList;
