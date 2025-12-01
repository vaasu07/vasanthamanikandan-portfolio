import { motion } from "framer-motion";
import { Code2, Database, Layout, GitBranch } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java (Core)", "Oracle SQL", "SQL", "HTML", "CSS", "JavaScript"],
      highlight: true,
    },
    {
      icon: Layout,
      title: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "JSP/Servlet", "Responsive Design", "VBCS"],
      highlight: true,
    },
    {
      icon: Database,
      title: "Core Concepts & Platforms",
      skills: ["Object-Oriented Programming", "DBMS", "Data Structures", "MVC Architecture", "VBCS (Visual Builder Cloud Service)"],
    },
    {
      icon: GitBranch,
      title: "Tools & Technologies",
      skills: ["Eclipse IDE", "VS Code", "GitHub", "MySQL", "Oracle DB", "ReactJS"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive expertise in modern development technologies and best practices
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className={`p-6 h-full transition-all duration-300 relative overflow-hidden group ${
                  category.highlight ? "border-2 border-primary/50 bg-card" : "bg-card"
                }`}
              >
                {/* Animated Background Gradient on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-teal-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="flex items-start gap-4 relative z-10">
                  <motion.div 
                    className={`p-3 rounded-lg ${category.highlight ? "bg-primary/10" : "bg-secondary"}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className={`h-6 w-6 ${category.highlight ? "text-primary" : "text-foreground"}`} />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-3 ${category.highlight ? "text-primary" : ""}`}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-full text-sm font-medium cursor-default ${
                            category.highlight
                              ? "bg-primary/20 text-primary border border-primary/30"
                              : "bg-secondary text-foreground"
                          }`}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            boxShadow: category.highlight ? "0 4px 12px rgba(100, 255, 218, 0.3)" : "0 4px 12px rgba(0, 0, 0, 0.1)"
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 to-teal-accent/10 border-2 border-primary/30">
            <p className="text-lg">
              <span className="font-bold text-primary">Academic Excellence:</span>{" "}
              <span className="text-2xl font-bold gradient-text">8.4 CGPA</span>
            </p>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
