import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { MoveRight, ArrowLeft } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import tutorTeaching from "@/assets/tutor-teaching.png";

interface HeroSectionProps {
  onFindTutor: () => void;
  onBecomeTutor: () => void;
}

const HeroSection = ({ onFindTutor, onBecomeTutor }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const pathLength = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    // Initial draw animation on load
    animate(progress, 0.4, { duration: 3, ease: "easeOut" });

    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const scrollFraction = scrollTop / (scrollHeight - clientHeight);
      // Map scroll: 0 → 0.4 (already drawn), scroll end → 1
      const newValue = 0.4 + scrollFraction * 0.6;
      progress.set(newValue);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory relative"
    >
      {/* Pencil Line SVG — continuous diagonal across both sections */}
      <svg
        className="fixed inset-0 w-full h-full z-30 pointer-events-none"
        viewBox="0 0 1200 2000"
        preserveAspectRatio="none"
      >
        {/* Section 1 path — sweeping diagonal */}
        <motion.path
          d="M80 -10 C180 80 400 120 600 200 C800 280 1000 320 1120 420 C1180 480 1100 560 900 620 C700 680 400 740 200 820 C100 860 150 920 300 980"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="8 6"
          style={{ pathLength }}
          opacity={0.3}
        />
        {/* Section 2 path — different rhythm, more organic */}
        <motion.path
          d="M300 980 C500 1020 700 1000 850 1060 C1000 1120 1100 1180 1050 1260 C1000 1340 800 1380 600 1440 C400 1500 250 1560 200 1650 C150 1740 300 1800 500 1860 C700 1920 900 1960 1100 2020"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="12 4 4 4"
          style={{ pathLength }}
          opacity={0.25}
        />
      </svg>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 bg-foreground/95 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold text-primary-foreground"
        >
          Tudr
        </motion.h1>
      </nav>

      {/* Section 1 — Hero */}
      <section className="h-screen snap-start flex flex-col items-center justify-center px-6 md:px-16 lg:px-28 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
              Aprende melhor
              <br />
              com o <span className="text-gradient">Tudr</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Liga-te ao explicador ideal para o teu sucesso académico
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 max-w-xl relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-student-yellow-light rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tutor-green-light rounded-full blur-3xl opacity-60" />
            <img
              src={heroIllustration}
              alt="Explicador e aluno numa sessão de tutoria"
              width={1280}
              height={800}
              className="relative z-0 w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12"
        >
          <button
            onClick={onFindTutor}
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-12 py-6 rounded-2xl font-semibold text-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-[0.98] transition-all duration-200"
          >
            Encontre o explicador ideal para si
            <MoveRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Section 2 — Become Tutor */}
      <section className="h-screen snap-start flex items-center justify-center px-6 md:px-16 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-md relative flex items-center justify-center"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-tutor-green-light rounded-full blur-3xl opacity-50" />
            <img
              src={tutorTeaching}
              alt="Explicadora a trabalhar no computador"
              width={1024}
              height={800}
              loading="lazy"
              className="relative z-0 w-full h-auto max-h-[70vh] object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 max-w-xl text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              Partilha o teu{" "}
              <span className="text-gradient">conhecimento</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0">
              Junta-te à comunidade Tudr como explicador e ajuda alunos a alcançar o sucesso.
            </p>
            <button
              onClick={onBecomeTutor}
              className="group inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-foreground px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-primary/5 hover:border-primary/40 hover:scale-105 active:scale-[0.98] transition-all duration-200"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              Quero ser explicador
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
