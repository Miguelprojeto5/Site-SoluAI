import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealItem } from "./Reveal";

const faqs: [string, string][] = [
  [
    "Quanto custa?",
    "Depende do que seu negócio precisa — tamanho da operação, quantos processos e quais ferramentas envolvidas. Por isso o primeiro passo é sempre o diagnóstico gratuito: saímos com um mapa claro do que faz sentido automatizar e um valor fechado, sem surpresa.",
  ],
  [
    "Vou precisar mudar a forma como trabalho hoje?",
    "Não. As automações são construídas em cima do que você já usa — seu WhatsApp, suas planilhas, sua agenda. Você continua operando do mesmo jeito. A diferença é que as partes repetitivas passam a acontecer sozinhas.",
  ],
  [
    "Funciona com as ferramentas que já uso?",
    "Sim. As automações são construídas em cima do que você já usa — WhatsApp, Google, planilhas, agendas, CRMs. Não precisa mudar nada do que já funciona.",
  ],
  [
    "Quanto tempo eu preciso dedicar?",
    "Uma conversa inicial. Depois disso, você acompanha o progresso e dá a aprovação final antes de tudo ir ao ar. O resto é com a gente.",
  ],
  [
    "E se não funcionar como esperado?",
    "Nada vai ao ar sem sua aprovação. Você testa, valida e só confirma quando estiver satisfeito. Depois que está rodando, monitoramos e ajustamos continuamente.",
  ],
  [
    "O que acontece se eu cancelar?",
    "As automações ficam com você. O que foi construído é seu. Sem o plano de manutenção, você perde o monitoramento contínuo e as melhorias — mas não perde o que foi entregue.",
  ],
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[900px] mx-auto">
        <Reveal>
          <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-2.5">
            Perguntas frequentes
          </RevealItem>
          <RevealItem
            as="h2"
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.1] mb-12"
          >
            Tudo que você quer saber.
          </RevealItem>
        </Reveal>

        <Reveal className="border-t border-border">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <RevealItem key={i}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span className="font-sans font-semibold text-[16px] md:text-[18px] text-white group-hover:text-amber transition-colors">
                      {q}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border border-amber/30 bg-amber/[0.08] flex items-center justify-center text-amber transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-[15px] text-muted-foreground leading-[1.7] pb-6 pr-12">
                          {a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </RevealItem>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
