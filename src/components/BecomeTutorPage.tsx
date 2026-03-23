import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, GraduationCap, Users, Wallet } from "lucide-react";

interface BecomeTutorPageProps {
  onBack: () => void;
}

const benefits = [
  { icon: Wallet, title: "Define o teu preço", desc: "Total liberdade para definir os teus valores" },
  { icon: Users, title: "Liga-te a alunos", desc: "Encontra alunos na tua área e disciplina" },
  { icon: GraduationCap, title: "Partilha conhecimento", desc: "Faz a diferença no percurso académico" },
];

const BecomeTutorPage = ({ onBack }: BecomeTutorPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center gap-4 px-6 md:px-12 py-5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </button>
        <h1 className="text-2xl font-extrabold text-gradient">Tudr</h1>
      </nav>

      <div className="px-6 md:px-12 lg:px-24 pb-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold mb-2"
        >
          Torna-te explicador
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          Junta-te à comunidade Tudr e começa a ensinar
        </motion.p>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="p-6 rounded-2xl bg-card border border-border text-center"
            >
              <div className="inline-flex p-3 rounded-xl bg-tutor-green-light text-tutor-green mb-4">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-5 bg-card p-8 rounded-2xl border border-border"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-xl font-bold mb-2">Registo de Explicador</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Nome completo</label>
              <input className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all" placeholder="O teu nome" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all" placeholder="email@exemplo.pt" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Disciplinas</label>
            <input className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all" placeholder="Ex: Matemática, Física, Inglês" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5">Sobre ti</label>
            <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all resize-none" placeholder="Fala um pouco da tua experiência..." />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            Submeter candidatura
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default BecomeTutorPage;
