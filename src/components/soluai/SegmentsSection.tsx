import { motion, type Variants } from "framer-motion";

const fade: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const bullets1 = [
  "Resposta automática 24h",
  "Qualificação sem intervenção humana",
  "Agendamento confirmado sem você",
];
const bullets2 = [
  "Contato automático no momento certo",
  "Acompanhamento contínuo sem esforço manual",
  "Reativação de clientes sem você correr atrás",
];
const bullets3 = [
  "Fluxos de aprovação automáticos",
  "Integração entre sistemas e setores",
  "Relatórios gerados sem intervenção",
];

function Eyebrow({ text, dot = false }: { text: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {dot && (
        <span
          className="rounded-full animate-blink"
          style={{ background: "#EF9F27", width: 14, height: 14 }}
        />
      )}
      <span
        className="font-mono uppercase"
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          color: "#EF9F27",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="font-mono" style={{ fontSize: 13, color: "#EF9F27", lineHeight: 2 }}>
      {items.map((b, i) => (
        <li key={i}>› {b}</li>
      ))}
    </ul>
  );
}

function ResultRow({ text }: { text: string }) {
  return (
    <div
      className="pt-5 flex flex-nowrap items-baseline gap-2"
      style={{ borderTop: "1px solid rgba(255,255,255,0.10)", marginTop: 32 }}
    >
      <span
        className="font-mono uppercase"
        style={{ fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)" }}
      >
        Resultado:
      </span>
      <span
        className="font-sans"
        style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.85)" }}
      >
        {text}
      </span>
    </div>
  );
}

const cardBase =
  "group relative rounded-2xl transition-colors";
const cardStyle: React.CSSProperties = {
  background: "#1a1d24",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 16,
  padding: 40,
};

export function SegmentsSection() {
  return (
    <section id="segmentos" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="font-mono uppercase"
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              color: "#EF9F27",
              marginBottom: 12,
            }}
          >
            O Problema
          </div>
          <h2
            className="font-sans"
            style={{
              fontWeight: 800,
              fontSize: "clamp(32px,4vw,48px)",
              letterSpacing: "-0.02em",
              color: "#fff",
              lineHeight: 1.05,
            }}
          >
            O problema muda de nome.
            <br />
            A solução é a mesma.
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: 520,
              marginTop: 16,
            }}
          >
            Seja qual for o seu negócio, o gargalo sempre aparece no mesmo lugar.
          </p>
        </motion.div>

        {/* Card 1 — Atendimento */}
        <motion.div
          className={`${cardBase} mt-16 hover:[border-color:rgba(255,255,255,0.18)] hover:shadow-[0_-12px_40px_-20px_rgba(239,159,39,0.35)]`}
          style={cardStyle}
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-start">
            <div style={{ alignSelf: "flex-start" }}>
              <Eyebrow text="Atendimento" dot />
              <h3
                className="font-sans"
                style={{
                  fontWeight: 800,
                  fontSize: 28,
                  color: "#fff",
                  lineHeight: 1.2,
                  marginTop: 16,
                }}
              >
                Seu negócio responde.<br />Mesmo quando você não pode.
              </h3>
            </div>
            <div>
              <p
                className="font-sans"
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                Não é só fora do horário. É durante a reunião, no almoço, no fim de semana.
                Sempre tem um momento em que ninguém pode atender — e o cliente que não recebe
                resposta rápida não espera. Vai para o próximo.
              </p>
              <Bullets items={bullets1} />
            </div>
          </div>
          <ResultRow text="Nenhum lead sem resposta." />
        </motion.div>

        {/* Cards 2 & 3 */}
        <motion.div
          className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {/* Card 2 — Vendas */}
          <div
            className={`${cardBase} hover:[border-color:rgba(255,255,255,0.18)] hover:shadow-[0_-12px_40px_-20px_rgba(239,159,39,0.35)]`}
            style={{ ...cardStyle, paddingBottom: 32 }}
          >
            <Eyebrow text="Vendas" dot />
            <h3
              className="font-sans"
              style={{
                fontWeight: 800,
                fontSize: 22,
                color: "#fff",
                lineHeight: 1.25,
                marginTop: 16,
                marginBottom: 20,
              }}
            >
              Do interesse ao fechamento. Sem depender de ninguém.
            </h3>
            <p
              className="font-sans"
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              O cliente não avisa quando perde o interesse — ele simplesmente para de responder.
              Uma demora na resposta já foi suficiente para ele seguir em frente. E depois que
              fechou, não receber mais nenhum acompanhamento já foi suficiente para ele se sentir
              mais um. Em nenhum dos dois momentos você soube exatamente onde perdeu.
            </p>
            <Bullets items={bullets2} />
            <ResultRow text="Mais fechamentos. Clientes que voltam." />
          </div>

          {/* Card 3 — Operação */}
          <div
            className={`${cardBase} hover:[border-color:rgba(255,255,255,0.18)] hover:shadow-[0_-12px_40px_-20px_rgba(239,159,39,0.35)]`}
            style={{ ...cardStyle, paddingBottom: 32 }}
          >
            <Eyebrow text="Operação" dot />
            <h3
              className="font-sans"
              style={{
                fontWeight: 800,
                fontSize: 22,
                color: "#fff",
                lineHeight: 1.25,
                marginTop: 16,
                marginBottom: 20,
              }}
            >
              Sua operação funciona. Sem depender de ninguém lembrar.
            </h3>
            <p
              className="font-sans"
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: 24,
              }}
            >
              A informação que não chegou no setor certo. A aprovação que ficou parada porque
              ninguém viu. O relatório não saiu porque alguém esqueceu. O processo que depende
              de uma planilha que três pessoas editam de formas diferentes. Não é falta de
              competência — é o limite natural de qualquer operação que depende só de pessoas.
              Quanto maior a operação, mais caro fica cada falha invisível.
            </p>
            <Bullets items={bullets3} />
            <ResultRow text="Sua operação funciona mesmo quando ninguém está olhando." />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
