import { Reveal, RevealItem } from "./Reveal";

const alerts = [
  { c: "r", t: "WhatsApp sem resposta desde às 18h" },
  { c: "y", t: "Lead qualificado esperando retorno há 3 dias" },
  { c: "r", t: "Proposta que ninguém enviou ainda" },
  { c: "y", t: "Relatório feito na mão toda segunda-feira" },
  { c: "r", t: "Agendamento marcado errado de novo" },
  { c: "y", t: "Cliente sumiu após o primeiro contato" },
  { c: "r", t: "Follow-up que ficou pra amanhã e nunca saiu" },
  { c: "y", t: "Reunião que poderia ser uma mensagem" },
  { c: "r", t: "Documento perdido no e-mail de alguém" },
  { c: "y", t: "Aprovação esperando o gestor responder" },
];

const stack = [
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp/25D366" },
  { name: "Telegram", logo: "https://cdn.simpleicons.org/telegram/26A5E4" },
  { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/ffffff" },
  { name: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic/ffffff" },
  { name: "Google", logo: "https://cdn.simpleicons.org/google/4285F4" },
  { name: "Gemini", logo: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
  { name: "Meta", logo: "https://cdn.simpleicons.org/meta/0467DF" },
  { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Make", logo: "https://cdn.simpleicons.org/make/6D00CC" },
  { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00" },
  { name: "Groq", logo: "https://cdn.simpleicons.org/groq/ffffff" },
  { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59" },
];

export function ProblemaSection() {
  return (
    <section id="problema" className="px-6 md:px-16 py-24 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <RevealItem className="font-mono text-[10px] tracking-[0.16em] text-dim uppercase mb-2.5">
            Reconhecimento
          </RevealItem>
          <RevealItem
            as="h2"
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.025em] leading-[1.1] mb-4"
          >
            Parece familiar?
          </RevealItem>
          <RevealItem
            as="p"
            className="font-sans text-[17px] text-muted-foreground leading-[1.65] max-w-[600px]"
          >
            Cada item abaixo é um processo que está acontecendo agora no seu negócio — e que não deveria
            precisar de você para funcionar.
          </RevealItem>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6">
          <div>
            <div className="font-mono text-[9px] tracking-[0.14em] text-dim uppercase mb-3">
              alertas ativos · sistema monitorando
            </div>
            <Marquee speed="fast">
              {[...alerts, ...alerts].map((a, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-card border border-border rounded-lg px-3.5 py-2.5 whitespace-nowrap"
                >
                  <span
                    className="w-[7px] h-[7px] rounded-full shrink-0"
                    style={{
                      background: a.c === "r" ? "var(--danger)" : "var(--amber)",
                      boxShadow: `0 0 6px ${a.c === "r" ? "var(--danger)" : "var(--amber)"}`,
                    }}
                  />
                  <span className="font-mono text-[11px] text-white/50 tracking-[0.04em]">{a.t}</span>
                </div>
              ))}
            </Marquee>
          </div>

          <div>
            <div className="font-mono text-[9px] tracking-[0.14em] text-dim uppercase mb-3">
              stack tecnológico · parceiros certificados
            </div>
            <Marquee speed="slow">
              {[...stack, ...stack].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-card border border-border hover:border-border-hi hover:bg-card-elevated rounded-lg px-4 py-2.5 whitespace-nowrap transition-colors group"
                >
                  {item.name === "OpenAI" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.1 14.518A4.5 4.5 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.372L15.115 7.2a.076.076 0 0 1 .071 0l4.718 2.723a4.5 4.5 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.391-.699zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.713-2.72a4.5 4.5 0 0 1 6.678 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                  ) : item.name === "Groq" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F55036" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z"/></svg>
                  ) : (
                    <img src={item.logo} alt={item.name} style={{ height: 16, width: "auto" }} />
                  )}
                  <span className="font-sans font-semibold text-[12px] text-white/30 group-hover:text-white/65 tracking-[0.02em] transition-colors">
                    {item.name}
                  </span>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee({ children, speed }: { children: React.ReactNode; speed: "fast" | "slow" }) {
  return (
    <div className="relative overflow-hidden marquee-pause">
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />
      <div
        className={`flex gap-2.5 w-max ${speed === "fast" ? "animate-marquee" : "animate-marquee-slow"}`}
      >
        {children}
      </div>
    </div>
  );
}
