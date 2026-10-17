import { motion } from "framer-motion";
import { HeroSymbol } from "./Logo";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-20 overflow-hidden">
      {/* atmospheric background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(239,159,39,0.09) 0%, transparent 65%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(24,95,165,0.06) 0%, transparent 60%)",
        }}
      />
      {/* subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-amber/[0.08] border border-amber/20 rounded-full pl-2.5 pr-4 py-1.5 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-blink shadow-[0_0_8px_#EF9F27]" />
            <span className="font-mono text-[11px] tracking-[0.08em] text-amber">
              sistema operando · última ação há 2s
            </span>
          </motion.div>

          <h1 className="font-sans font-extrabold text-[clamp(42px,5vw,64px)] tracking-[-0.03em] leading-[1.05] mb-2">
            Seu negócio
            <br />
            <span className="text-amber text-glow-amber">funcionando.</span>
            <br />
            <span className="text-white/[0.22]">Sem você no meio.</span>
          </h1>

          <p className="text-[18px] text-muted-foreground leading-[1.65] max-w-[500px] mt-5 mb-10">
            Atendimento, vendas e processos rodando — mesmo quando você não está.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#processo"
              className="font-sans font-semibold text-[15px] text-white bg-amber-dim rounded-[10px] px-7 py-3.5 glow-amber-lg hover:-translate-y-0.5 transition-transform"
            >
              Ver como funciona
            </a>
            <a
              href="https://wa.me/5585999999999"
              className="font-sans font-medium text-[15px] text-muted-foreground hover:text-white bg-white/[0.04] hover:bg-white/[0.07] border border-border-hi rounded-[10px] px-7 py-3.5 transition-colors"
            >
              Falar com a equipe
            </a>
          </div>

          <div className="grid grid-cols-3 border-t border-border mt-12 max-w-[500px]">
            {[
              ["+340", "Processos automatizados"],
              ["98%", "Uptime dos agentes", true],
              ["12h", "Economizadas / semana"],
            ].map(([num, lbl], i) => (
              <div
                key={i}
                className={`py-5 ${i < 2 ? "border-r border-border" : ""} ${i > 0 ? "pl-6" : ""}`}
              >
                <div className="font-extrabold text-[28px] tracking-[-0.02em] text-white">
                  {String(num).includes("%") ? (
                    <>
                      {String(num).replace("%", "")}
                      <span className="text-amber">%</span>
                    </>
                  ) : (
                    num
                  )}
                </div>
                <div className="font-mono text-[9px] tracking-[0.1em] text-dim uppercase mt-1">{lbl}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroSymbol />
        </motion.div>
      </div>
    </section>
  );
}
