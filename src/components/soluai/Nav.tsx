import { LogoMark, LogoWord } from "./Logo";

export function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-16 px-6 md:px-16 flex items-center justify-between border-b border-border bg-background/85 backdrop-blur-xl">
      <a href="#hero" className="flex items-center gap-2.5 no-underline">
        <LogoMark size={24} animated />
        <LogoWord />
      </a>
      <div className="hidden md:flex items-center gap-8">
        {[
          ["#problema", "Como funciona"],
          ["#segmentos", "Para quem"],
          ["#processo", "Processo"],
          ["#modelo", "Modelo"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-sm text-muted-foreground hover:text-white transition-colors tracking-[0.01em]"
          >
            {label}
          </a>
        ))}
      </div>
      <a
        href="https://wa.me/5585999999999"
        className="font-sans font-semibold text-[13px] text-white bg-amber-dim rounded-lg px-5 py-2.5 glow-amber hover:opacity-85 transition-opacity"
      >
        Falar com a equipe
      </a>
    </nav>
  );
}
