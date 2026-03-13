import { motion } from "framer-motion";
import { Sliders, Disc3, Film, Radio } from "lucide-react";

const services = [
  {
    icon: Sliders,
    title: "Mixing",
    description: "Balancing every element to create a polished, cohesive sound that translates across all playback systems.",
  },
  {
    icon: Disc3,
    title: "Mastering",
    description: "Final polish and loudness optimization, ensuring your tracks are release-ready for any platform.",
  },
  {
    icon: Film,
    title: "Sound Design",
    description: "Creating immersive sonic worlds for film, games, and multimedia — from foley to atmospheric textures.",
  },
  {
    icon: Radio,
    title: "Audio Production",
    description: "Complete audio post-production for video content, podcasts, and multimedia — dialogue editing, sound enhancement, and final mix.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What I Do</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 bg-background border border-border rounded-sm hover:border-primary/40 transition-all duration-300"
            >
              <service.icon className="w-10 h-10 text-primary mb-5 group-hover:drop-shadow-[0_0_12px_hsl(36_90%_50%/0.5)] transition-all" />
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
