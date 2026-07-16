"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background:
          "linear-gradient(90deg,#D4AF37,#F7E7A1,#D4AF37)",
        zIndex: 99999,
        boxShadow: "0 0 12px rgba(212,175,55,.8)",
      }}
    />
  );
}