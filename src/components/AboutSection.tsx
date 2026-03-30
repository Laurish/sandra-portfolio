import { motion } from "framer-motion";
import sandraImg from "../assets/sandra.jpg";

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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-border hover:border-primary transition-colors rounded-sm overflow-hidden"
          >
            <img
              src={sandraImg}
              alt="Sandra Andriainen"
              className="w-full h-full object-cover block"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
