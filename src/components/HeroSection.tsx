import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight, ArrowLeft } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import tutorTeaching from "@/assets/tutor-teaching.png";

interface HeroSectionProps {
  onFindTutor: () => void;
  onBecomeTutor: () => void;
}

const HeroSection = ({ onFindTutor, onBecomeTutor }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory relative"
    >
      {/* Pencil Line SVG */}
      <svg
        className="fixed left-6 md:left-12 top-0 h-full w-8 z-30 pointer-events-none"
        viewBox="0 0 32 1000"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M16 0 Q20 100 12 200 Q8 300 18 400 Q24 500 14 600 Q8 700 20 800 Q26 900 16 1000"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 4"
          style={{ pathLength }}
          opacity={0.5}
        />
      </svg>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 bg-foreground/95 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold text-primary-foreground"
        >
          Tudr
        </motion.h1>
      </nav>

      {/* Section 1 — Hero */}
      <section className="h-screen snap-start flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-xl text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Aprende melhor
              <br />
              com o <span className="text-gradient">Tudr</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              Liga-te ao explicador ideal para o teu sucesso académico
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 max-w-lg relative"
          >
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-student-yellow-light rounded-full blur-3xl opacity-60" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tutor-green-light rounded-full blur-3xl opacity-60" />
            <img
              src={heroIllustration}
              alt="Explicador e aluno numa sessão de tutoria"
              width={1280}
              height={800}
              className="relative z-0 w-full h-auto"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10"
        >
          <button
            onClick={onFindTutor}
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-[0.98] transition-all duration-200"
          >
            Encontre o explicador ideal para si
            <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Section 2 — Become Tutor */}
      <section className="h-screen snap-start flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-md relative"
          >
            <div className="absolute -top-6 -left-6 w-28 h-28 bg-tutor-green-light rounded-full blur-3xl opacity-50" />
            <img
              src={tutorTeaching}
              alt="Explicadora a ensinar num quadro"
              width={1024}
              height={800}
              loading="lazy"
              className="relative z-0 w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 max-w-lg text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Partilha o teu{" "}
              <span className="text-gradient">conhecimento</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Junta-te à comunidade Tudr como explicador e ajuda alunos a alcançar o sucesso.
            </p>
            <button
              onClick={onBecomeTutor}
              className="group inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/5 hover:border-primary/40 hover:scale-105 active:scale-[0.98] transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Quero ser explicador
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
