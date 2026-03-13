import { motion } from "framer-motion";
import { Headphones, GraduationCap, Sparkles } from "lucide-react";

const stats = [
  { icon: GraduationCap, label: "Higher Education", value: "2 Years" },
  { icon: Headphones, label: "Audio Projects", value: "30+" },
  { icon: Sparkles, label: "Passion for Sound", value: "∞" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-6">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Every sound tells a story. I make sure it's heard.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Based in Stockholm, Sweden, I specialize in sound design and audio production
                for film, games, and multimedia projects. My approach blends technical precision
                with creative intuition.
              </p>
              <p>
                Fresh out of 2 years of higher education in audio production, I bring fresh perspectives,
                modern techniques, and dedicated energy to every project that comes my way.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-6 p-6 bg-card rounded-sm border border-border hover:border-primary/30 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-mono">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
