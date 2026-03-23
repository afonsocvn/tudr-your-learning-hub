import { motion } from "framer-motion";
import { Lightbulb, ArrowRight, MoveRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

interface HeroSectionProps {
  onFindTutor: () => void;
  onBecomeTutor: () => void;
}

const HeroSection = ({ onFindTutor, onBecomeTutor }: HeroSectionProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-extrabold text-gradient"
        >
          Tudr
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3"
        >
          <button
            onClick={onBecomeTutor}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ser Explicador
          </button>
        </motion.div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-24 pb-16">
        {/* Text Content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-student-yellow-light px-4 py-1.5 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-student-yellow" />
              <span className="text-sm font-medium text-foreground/80">A tua plataforma de explicações</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Aprende melhor
              <br />
              com o{" "}
              <span className="text-gradient">Tudr</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0">
              Liga-te ao explicador ideal para o teu sucesso académico
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={onFindTutor}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-[0.98] transition-all duration-200"
            >
              Encontre o explicador ideal
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBecomeTutor}
              className="group inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/5 hover:border-primary/40 hover:scale-105 active:scale-[0.98] transition-all duration-200"
            >
              Quero ser explicador
              <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex-1 max-w-lg relative"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-8 -left-8 w-32 h-32 bg-student-yellow-light rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-tutor-green-light rounded-full blur-3xl opacity-60" />
          
          {/* Floating lightbulb */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 right-8 z-10"
          >
            <div className="bg-student-yellow/20 p-3 rounded-full">
              <Lightbulb className="w-6 h-6 text-student-yellow" />
            </div>
          </motion.div>

          {/* Arrow between tutor and student */}
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 z-10"
          >
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <motion.path
                d="M10 30 Q60 0 110 30"
                stroke="hsl(82, 25%, 38%)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              />
              <motion.polygon
                points="105,25 115,32 105,35"
                fill="hsl(82, 25%, 38%)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              />
            </svg>
          </motion.div>

          <img
            src={heroIllustration}
            alt="Explicador e aluno numa sessão de tutoria"
            width={1280}
            height={800}
            className="relative z-0 w-full h-auto"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
