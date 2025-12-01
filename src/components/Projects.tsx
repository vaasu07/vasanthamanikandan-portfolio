import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      description:
        "A comprehensive Java-based system implementing OOP principles with CRUD operations and SQL optimization. Enhanced code readability and security through structured database management.",
      technologies: ["Java", "MySQL", "JDBC", "OOP"],
      highlights: [
        "Object-Oriented Programming Implementation",
        "Complete CRUD Operations",
        "SQL Query Optimization",
        "Enhanced Security Practices",
      ],
      github: "https://github.com/vasanthamanikandan/student-management",
      demo: null,
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Exam Seating Arrangement System",
      description:
        "Web-based automated seating allocation system built with MVC architecture. Significantly reduced manual workload through intelligent seat distribution algorithms.",
      technologies: ["JSP", "Servlet", "MySQL", "HTML/CSS", "JavaScript"],
      highlights: [
        "MVC Architecture Implementation",
        "Automated Seating Algorithm",
        "Real-time Seat Allocation",
        "Reduced Manual Workload by 70%",
      ],
      github: "https://github.com/vasanthamanikandan/exam-seating",
      demo: null,
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcase of real-world applications demonstrating technical expertise and problem-solving abilities
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary/50">
                <div className="grid md:grid-cols-5 gap-6 p-6 md:p-8">
                  {/* Left side - Gradient Visual */}
                  <div className="md:col-span-2">
                    <div
                      className={`h-full min-h-[250px] rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <Code className="h-24 w-24 text-white/90 relative z-10" />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Key Highlights:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <Button
                          variant="default"
                          size="sm"
                          asChild
                          className="bg-primary hover:bg-primary/90"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
