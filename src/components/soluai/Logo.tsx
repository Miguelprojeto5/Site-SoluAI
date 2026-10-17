import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  animated?: boolean;
}

export function LogoMark({ size = 24, animated = false }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFC56B" />
          <stop offset="60%" stopColor="#EF9F27" />
          <stop offset="100%" stopColor="#C96A1A" />
        </radialGradient>
        <filter id="coreFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        cx="40"
        cy="40"
        r="9"
        fill="url(#coreGlow)"
        filter="url(#coreFilter)"
        className={animated ? "animate-pulse-core" : ""}
      />
      <line x1="40" y1="31" x2="40" y2="16" stroke="rgba(239,159,39,0.55)" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="49" x2="40" y2="64" stroke="rgba(239,159,39,0.55)" strokeWidth="2" strokeLinecap="round" />
      <line x1="31" y1="40" x2="16" y2="40" stroke="rgba(239,159,39,0.55)" strokeWidth="2" strokeLinecap="round" />
      <line x1="49" y1="40" x2="64" y2="40" stroke="rgba(239,159,39,0.55)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="13" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
      <circle cx="40" cy="67" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
      <circle cx="13" cy="40" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
      <circle cx="67" cy="40" r="5" fill="none" stroke="#EF9F27" strokeWidth="1.5" />
    </svg>
  );
}

export function LogoWord() {
  return (
    <div className="font-sans font-extrabold text-[20px] tracking-[-0.02em]">
      <span className="text-white">Solu</span>
      <span className="text-amber italic font-normal">AI</span>
    </div>
  );
}

export function HeroSymbol() {
  // SVG with animated pulse along connection lines
  const lines = [
    { x1: 40, y1: 31, x2: 40, y2: 16 },
    { x1: 40, y1: 49, x2: 40, y2: 64 },
    { x1: 31, y1: 40, x2: 16, y2: 40 },
    { x1: 49, y1: 40, x2: 64, y2: 40 },
  ];

  return (
    <div className="relative w-[320px] h-[320px] flex items-center justify-center">
      {/* radial glow */}
      <div className="absolute -inset-10 rounded-full radial-amber blur-2xl" />
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(239,159,39,0.18) 0%, rgba(239,159,39,0.04) 35%, transparent 65%)",
        }}
      />

      <svg width="280" height="280" viewBox="0 0 80 80" fill="none" className="relative">
        <defs>
          <radialGradient id="heroCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE0A8" />
            <stop offset="50%" stopColor="#EF9F27" />
            <stop offset="100%" stopColor="#C96A1A" />
          </radialGradient>
          <filter id="heroCoreFilter" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="connGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(239,159,39,0.1)" />
            <stop offset="50%" stopColor="rgba(239,159,39,0.7)" />
            <stop offset="100%" stopColor="rgba(239,159,39,0.1)" />
          </linearGradient>
        </defs>

        {/* diagonal faint connectors */}
        {[
          { x1: 34, y1: 34, x2: 22, y2: 22 },
          { x1: 46, y1: 34, x2: 58, y2: 22 },
          { x1: 34, y1: 46, x2: 22, y2: 58 },
          { x1: 46, y1: 46, x2: 58, y2: 58 },
        ].map((l, i) => (
          <g key={`diag-${i}`}>
            <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(239,159,39,0.18)" strokeWidth="1" strokeLinecap="round" />
            <motion.line
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="#EF9F27"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="2 14"
              animate={{ strokeDashoffset: [0, -16] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.25 }}
              style={{ filter: "drop-shadow(0 0 3px #EF9F27)", opacity: 0.65 }}
            />
          </g>
        ))}

        {/* primary connections — base + animated pulse */}
        {lines.map((l, i) => (
          <g key={i}>
            <line
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="rgba(239,159,39,0.5)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <motion.line
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke="#EF9F27"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="3 17"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
              style={{ filter: "drop-shadow(0 0 4px #EF9F27)" }}
            />
          </g>
        ))}

        {/* satellites */}
        {[
          { cx: 40, cy: 13 },
          { cx: 40, cy: 67 },
          { cx: 13, cy: 40 },
          { cx: 67, cy: 40 },
        ].map((s, i) => (
          <motion.circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r="5"
            fill="none"
            stroke="#EF9F27"
            strokeWidth="1.5"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            style={{ filter: "drop-shadow(0 0 6px rgba(239,159,39,0.6))", transformOrigin: `${s.cx}px ${s.cy}px` }}
          />
        ))}

        {/* core */}
        <circle
          cx="40"
          cy="40"
          r="9"
          fill="url(#heroCoreGlow)"
          filter="url(#heroCoreFilter)"
          className="animate-pulse-core"
        />
      </svg>
    </div>
  );
}
