import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, RevealItem } from "./Reveal";

const steps = [
  {
    num: "Etapa 01 · Diagnóstico",
    title: "Mapeamos o que dói mais.",
    desc: "Você nos conta como seu negócio funciona hoje, quais processos consomem mais tempo, onde estão os gargalos, o que se repete toda semana. Saímos com um plano de automação feito para o seu negócio.",
  },
  {
    num: "Etapa 02 · Construção",
    title: "Construímos e testamos.",
    desc: "Os agentes e automações são configurados, testados e integrados com as ferramentas que você já usa. Você tem a palavra final antes de tudo entrar em produção.",
  },
  {
    num: "Etapa 03 · Operação",
    title: "No ar. E evoluindo.",
    desc: "Depois que vai ao ar, a SoluAI monitora, mantém e evolui o que foi construído. Você tem um canal direto para acionar quando precisar.",
  },
];

const logSeed = [
  { t: "08:42:01", agent: "WhatsApp", msg: "Lead qualificado · Maria S. · agendamento confirmado" },
  { t: "08:42:14", agent: "SDR", msg: "Follow-up enviado · Cliente João P. · D+3" },
  { t: "08:42:27", agent: "Agendamento", msg: "Slot 14:30 reservado · clínica · Dr. Silva" },
  { t: "08:42:39", agent: "CRM", msg: "Status atualizado · Lead #3471 → Qualificado" },
  { t: "08:42:51", agent: "Relatórios", msg: "Sumário diário · 847 ações · 98% uptime" },
  { t: "08:43:04", agent: "WhatsApp", msg: "Resposta automática · 12s tempo médio" },
  { t: "08:43:18", agent: "SDR", msg: "Cadência iniciada · 86 leads na fila" },
  { t: "08:43:32", agent: "Agendamento", msg: "Lembrete enviado · 24h antes · 23 pacientes" },
  { t: "08:43:46", agent: "CRM", msg: "Pipeline movido · 4 oportunidades · estágio 3" },
  { t: "08:44:00", agent: "WhatsApp", msg: "Triagem concluída · cardiologia · próximo: agendar" },
];

function agentColor(a: string) {
  switch (a) {
    case "WhatsApp":
      return "text-[#38B48B]";
    case "SDR":
      return "text-amber";
    case "Agendamento":
      return "text-blue-mid";
    case "CRM":
      return "text-amber";
    case "Relatórios":
      return "text-white/60";
    default:
      return "text-white/60";
  }
}

