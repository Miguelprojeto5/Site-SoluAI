"use client";

import React, { useState } from "react";
import soluaiLogo from "@/assets/soluai-logo.svg";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Metric {
  value: string;
  accent?: string;
  label: string;
}

interface ResponsiveHeroBannerProps {
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  metricsTitle?: string;
  metrics?: Metric[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoUrl = soluaiLogo,
  backgroundImageUrl = "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg",
  navLinks = [
    { label: "Como funciona", href: "#problema" },
    { label: "Para quem", href: "#segmentos" },
    { label: "Processo", href: "#processo" },
    { label: "Modelo", href: "#modelo" },
  ],
  ctaButtonText = "Falar com a equipe",
  ctaButtonHref = "https://wa.me/5511940565246",
  badgeLabel = "AGÊNCIA NATIVA DE IA",
  badgeText = "",
  title = "Seu negócio",
  titleLine2 = "funcionando.",
  titleLine3 = "Sem você no meio.",
  description = "Atendimento, vendas e processos rodando — mesmo quando você não está.",
  primaryButtonText = "Ver como funciona",
  primaryButtonHref = "#processo",
  secondaryButtonText = "Falar com a equipe",
  secondaryButtonHref = "https://wa.me/5511940565246",
  metricsTitle = "Resultados em produção",
  metrics = [
    { value: "+340", label: "Processos automatizados" },
    { value: "98", accent: "%", label: "Uptime dos agentes" },
    { value: "12h", label: "Economizadas / semana" },
  ],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden bg-[var(--bg-0)] text-[var(--text-100)]">
      <img
        src={backgroundImageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(9,9,11,0.55) 0%, rgba(9,9,11,0.4) 35%, rgba(9,9,11,0.9) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(239,159,39,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(24,95,165,0.14) 0%, transparent 60%)",
        }}
      />

      <header className="relative md:fixed md:top-0 md:inset-x-0 md:z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#hero" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <svg width="28" height="28" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="9" fill="#EF9F27" />
              <line x1="40" y1="31" x2="40" y2="16" stroke="rgba(239,159,39,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="40" y1="49" x2="40" y2="64" stroke="rgba(239,159,39,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="31" y1="40" x2="16" y2="40" stroke="rgba(239,159,39,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="49" y1="40" x2="64" y2="40" stroke="rgba(239,159,39,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="40" cy="13" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
              <circle cx="40" cy="67" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
              <circle cx="13" cy="40" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
              <circle cx="67" cy="40" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
            </svg>
            <span style={{ fontWeight: 800, fontSize: "20px", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#fff" }}>Solu</span><span style={{ color: "#EF9F27", fontWeight: 400, fontStyle: "italic" }}>AI</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full bg-white/5 px-2 py-2 ring-1 ring-white/10 backdrop-blur-md md:flex">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  link.isActive
                    ? "bg-white text-[var(--bg-0)]"
                    : "text-[var(--text-200)] hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaButtonHref}
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--amber-dim)] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--amber-dim),0_0_24px_var(--amber-glow)] transition-transform hover:-translate-y-0.5"
            >
              {ctaButtonText}
              <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d={mobileMenuOpen ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="mx-6 mt-2 rounded-2xl bg-black/70 p-4 ring-1 ring-white/10 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="rounded-lg px-4 py-2.5 text-sm text-[var(--text-200)] hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--amber-dim)] px-4 py-2.5 text-sm font-semibold text-white"
              >
                {ctaButtonText}
              </a>
            </div>
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-16 lg:px-10 lg:pt-24 lg:pb-32">
        <div className="max-w-3xl" style={{ animation: "fadeSlideIn 0.9s cubic-bezier(0.22,1,0.36,1) both" }}>
          <h1
            className="mt-7 text-[clamp(44px,7vw,96px)] font-normal leading-[0.98] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {title}
            <br />
            <em className="not-italic text-[var(--amber)]" style={{ textShadow: "0 0 28px rgba(239,159,39,0.45)" }}>
              {titleLine2}
            </em>
            {titleLine3 && (
              <>
                <br />
                <span className="text-white/25">{titleLine3}</span>
              </>
            )}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-300)] sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={primaryButtonHref}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--amber-dim)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_0_1px_var(--amber-dim),0_0_40px_var(--amber-glow)] transition-transform hover:-translate-y-0.5"
            >
              {primaryButtonText}
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              {secondaryButtonText}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
