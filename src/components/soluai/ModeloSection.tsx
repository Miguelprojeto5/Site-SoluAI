import { Reveal, RevealItem } from "./Reveal";

const cols = [
  {
    title: "Projeto único · setup",
    items: [
      ["Diagnóstico e mapeamento", "Análise dos processos atuais e plano de automação priorizado"],
      [
        "Construção dos agentes e fluxos",
        "Configuração completa, integração com ferramentas existentes e testes",
      ],
      ["Entrega e validação com você", "Aprovação antes de ir ao ar — nada entra em produção sem seu OK"],
    ],
  },
  {
    title: "Mensalidade · manutenção e evolução",
    items: [
      ["Monitoramento contínuo", "Os agentes são acompanhados. Problema identificado antes de você perceber"],
      ["Ajustes e evoluções", "Seu negócio muda. As automações acompanham."],
      ["Suporte direto via WhatsApp", "Acesso direto. Sem ticket, sem fila, sem chatbot de suporte."],
    ],
  },
];

function Check() {
  return (
    <div className="w-[18px] h-[18px] rounded bg-amber/[0.12] border border-amber/25 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(239,159,39,0.2)]">
      <svg viewBox="0 0 10 10" fill="none" className="w-2.5 h-2.5">
        <path
          d="M2 5l2.5 2.5 3.5-4"
          stroke="#EF9F27"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ModeloSection() {
  return (
    <section id="modelo" className="px-6 md:px-16 py-24 border-t border-border bg-card/40">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-2.5">
            Modelo comercial
          </RevealItem>
          <RevealItem
            as="h2"
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.1] mb-4"
          >
            Direto e sem surpresa
          </RevealItem>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {cols.map((col, i) => (
            <RevealItem key={i}>
              <div className="font-mono text-[10px] tracking-[0.16em] text-amber uppercase mb-5 pb-3 border-b border-amber/15">
                {col.title}
              </div>
              {col.items.map(([title, desc], j) => (
                <div key={j} className="flex gap-3 items-start mb-4">
                  <Check />
                  <div>
                    <div className="font-sans font-semibold text-[14px] text-white mb-0.5">{title}</div>
                    <div className="font-sans text-[12px] text-muted-foreground leading-[1.55]">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-12 pt-10 border-t border-border text-center">
          <RevealItem as="p" className="font-sans text-[17px] text-white/70 leading-[1.7] mb-2">
            Modelo direto — projeto único para montar, mensalidade para manter. Sem surpresa.
          </RevealItem>
          <RevealItem as="p" className="font-sans text-[15px] text-muted-foreground leading-[1.7]">
            Você sabe o que paga e sabe o que recebe.
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
