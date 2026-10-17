import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { Reveal, RevealItem } from "./Reveal";

interface ResultData {
  num: string;
  numColor?: "amber" | "blue";
  title: string;
  desc: string;
  progress: number;
  glowSide: "left" | "right" | "top";
}

const results: ResultData[] = [
  {
    num: "24h",
    title: "Atendimento que nunca dorme",
    desc: "O WhatsApp continua respondendo às 23h de sexta-feira. Leads qualificados, perguntas respondidas, agendamentos feitos — sem você precisar estar disponível.",
    progress: 85,
    glowSide: "right",
  },
  {
    num: "Zero",
    numColor: "blue",
    title: "Leads perdidos por falta de follow-up",
    desc: "Cada lead recebe contato automático no timing certo. Ninguém cai no esquecimento. O processo de vendas acontece mesmo quando sua equipe está ocupada com outra coisa.",
    progress: 70,
    glowSide: "left",
  },
  {
    num: "12h",
    title: "Devolvidas toda semana",
    desc: "Relatórios, cobranças de documentos, lembretes, atualizações de status — tudo que era feito manualmente passa a acontecer sozinho. Você usa esse tempo para crescer.",
    progress: 92,
    glowSide: "top",
  },
];

function ResultCard({ data, index }: { data: ResultData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 18 });
  const sy = useSpring(y, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(sy, [-50, 50], [4, -4]);
  const rotateY = useTransform(sx, [-50, 50], [-4, 4]);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }
  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const glowBg =
    data.glowSide === "right"
      ? "radial-gradient(ellipse 50% 80% at 90% 50%, rgba(239,159,39,0.12) 0%, transparent 70%)"
      : data.glowSide === "left"
        ? "radial-gradient(ellipse 50% 80% at 10% 50%, rgba(55,138,221,0.14) 0%, transparent 70%)"
        : "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(239,159,39,0.10) 0%, transparent 70%)";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className="border-gradient p-9 md:p-10 relative overflow-hidden group"
      variants={{
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1 } },
      }}
    >
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: glowBg }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: glowBg, filter: "blur(20px)" }}
      />

      <div
        className={`relative font-extrabold text-[56px] tracking-[-0.03em] leading-none mb-3 ${
          data.numColor === "blue" ? "text-blue-mid" : "text-amber"
        }`}
        style={
          data.numColor === "blue"
            ? { textShadow: "0 0 30px rgba(55,138,221,0.4)" }
            : { textShadow: "0 0 30px rgba(239,159,39,0.4)" }
        }
      >
        {data.num}
      </div>
      <div className="relative font-sans font-semibold text-[20px] text-white mb-2">{data.title}</div>
      <div className="relative font-sans text-[15px] text-muted-foreground leading-[1.65] max-w-[600px]">
        {data.desc}
      </div>

      <div className="relative h-0.5 bg-white/[0.06] rounded mt-7 overflow-hidden">
        <motion.div
          className="h-full rounded"
          style={{
            background: data.numColor === "blue" ? "var(--blue-mid)" : "var(--amber)",
            boxShadow:
              data.numColor === "blue"
                ? "0 0 12px rgba(55,138,221,0.6)"
                : "0 0 12px rgba(239,159,39,0.6)",
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${data.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

export function ResultsSection() {
  return (
    <section className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-2.5">
            Resultados
          </RevealItem>
          <RevealItem
            as="h2"
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.1] mb-4"
          >
            O que muda
            <br />
            no seu dia
          </RevealItem>
        </Reveal>

        <Reveal className="flex flex-col gap-4 mt-16">
          {results.map((r, i) => (
            <ResultCard key={i} data={r} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
