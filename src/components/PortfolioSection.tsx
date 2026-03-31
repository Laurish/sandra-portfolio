import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Junior-SM 2025 i Tyngdlyftning",
    description: "13–14 december på Arena Jernvallen",
    role: "Filming · Editing · Sound Design",
    genre: "Sport",
    youtubeId: "N1Nl3iyWxNc",
    isShort: false,
  },
  {
    title: "Eddie Bergund & SBD",
    description: "Filming, Klippning & Ljuddesign",
    role: "Filming · Editing · Sound Design · Mix & Master",
    genre: "Commercial",
    youtubeId: "bTAcdVUa0yM",
    isShort: false,
  },
  {
    title: "Eddie Berglund x SBD – AudiaMorph Edit",
    description: "Reigning Nordic Champion in Olympic Weightlifting",
    role: "Filming · Editing · Sound Design · Mix & Master",
    genre: "Commercial",
    youtubeId: "RUmAxlkcW8s",
    isShort: true,
  },
  {
    title: "Sport Brand Commercial – Eddie Berglund x SBD",
    description: "Filming, Editing & Sound Design",
    role: "Filming · Editing · Sound Design · Mix & Master",
    genre: "Commercial",
    youtubeId: "IgTt3XLCDQ0",
    isShort: true,
  },
  {
    title: "Interview for Company Product",
    description: "Filming, Editing & Sound Design",
    role: "Filming · Editing · Sound Design · Mix & Master",
    genre: "Interview",
    youtubeId: "h_YNCjpfO1s",
    isShort: false,
  },
];

const PortfolioSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

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
              key={project.youtubeId}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border-b border-border"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full group grid grid-cols-2 md:grid-cols-4 gap-4 py-6 hover:bg-card/50 px-4 -mx-4 transition-colors text-left"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">{project.description}</p>
                </div>
                <div className="hidden md:block self-center">
                  <p className="text-muted-foreground text-sm">{project.role}</p>
                </div>
                <div className="hidden md:block self-center">
                  <span className="font-mono text-xs text-primary/70 border border-primary/20 px-2 py-1 rounded-sm">
                    {project.genre}
                  </span>
                </div>
                <div className="flex justify-end items-center pr-4">
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 px-4">
                      {project.isShort ? (
                        /* Shorts: vertical 9:16, max 360px wide, centered */
                        <div className="flex justify-center">
                          <div className="relative w-full max-w-[360px]" style={{ paddingBottom: "calc(min(100%, 360px) * 16 / 9)" }}>
                            <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                              <iframe
                                className="absolute inset-0 w-full h-full rounded-sm"
                                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Regular 16:9 video */
                        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                          <iframe
                            className="absolute inset-0 w-full h-full rounded-sm"
                            src={`https://www.youtube.com/embed/${project.youtubeId}`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
