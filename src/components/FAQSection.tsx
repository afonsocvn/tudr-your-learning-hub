import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o Tudr?",
    a: "O Tudr liga alunos a explicadores verificados. Pesquisas por disciplina, vês perfis e avaliações, e agendas sessões diretamente na plataforma.",
  },
  {
    q: "Quanto custa usar o Tudr?",
    a: "Criar conta e pesquisar é gratuito. Cada explicador define o seu preço por hora. O Tudr cobra uma pequena taxa de serviço para manter a plataforma.",
  },
  {
    q: "Como me torno explicador?",
    a: "Basta preencheres o formulário de candidatura com as tuas disciplinas e experiência. A equipa Tudr revê o teu perfil e ativa a tua conta em 24–48 horas.",
  },
  {
    q: "As sessões são presenciais ou online?",
    a: "Ambas! Cada explicador indica as modalidades disponíveis. Podes filtrar por sessões presenciais, online ou ambas.",
  },
  {
    q: "É seguro usar a plataforma?",
    a: "Sim. Todos os explicadores passam por verificação. As avaliações são de alunos reais e os pagamentos são processados de forma segura.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-28 px-4 md:px-16 lg:px-28">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 md:mb-4">
            Questões <span className="text-gradient">frequentes</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Tudo o que precisas de saber sobre o Tudr
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-4 md:px-6 bg-card data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-sm md:text-base font-semibold hover:no-underline py-4 md:py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4 md:pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
