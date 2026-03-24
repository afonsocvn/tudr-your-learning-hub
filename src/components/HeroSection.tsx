import { motion } from "framer-motion";
import { MoveRight, ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import tutorTeaching from "@/assets/tutor-teaching.png";

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
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center px-6 md:px-12 lg:px-24 pb-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-6xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-xl text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Aprende melhor
              <br />
              com o{" "}
              <span className="text-gradient">Tudr</span>
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

        {/* CTA Button centered below */}
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

      {/* Become Tutor Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 md:px-12 lg:px-24 py-16 max-w-6xl mx-auto">
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
            Quero ser explicador
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
