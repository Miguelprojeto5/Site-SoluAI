import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  amount?: number;
}

export function Reveal({ children, className, as = "div", amount = 0.2 }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "h1" | "h2" | "p" | "span";
}) {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}
