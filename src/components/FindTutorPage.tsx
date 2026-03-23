import { motion } from "framer-motion";
import { ArrowLeft, Search, Star, BookOpen, Calculator, Globe, FlaskConical } from "lucide-react";

interface FindTutorPageProps {
  onBack: () => void;
}

const subjects = [
  { name: "Matemática", icon: Calculator, color: "bg-student-yellow-light text-student-yellow" },
  { name: "Português", icon: BookOpen, color: "bg-tutor-green-light text-tutor-green" },
  { name: "Inglês", icon: Globe, color: "bg-student-yellow-light text-student-yellow" },
  { name: "Ciências", icon: FlaskConical, color: "bg-tutor-green-light text-tutor-green" },
];

const tutors = [
  { name: "Ana Silva", subject: "Matemática", rating: 4.9, reviews: 127, price: "15€/h" },
  { name: "Pedro Costa", subject: "Português", rating: 4.8, reviews: 89, price: "12€/h" },
  { name: "Maria Santos", subject: "Inglês", rating: 5.0, reviews: 203, price: "18€/h" },
  { name: "João Ferreira", subject: "Ciências", rating: 4.7, reviews: 64, price: "14€/h" },
];

const FindTutorPage = ({ onBack }: FindTutorPageProps) => {
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

      <div className="px-6 md:px-12 lg:px-24 pb-16 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-extrabold mb-2"
        >
          Encontre o seu explicador
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-8"
        >
          Explore disciplinas e encontre o match perfeito
        </motion.p>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="relative mb-10"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Pesquisar disciplina ou explicador..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-ring/30 text-foreground placeholder:text-muted-foreground transition-all"
          />
        </motion.div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {subjects.map((s, i) => (
            <motion.button
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className={`p-3 rounded-xl ${s.color}`}>
                <s.icon className="w-6 h-6" />
              </div>
              <span className="font-semibold text-sm">{s.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tutor list */}
        <h3 className="text-xl font-bold mb-4">Explicadores populares</h3>
        <div className="space-y-4">
          {tutors.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tutor-green-light flex items-center justify-center text-tutor-green font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.subject}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-student-yellow text-student-yellow" />
                  <span className="font-semibold">{t.rating}</span>
                  <span className="text-muted-foreground">({t.reviews})</span>
                </div>
                <span className="font-bold text-primary">{t.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindTutorPage;
