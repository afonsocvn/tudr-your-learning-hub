import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, MessageCircle, BookOpen, Brain, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: CreditCard,
    title: "Pagamentos & Agendamento",
    desc: "Integração de pagamentos seguros pela plataforma, agendamento de explicações e controlo total sobre ambos — tudo num só lugar.",
    features: ["Pagamentos protegidos", "Agendamento flexível", "Histórico completo"],
    color: "from-primary to-accent",
    accentVar: "primary",
  },
  {
    icon: MessageCircle,
    title: "Chat & Controlo Parental",
    desc: "Chat integrado para comunicação direta entre explicadores, alunos e encarregados de educação, com ferramentas de controlo parental.",
    features: ["Mensagens em tempo real", "Notificações inteligentes", "Supervisão parental"],
    color: "from-accent to-secondary",
    accentVar: "accent",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Exclusivo",
    desc: "Conteúdo próprio criado por explicadores e partilhado com os alunos — materiais, exercícios e recursos personalizados.",
    features: ["Biblioteca de recursos", "Materiais personalizados", "Exercícios interativos"],
    color: "from-secondary to-primary",
    accentVar: "secondary",
  },
  {
    icon: Brain,
    title: "O Explicador Inteligente",
    desc: "Inteligência artificial que potencia a aprendizagem — sugestões personalizadas, acompanhamento adaptativo e insights de progresso.",
    features: ["IA adaptativa", "Insights de progresso", "Sugestões personalizadas"],
    color: "from-primary to-accent",
    accentVar: "primary",
  },
];

const RoadmapSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 md:py-32 px-4 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            O que estamos a <span className="text-gradient">construir</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-lg mx-auto">
            O futuro do Tudr, passo a passo
          </p>
        </motion.div>

        {/* Timeline navigation */}
        <div className="relative mb-12 md:mb-16">
          {/* Progress bar background */}
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-border hidden md:block" />
          {/* Active progress */}
          <motion.div
            className="absolute top-5 left-0 h-[2px] bg-gradient-to-r from-primary to-accent hidden md:block"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 relative">
            {steps.map((step, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <motion.button
                  key={step.title}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circle */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-colors duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30"
                        : isPast
                        ? "bg-primary/80"
                        : "bg-muted"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ opacity: 0.3 }}
                      />
                    )}
                    <step.icon className={`w-4 h-4 relative z-10 ${
                      isActive || isPast ? "text-primary-foreground" : "text-muted-foreground"
                    }`} />
                  </motion.div>

                  {/* Label */}
                  <span className={`text-xs md:text-sm font-semibold transition-colors duration-300 leading-tight ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {step.title}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12"
          >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${steps[activeStep].color}`} />
            
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              {/* Icon & number */}
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center shadow-lg`}
                >
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />;
                  })()}
                </motion.div>
                <div className="mt-3 text-center">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Fase {activeStep + 1}/{steps.length}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1">
                <motion.h3
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl md:text-3xl font-extrabold mb-3 md:mb-4"
                >
                  {steps[activeStep].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6"
                >
                  {steps[activeStep].desc}
                </motion.p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {steps[activeStep].features.map((feat, fi) => (
                    <motion.span
                      key={feat}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + fi * 0.08 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-muted text-xs md:text-sm font-medium text-foreground"
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {feat}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-8 md:mt-10 pt-6 border-t border-border">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
              >
                Seguinte →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default RoadmapSection;
