import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experience = {
    company: "KEVELL CORP",
    role: "Full Stack Development Intern",
    duration: "November 2024",
    location: "Remote",
    responsibilities: [
      "Gained strong foundation in HTML, CSS, JavaScript, and ReactJS",
      "Developed responsive web applications with seamless front-end and back-end integration",
      "Implemented modern UI/UX principles for enhanced user experience",
      "Collaborated with cross-functional teams on real-world projects",
      "Practiced version control and collaborative development using Git",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Git", "Responsive Design"],
  };

  return (
    <section id="experience" className="section-container bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional journey and contributions to real-world projects
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 border-2 border-primary/30 hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              {/* Timeline Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-teal-accent rounded-full hidden md:block"></div>

              <div className="md:pl-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{experience.role}</h3>
                      <p className="text-xl font-semibold text-foreground">{experience.company}</p>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Contributions:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="text-primary mr-3 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills Gained */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
