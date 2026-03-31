import { motion } from "framer-motion";
import { Sliders, Disc3, Film, Radio } from "lucide-react";

const services = [
  {
    icon: Sliders,
    title: "Mixing",
    description: "I balance every sound to create a smooth, cohesive mix that sounds great no matter where it's played.",
  },
  {
    icon: Disc3,
    title: "Mastering",
    description: "I deliver tracks with the final polish – making sure volume, tone, and clarity are just right, and adjusted to meet platform loudness standards, such as YouTube, Instagram, broadcast, and others.",
  },
  {
    icon: Film,
    title: "Sound Design",
    description: "I create immersive sound worlds for film, video, and multimedia – from foley and effects to atmospheric textures.",
  },
  {
    icon: Radio,
    title: "Audio Production",
    description: "I take care of all the audio behind your project – cleaning up dialogue, enhancing sound, and mixing everything, whether it's for video, radio, podcasts, movies, or multimedia.",
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