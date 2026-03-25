import { motion } from "framer-motion";
import { MoveRight, ArrowLeft } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import tutorTeaching from "@/assets/tutor-teaching.png";
import ScrollLine from "./ScrollLine";

interface HeroSectionProps {
  onFindTutor: () => void;
  onBecomeTutor: () => void;
}

const HeroSection = ({ onFindTutor, onBecomeTutor }: HeroSectionProps) => {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory relative hero-scroll-container">
      <ScrollLine />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 bg-foreground/95 backdrop-blur-md">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold text-primary-foreground"
        >
          Tudr.
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
              className="relative z-0 w-full h-auto max-h-[70vh] object-contain mix-blend-multiply"
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