function LiveLogs() {
  const [logs, setLogs] = useState(logSeed.slice(0, 6));
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((c) => {
        const next = logSeed[c % logSeed.length];
        // increment time
        const base = next.t;
        const stamped = { ...next, t: base, _k: c };
        setLogs((prev) => [...prev.slice(-7), stamped as typeof next]);
        return c + 1;
      });
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border-t border-border">
      <div className="flex items-center justify-between px-5 py-3 bg-white/[0.02]">
        <div className="font-mono text-[10px] tracking-[0.12em] text-dim uppercase">
          stream · live engine
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-blink shadow-[0_0_6px_#EF9F27]" />
          <span className="font-mono text-[10px] text-amber/70 tracking-[0.08em]">streaming</span>
        </div>
      </div>
      <div className="relative h-[180px] overflow-hidden bg-[#0d1015]">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0d1015] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0d1015] to-transparent z-10 pointer-events-none" />
        <div className="px-5 py-2 flex flex-col-reverse">
          <AnimatePresence initial={false}>
            {logs.map((l, i) => (
              <motion.div
                key={`${l.t}-${i}-${(l as { _k?: number })._k ?? ""}`}
                layout
                initial={{ opacity: 0, y: -8, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[11px] py-1 flex gap-3 whitespace-nowrap overflow-hidden"
              >
                <span className="text-dim shrink-0">{l.t}</span>
                <span className={`${agentColor(l.agent)} shrink-0 w-[88px]`}>[{l.agent}]</span>
                <span className="text-white/55 truncate">{l.msg}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const [actions, setActions] = useState(847);
  const [msgs, setMsgs] = useState(1240);

  useEffect(() => {
    const id = setInterval(() => {
      setActions((a) => a + Math.floor(Math.random() * 3));
      setMsgs((m) => m + Math.floor(Math.random() * 2));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  const chartData = [35, 52, 48, 68, 82, 75, 90, 95];

  const agents = [
    { name: "Agente WhatsApp", count: `${msgs.toLocaleString("pt-BR")} msgs`, status: "ativo" as const },
    { name: "SDR Automático", count: "86 follow-ups", status: "ativo" as const },
    { name: "Agendamento Inteligente", count: "23 slots", status: "busy" as const },
    { name: "Relatórios Automáticos", count: "próx: 08:00", status: "ativo" as const },
  ];

  return (
    <div className="border-gradient overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-white/[0.02]">
        <div className="font-mono text-[10px] tracking-[0.12em] text-dim uppercase">
          Painel SoluAI · operações
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38B48B] animate-blink shadow-[0_0_8px_#38B48B]" />
          <span className="font-mono text-[10px] text-[#38B48B]/80 tracking-[0.08em]">
            todos os agentes ativos
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-px bg-border">
        <div className="bg-card px-4 py-4">
          <div className="font-extrabold text-[22px] tracking-[-0.02em] tabular-nums">{actions}</div>
          <div className="font-mono text-[9px] tracking-[0.08em] text-dim uppercase mt-1">Ações hoje</div>
        </div>
        <div className="bg-card px-4 py-4">
          <div className="font-extrabold text-[22px] tracking-[-0.02em]">
            98<span className="text-amber text-[16px]">%</span>
          </div>
          <div className="font-mono text-[9px] tracking-[0.08em] text-dim uppercase mt-1">Uptime</div>
        </div>
        <div className="bg-card px-4 py-4">
          <div className="font-extrabold text-[22px] tracking-[-0.02em] tabular-nums">34</div>
          <div className="font-mono text-[9px] tracking-[0.08em] text-dim uppercase mt-1">
            Leads qualif.
          </div>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-border">
        <div className="font-mono text-[9px] tracking-[0.12em] text-dim uppercase mb-3">
          agentes em execução
        </div>
        {agents.map((a, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-2.5 ${
              i < agents.length - 1 ? "border-b border-white/[0.04]" : ""
            }`}
          >
            <div className="font-sans text-[13px] text-white/70">{a.name}</div>
            <div className="flex items-center gap-3">
              <div className="font-mono text-[11px] text-white/35 tabular-nums">{a.count}</div>
              <span
                className={`font-mono text-[9px] tracking-[0.08em] px-2 py-0.5 rounded ${
                  a.status === "ativo"
                    ? "bg-[#38B48B]/[0.12] text-[#38B48B]/80 border border-[#38B48B]/20"
                    : "bg-amber/10 text-amber border border-amber/20"
                }`}
              >
                {a.status === "ativo" ? "ativo" : "processando"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-4 border-t border-border">
        <div className="font-mono text-[9px] tracking-[0.12em] text-dim uppercase mb-3">
          atividade · últimas 8h
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {chartData.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-sm"
              style={{
                background:
                  i === chartData.length - 1
                    ? "var(--amber)"
                    : i >= chartData.length - 3
                      ? "rgba(239,159,39,0.4)"
                      : "rgba(255,255,255,0.08)",
                boxShadow: i === chartData.length - 1 ? "0 0 12px rgba(239,159,39,0.5)" : undefined,
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </div>

      <LiveLogs />
    </div>
  );
}

export function ProcessoSection() {
  return (
    <section id="processo" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-2.5">
            Processo
          </RevealItem>
          <RevealItem
            as="h2"
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.1] mb-4"
          >
            Do diagnóstico ao ar.
          </RevealItem>
          <RevealItem
            as="p"
            className="font-sans text-[17px] text-muted-foreground leading-[1.65] max-w-[600px]"
          >
            Você nos conta como seu negócio funciona. A gente cuida do resto.
          </RevealItem>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <Reveal>
            <div className="flex flex-col">
              {steps.map((s, i) => (
                <RevealItem key={i} className="flex gap-6 pb-12 last:pb-0 relative">
                  <div className="flex flex-col items-center w-5 shrink-0">
                    <div className="w-5 h-5 rounded-full border-2 border-amber bg-background flex items-center justify-center shadow-[0_0_12px_rgba(239,159,39,0.4)] z-10">
                      <div className="w-2 h-2 rounded-full bg-amber" />
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-0.5 flex-1 my-1"
                        style={{
                          background: "linear-gradient(to bottom, var(--amber), rgba(239,159,39,0.15))",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.14em] text-amber uppercase mb-1.5">
                      {s.num}
                    </div>
                    <div className="font-sans font-bold text-[18px] tracking-[-0.01em] mb-2">
                      {s.title}
                    </div>
                    <div className="font-sans text-[14px] text-muted-foreground leading-[1.7]">
                      {s.desc}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <RevealItem>
              <Dashboard />
            </RevealItem>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
