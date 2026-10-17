import { motion } from "framer-motion";
import { LogoMark, LogoWord } from "./Logo";
import { Reveal, RevealItem } from "./Reveal";

export function CtaSection() {
  return (
    <section className="relative px-6 md:px-16 py-32 text-center overflow-hidden border-t border-border">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(239,159,39,0.14) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 50% 100%, rgba(239,159,39,0.08) 0%, transparent 60%)",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <LogoMark size={400} />
      </motion.div>

      <Reveal className="relative z-10 max-w-[680px] mx-auto">
        <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-6">
          próximo passo
        </RevealItem>
        <RevealItem
          as="h2"
          className="font-sans font-extrabold text-[clamp(36px,5vw,56px)] tracking-[-0.025em] leading-[1.1] mb-5"
        >
          Seu negócio pode
          <br />
          funcionar <em className="not-italic text-amber text-glow-amber">assim.</em>
        </RevealItem>
        <RevealItem as="p" className="font-sans text-[17px] text-muted-foreground leading-[1.65] mb-10">
          Diagnóstico gratuito. Em uma conversa, mapeamos o que faz mais sentido automatizar primeiro no
          seu caso.
        </RevealItem>
        <RevealItem>
          <a
            href="https://wa.me/5585999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20gratuito"
            className="inline-flex items-center gap-2.5 font-sans font-bold text-[16px] text-white bg-amber-dim rounded-xl px-9 py-4.5 glow-amber-lg hover:-translate-y-0.5 transition-transform"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero um diagnóstico gratuito
          </a>
        </RevealItem>
        <RevealItem className="font-mono text-[10px] tracking-[0.1em] text-dim uppercase mt-5">
          <span className="text-white/35">Diagnóstico inicial gratuito</span>
        </RevealItem>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const navLinks: Array<[string, string]> = [
    ["#problema", "Serviços"],
    ["#segmentos", "Como funciona"],
    ["#processo", "Processo"],
    ["https://wa.me/5585999999999", "Fale conosco"],
  ];

  const contactLinks: Array<[string, string]> = [
    ["mailto:soluaihub@gmail.com", "soluaihub@gmail.com"],
    ["https://wa.me/5585999999999", "WhatsApp"],
  ];

  return (
    <footer className="px-6 md:px-16 pt-16 pb-8 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Left */}
        <div className="flex flex-col gap-4 max-w-[280px]">
          <a href="#hero" className="flex items-center gap-2.5">
            <LogoMark size={24} />
            <LogoWord />
          </a>
          <p className="font-sans text-[14px] leading-[1.55] text-white/45">
            Agência de automação com IA
            <br />
            para empresas brasileiras.
          </p>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/35 mb-1">
              Navegação
            </h4>
            {navLinks.map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="font-sans text-[14px] text-white/55 hover:text-white no-underline transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-[10px] tracking-[0.12em] uppercase text-white/35 mb-1">
              Contato
            </h4>
            {contactLinks.map(([href, label]) => (
              <a
                key={label}
                href={href}
                className="font-sans text-[14px] text-white/55 hover:text-white no-underline transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/[0.08]">
        <p className="font-sans text-[12px] text-white/25 text-center">
          © 2026 SoluAI · Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
