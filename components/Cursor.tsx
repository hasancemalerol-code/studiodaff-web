"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./Cursor.css";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const x = useSpring(cursorX, {
    stiffness: 600,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(cursorY, {
    stiffness: 600,
    damping: 35,
    mass: 0.2,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "a,button,.gallery-card,.service-card,.before-after-card"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${hover ? "hover" : ""}`}
      style={{
        x,
        y,
      }}
    >
      <div className="cursor-dot" />
    </motion.div>
  );
}