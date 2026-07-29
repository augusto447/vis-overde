import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  id?: string;
  className?: string;
}

export function SectionReveal({
  children,
  delay = 0,
  id,
  className,
}: SectionRevealProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
    >
      {children}
    </motion.div>
  );
}
