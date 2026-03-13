import { motion } from "framer-motion";
import heroImg from "@/assets/hero-studio.jpg";

const WaveformBar = ({ delay }: { delay: number }) => (
  <motion.div
    className="w-1 rounded-full bg-primary"
    animate={{ height: ["8px", "32px", "8px"] }}
    transition={{ duration: 1.2, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Recording studio mixing console"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-primary">
            Sound Designer & Audio Producer
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            <span className="text-foreground">Sandra</span>
            <br />
            <span className="text-primary text-glow">Andriainen</span>
          </h1>

          {/* Waveform animation */}
          <div className="flex items-center justify-center gap-1 py-6">
            {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1].map((delay, i) => (
              <WaveformBar key={i} delay={delay} />
            ))}
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Crafting sonic landscapes for artists, film, and brands.
            Over 10 years shaping sound that moves people.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Hear My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-semibold rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
