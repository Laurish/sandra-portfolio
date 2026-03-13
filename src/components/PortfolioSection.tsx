import { motion } from "framer-motion";

const projects = [
  { title: "Midnight Sessions", artist: "Luna Ray", role: "Mix & Master", genre: "R&B" },
  { title: "Steel & Silk", artist: "The Foundry", role: "Production & Mix", genre: "Rock" },
  { title: "Echoes of Tomorrow", artist: "Kira Voss", role: "Sound Design", genre: "Electronic" },
  { title: "Unraveled", artist: "Documentary Film", role: "Post-Production Audio", genre: "Film" },
  { title: "Golden Hour", artist: "Ava & The Wolves", role: "Mixing", genre: "Indie Pop" },
  { title: "Resonance", artist: "Marcus Cole", role: "Original Score", genre: "Ambient" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Selected Work</h2>
        </motion.div>

        <div className="space-y-0 border-t border-border">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-b border-border hover:bg-card/50 px-4 -mx-4 transition-colors cursor-pointer"
            >
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">{project.artist}</p>
              </div>
              <div className="hidden md:block">
                <p className="text-muted-foreground text-sm">{project.role}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-primary/70 border border-primary/20 px-2 py-1 rounded-sm">
                  {project.genre}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
