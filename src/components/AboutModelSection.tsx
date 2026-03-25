import { motion } from "framer-motion";
import { Shield, Zap, Heart } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Confiança",
    desc: "Explicadores verificados, avaliações reais e pagamentos seguros. Transparência total em cada interação.",
    color: "bg-tutor-green-light text-tutor-green",
  },
  {
    icon: Zap,
    title: "Simplicidade",
    desc: "Sem complicações. Pesquisa, agenda e aprende — tudo numa única plataforma intuitiva.",
    color: "bg-student-yellow-light text-student-yellow",
  },
  {
    icon: Heart,
    title: "Impacto",
    desc: "Acreditamos que a educação personalizada transforma vidas. Cada sessão é um passo para o sucesso.",
    color: "bg-tutor-green-light text-tutor-green",
  },
];

const AboutModelSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-16 lg:px-28 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            O modelo <span className="text-gradient">Tudr</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-lg mx-auto">
            Construído sobre três pilares fundamentais para uma experiência de aprendizagem superior
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 md:gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-6 md:p-8 rounded-2xl bg-card border border-border text-center hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex p-3 md:p-4 rounded-xl ${p.color} mb-4 md:mb-5`}>
                <p.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 md:mt-16 text-center"
        >
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            O Tudr conecta quem quer aprender com quem sabe ensinar. Sem intermediários desnecessários,
            sem complicações — apenas educação acessível, personalizada e de qualidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutModelSection;
