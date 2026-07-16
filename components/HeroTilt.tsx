"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import "./HeroTilt.css";

type HeroTiltProps = {
  children: React.ReactNode;
};

export default function HeroTilt({
  children,
}: HeroTiltProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect =
      ref.current.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    const rotateYValue =
      ((x / rect.width) - 0.5) * 16;

    const rotateXValue =
      -((y / rect.height) - 0.5) * 16;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="hero-tilt"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}