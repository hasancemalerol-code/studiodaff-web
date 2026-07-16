"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "zoom";
  delay?: number;
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
}: RevealProps) {

  let x = 0;
  let y = 0;
  let scale = 1;

  if (direction === "up") y = 60;
  if (direction === "down") y = -60;
  if (direction === "left") x = -60;
  if (direction === "right") x = 60;
  if (direction === "zoom") scale = 0.9;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}