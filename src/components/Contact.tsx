import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:vasanth.vaasu2003@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vasanth.vaasu2003@gmail.com",
      link: "mailto:vasanth.vaasu2003@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6369293464",
      link: "tel:+916369293464",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vasanthamanikandan",
      link: "https://github.com/vasanthamanikandan",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vasanthamanikandan",
      link: "https://linkedin.com/in/vasanthamanikandan",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss your next project or opportunity. I'm always open to new challenges and collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 border-2 border-primary/30 bg-gradient-to-br from-card to-primary/5">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground break-all">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-teal-accent/10 border-2 border-primary/30">
              <p className="text-center">
                <span className="text-lg font-semibold">Open to opportunities</span>
                <br />
                <span className="text-muted-foreground">
                  Currently seeking entry-level positions in Full Stack Development
                </span>
              </p>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 border-2 border-border">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    required
                    placeholder="Your message here..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
