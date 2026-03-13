import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Let's Create Together</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Mail, label: "Email", value: "sandriainen@gmail.com", href: "mailto:sandriainen@gmail.com" },
            { icon: MapPin, label: "Location", value: "Stockholm, Sweden", href: null },
            { icon: Instagram, label: "Instagram", value: "@sandra.sounddesign", href: "https://www.instagram.com/sandra.sounddesign" },
          ].map((item) => (
            <div key={item.label} className="text-center space-y-3">
              <item.icon className="w-6 h-6 text-primary mx-auto" />
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-foreground hover:text-primary transition-colors">{item.value}</a>
              ) : (
                <p className="text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
