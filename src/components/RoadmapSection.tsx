import { motion } from "framer-motion";
import { Search, UserCheck, MessageSquare, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Pesquisa",
    desc: "Encontra o explicador ideal por disciplina, localização e avaliações.",
    color: "bg-student-yellow-light text-student-yellow",
  },
  {
    icon: UserCheck,
    title: "Match",
    desc: "Liga-te ao explicador que melhor se adapta ao teu estilo de aprendizagem.",
    color: "bg-tutor-green-light text-tutor-green",
  },
  {
    icon: MessageSquare,
    title: "Sessão",
    desc: "Agenda e participa em sessões personalizadas, presenciais ou online.",
    color: "bg-student-yellow-light text-student-yellow",
  },
  {
    icon: Sparkles,
    title: "Evolução",
    desc: "Acompanha o teu progresso e alcança os teus objetivos académicos.",
    color: "bg-tutor-green-light text-tutor-green",
  },
];

const RoadmapSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-16 lg:px-28">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-md mx-auto">
            Quatro passos simples para começares a aprender melhor
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px hidden sm:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    i > 0 ? "md:mt-12" : ""
                  }`}
                >
                  {/* Mobile: icon on left */}
                  <div className="sm:hidden flex-shrink-0 z-10">
                    <div className={`p-3 rounded-xl ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Desktop: alternating layout */}
                  <div className="hidden sm:grid sm:grid-cols-[1fr_auto_1fr] w-full items-center gap-6 md:gap-8">
                    <div className={isLeft ? "text-right" : ""}>
                      {isLeft && (
                        <div className="md:pr-4">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{step.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground">{step.desc}</p>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.15 }}
                        className={`p-3 md:p-4 rounded-xl ${step.color} shadow-lg`}
                      >
                        <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.div>
                    </div>

                    <div className={!isLeft ? "" : ""}>
                      {!isLeft && (
                        <div className="md:pl-4">
                          <h3 className="text-lg md:text-xl font-bold mb-1">{step.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground">{step.desc}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile text */}
                  <div className="sm:hidden">
                    <h3 className="text-base font-bold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
