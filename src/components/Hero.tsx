import { motion, useMotionValue, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-accent rounded-full blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent rounded-full blur-3xl"
          animate={{ 
            x: [-100, 100, -100],
            y: [-100, 100, -100],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-primary font-medium tracking-wider">Hi, I'm</h2>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                VASANTHA
                <br />
                MANIKANDAN K
              </h1>
            </div>

            <div className="text-2xl md:text-3xl font-semibold h-20">
              <TypeAnimation
                sequence={[
                  "Results-Driven Java Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                  "Clean Code Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="gradient-text"
                repeat={Infinity}
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Entry-Level Software Developer specializing in Java and Web Development.
              Passionate about writing clean, efficient code with an impressive 8.4 CGPA.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect"
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-border hover:bg-secondary"
              >
                <a href="/Resume_Vasantha_Manikandan.pdf" download>
                  <FileDown className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/vasanthamanikandan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/vasanthamanikandan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:vasanth.vaasu2003@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Enhanced Profile Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div 
              className="relative perspective-1000"
              animate={{
                rotateY: mousePosition.x * 5,
                rotateX: -mousePosition.y * 5,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* Multiple Glow Layers */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary via-teal-accent to-accent rounded-full blur-3xl opacity-60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tl from-teal-glow to-primary rounded-full blur-2xl opacity-40"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Orbiting Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.3 }}
              />
              <motion.div
                className="absolute inset-0 border-2 border-teal-accent/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ scale: 1.4 }}
              />
              
              {/* Main Image with Hover Effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={profileImage}
                  alt="Vasantha Manikandan K"
                  className="relative rounded-full w-80 h-80 object-cover border-4 border-primary shadow-2xl"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              
              {/* Floating Particles Around Photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                    left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("skills")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
