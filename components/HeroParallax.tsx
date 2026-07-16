"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./HeroParallax.css";

export default function HeroParallax() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {

    const move = (e: MouseEvent) => {

      const x =
        (e.clientX / window.innerWidth - 0.5) * 12;

      const y =
        (e.clientY / window.innerHeight - 0.5) * -12;

      mouseX.set(x);
      mouseY.set(y);

    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener(
        "mousemove",
        move
      );

  }, [mouseX, mouseY]);

  return (

    <motion.div

      className="hero-parallax"

      style={{
        rotateX,
        rotateY,
      }}

    >

      <div className="parallax-circle one" />

      <div className="parallax-circle two" />

      <div className="parallax-circle three" />

    </motion.div>

  );

}