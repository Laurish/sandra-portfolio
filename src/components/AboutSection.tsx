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
              Sound is a key part of how stories are felt, not just heard.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I create immersive and detailed audio that supports emotion, rhythm, and atmosphere in every project.
              </p>
              <p>
                Based in Stockholm and Sandviken, I work with sound design for film, video, and digital content. My work includes everything from creative sound design to mixing and preparing audio for final delivery.
              </p>
              <p>
                With five years of experience in audio production, including three years of formal studies, I bring fresh ideas, modern workflows, and a strong ambition to grow with every project.
              </p>
              <p>
                Check out some of my previous work.
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