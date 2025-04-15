import React from "react";
import { Briefcase, Calendar, GraduationCap, Building, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      position: "Software Engineer II",
      company: "AiTrade INC.",
      location: "Orlando, Florida, US",
      period: "July 2021 - January 2023",
      description: [
        "Designed applications following Agile methodology for high-speed trade executions by securely integrating embedded crypto APIs, improving client satisfaction over six months.",
        "Developed and secured backend infrastructure using Symfony, MySQL, and PostgreSQL, reducing security vulnerabilities by 30% during audits and improving system reliability.",
        "Applied security best practices to harden Docker container images, decreasing vulnerability exposure by 35% and eliminating three critical system bottlenecks.",
        "Implemented secure API communication using RabbitMQ, enhancing data transmission security and improving response time efficiency by 40%.",
        "Got promoted within four months for streamlining team communication, reducing deployment errors by 20%, and maintaining high project delivery standards."
      ],
      skills: ['Symfony', 'MySQL', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Agile', 'API Security', 'Technical Documentation']
    },
    {
      position: "IT Support Internship",
      company: "ACI Group Ltd.",
      location: "Dhaka, Bangladesh",
      period: "March 2021 - June 2021",
      description: [
        "Provided comprehensive technical support to over 200 users across multiple departments, troubleshooting hardware and software issues.",
        "Managed and maintained Active Directory, creating and configuring user accounts, group policies, and security permissions.",
        "Assisted in firewall configuration and monitoring, helping to strengthen network security protocols.",
        "Performed regular system maintenance and updates to ensure optimal performance and security compliance.",
        "Documented technical solutions and created user guides for common IT issues, reducing repeat support requests by 25%."
      ],
      skills: ['Active Directory', 'Firewall Configuration', 'Technical Documentation', 'Technical Support', 'Troubleshooting']
    }
  ];

  const education = [
    {
      degree: "Master of Engineering in Information Systems Security",
      institution: "Concordia University",
      location: "Montreal, Canada",
      period: "2023 - 2025 (Expected)",
      description: "Specializing in advanced cybersecurity practices including penetration testing, malware analysis, and cloud security architecture. Involved in research on AI-assisted threat detection systems.",
      focusAreas: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Cloud Security', 'Quantum Computing', 'OS Security', 'Malware Analysis']
    },
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "American International University-Bangladesh",
      location: "Dhaka, Bangladesh",
      period: "2017 - 2020",
      description: "Graduated with a strong foundation in computer science principles, software development, and systems engineering. Completed coursework in data structures, algorithms, database systems, and computer networks. Participated in multiple programming competitions and collaborative development projects.",
      focusAreas: ['Software Development', 'Data Structures', 'Algorithms', 'Database Systems', 'Computer Networks']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Experience & Education
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-accent mx-auto mb-8"
            variants={itemVariants}
          />
          <motion.p 
            className="max-w-3xl mx-auto text-lg text-white/80"
            variants={itemVariants}
          >
            My professional journey and academic background in the software engineering and cybersecurity fields.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Professional Experience */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-center mb-10"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mr-4 glow-animation">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Professional Experience</h3>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-accent/10"
                >
                  <Card className="glass-card border-accent/20 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-accent">{exp.position}</h4>
                        <div className="flex items-center space-x-1 text-sm text-white/60 mt-1 md:mt-0 whitespace-nowrap">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <Building className="h-4 w-4 mr-2 text-white/70" />
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2 text-white/50">|</span>
                        <MapPin className="h-4 w-4 mr-1 text-white/70" />
                        <span className="text-sm text-white/70">{exp.location}</span>
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 text-white/80">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      
                      {exp.skills && (
                        <div className="mt-5 pt-5 border-t border-white/10">
                          <h5 className="text-accent font-semibold mb-2">Skills Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="px-3 py-1 bg-accent/10 text-accent/90 rounded-full text-sm">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-center mb-10"
              variants={itemVariants}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent/10 mr-4 glow-animation">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-accent before:to-accent/10"
                >
                  <Card className="glass-card border-accent/20 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background/0 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000"></div>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h4 className="text-xl font-bold text-accent">{edu.degree}</h4>
                        <div className="flex items-center space-x-1 text-sm text-white/60 mt-1 md:mt-0 whitespace-nowrap">
                          <Calendar className="h-4 w-4 flex-shrink-0" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center mb-5">
                        <Building className="h-4 w-4 mr-2 text-white/70" />
                        <span className="font-semibold">{edu.institution}</span>
                        <span className="mx-2 text-white/50">|</span>
                        <MapPin className="h-4 w-4 mr-1 text-white/70" />
                        <span className="text-sm text-white/70">{edu.location}</span>
                      </div>
                      
                      <p className="text-white/80">{edu.description}</p>
                      
                      <div className="mt-5 pt-5 border-t border-white/10">
                        <h5 className="text-accent font-semibold mb-2">Key Focus Areas</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.focusAreas.map((area, i) => (
                            <span key={i} className="px-3 py-1 bg-accent/10 text-accent/90 rounded-full text-sm">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;