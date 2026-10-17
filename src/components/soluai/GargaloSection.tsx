import { motion, type Variants } from "framer-motion";

const group1 = [
  { time: "08:14", text: "lead entrou no WhatsApp" },
  { time: "08:15", text: "você estava atendendo outro cliente" },
  { time: "09:47", text: 'lead mandou "oi?" de novo' },
  { time: "10:23", text: "lead sumiu" },
];

const group2 = [
  { time: "14:07", text: "orçamento solicitado" },
  { time: "14:35", text: "você ia responder depois do almoço" },
  { time: "17:00", text: "expediente encerrou" },
  { time: "17:01", text: "orçamento ainda não enviado" },
];

const group3Top = [{ time: "18:10", text: "follow-up? ficou pra depois" }];
const group3Days = [
  { day: "seg", text: "mesma coisa" },
  { day: "ter", text: "mesma coisa" },
  { day: "qua", text: "mesma coisa" },
];

const fade: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

function Line({ time, day, text }: { time?: string; day?: string; text: string }) {
  return (
    <motion.div variants={fade} className="flex gap-3 leading-[1.9]">
      {time && <span style={{ color: "#EF9F27" }}>{time}</span>}
      {day && <span style={{ color: "rgba(239,159,39,0.5)" }}>{day}</span>}
      <span style={{ color: "rgba(255,255,255,0.70)" }}>›</span>
      <span style={{ color: "rgba(255,255,255,0.70)" }}>{text}</span>
    </motion.div>
  );
}

export function GargaloSection() {
  return (
    <section id="gargalo" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div>
          <div
            className="font-mono uppercase mb-4"
            style={{ fontSize: 10, letterSpacing: "0.16em", color: "rgba(255,255,255,0.25)" }}
          >
            O DIAGNÓSTICO
          </div>
          <h2
            className="font-sans mb-6"
            style={{ fontWeight: 800, fontSize: 48, letterSpacing: "-0.02em", color: "#fff", lineHeight: 1.1 }}
          >
            O gargalo invisível
          </h2>
          <p className="mb-5" style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Não é falta de esforço. É que nenhum negócio consegue estar em todos os lugares ao mesmo tempo — e toda vez que não está, alguma coisa escapa.
          </p>
          <p className="mb-5" style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Cada lead que não respondeu. Cada orçamento que ficou pra depois. Cada follow-up que não aconteceu.
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            Não foi descuido. É o limite natural de qualquer operação que depende só de pessoas.
          </p>
        </div>

        {/* RIGHT — Terminal */}
        <div
          style={{
            background: "#0d0f13",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 12,
            fontFamily: "var(--font-mono)",
          }}
        >
          {/* Top bar */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
          >
            <span className="w-3 h-3 rounded-full" style={{ background: "#E24B4A" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#EF9F27" }} />
            <span className="w-3 h-3 rounded-full" style={{ background: "#27C93F" }} />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginLeft: 8 }}>
              diagnóstico do sistema
            </span>
          </div>

          {/* Content */}
          <div className="p-6" style={{ fontSize: 13 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="mb-4"
            >
              {group1.map((l, i) => (
                <Line key={i} {...l} />
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="mb-4"
            >
              {group2.map((l, i) => (
                <Line key={i} {...l} />
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="mb-4"
            >
              {group3Top.map((l, i) => (
                <Line key={i} {...l} />
              ))}
              <div className="h-3" />
              {group3Days.map((l, i) => (
                <Line key={i} {...l} />
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 } },
              } satisfies Variants}
            >
              <div style={{ color: "rgba(255,255,255,0.25)", lineHeight: 1.9 }}>—</div>
              <div style={{ lineHeight: 1.9 }}>
                <span style={{ color: "#ffffff" }}>enquanto isso, o lead já fechou com outro. </span>
                <motion.span
                  style={{ color: "#EF9F27" }}
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                >
                  █
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
