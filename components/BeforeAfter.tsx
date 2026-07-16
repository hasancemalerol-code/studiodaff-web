"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./BeforeAfter.css";

type CardProps = {
  title: string;
  before: string;
  after: string;
};

function BeforeAfterCard({
  title,
  before,
  after,
}: CardProps) {

  const containerRef = useRef<HTMLDivElement>(null);

  const animationRef =  useRef<number | null>(null);

  const dragging = useRef(false);

  const direction = useRef(1);

  const [position, setPosition] = useState(50);

  const [hovered, setHovered] = useState(false);

  const updateSlider = (clientX: number) => {

    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    let x = clientX - rect.left;

    if (x < 0) x = 0;

    if (x > rect.width) x = rect.width;

    setPosition((x / rect.width) * 100);
  };

  const mouseMove = (e: MouseEvent) => {

    if (!dragging.current) return;

    updateSlider(e.clientX);

  };

  const touchMove = (e: TouchEvent) => {

    if (!dragging.current) return;

    updateSlider(e.touches[0].clientX);

  };

  useEffect(() => {

    window.addEventListener(
      "mousemove",
      mouseMove
    );

    window.addEventListener(
      "mouseup",
      () => (dragging.current = false)
    );

    window.addEventListener(
      "touchmove",
      touchMove
    );

    window.addEventListener(
      "touchend",
      () => (dragging.current = false)
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        mouseMove
      );

      window.removeEventListener(
        "touchmove",
        touchMove
      );

    };

  }, []);

  useEffect(() => {

    if (hovered) return;

    const animate = () => {

      setPosition((prev) => {

        let next =
          prev + direction.current * 0.25;

        if (next >= 82) {

          direction.current = -1;

          next = 82;

        }

        if (next <= 18) {

          direction.current = 1;

          next = 18;

        }

        return next;

      });

      animationRef.current =
        requestAnimationFrame(animate);

    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {

      if (animationRef.current)
        cancelAnimationFrame(animationRef.current);

    };

  }, [hovered]);

  return (

    <motion.div

      className="ba-card"

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: .8,
      }}

      viewport={{
        once: true,
      }}

    >

      <h3>{title}</h3>

      <div

        ref={containerRef}

        className="ba-slider"

        onMouseEnter={() =>
          setHovered(true)
        }

        onMouseLeave={() =>
          setHovered(false)
        }

        onMouseDown={(e) => {

          dragging.current = true;

          updateSlider(e.clientX);

        }}

        onTouchStart={(e) => {

          dragging.current = true;

          updateSlider(
            e.touches[0].clientX
          );

        }}

      >

        <img

          src={before}

          alt="Before"

          className="before"

        />

        <div

          className="after-wrapper"

          style={{
            width: `${position}%`,
          }}

        >

          <img

            src={after}

            alt="After"

            className="after"

          />

        </div>

        <div

          className="divider"

          style={{
            left: `${position}%`,
          }}

        >

          <div className="handle">

            ↔

          </div>

        </div>

        <span className="label left">

          ÖNCE

        </span>

        <span className="label right">

          SONRA

        </span>
              </div>

    </motion.div>

  );

}

export default function BeforeAfter() {

  return (

    <section className="before-after" id="before-after">

      <motion.div

        className="section-title"

        initial={{
          opacity:0,
          y:40,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:.8,
        }}

      >

        <span>DÖNÜŞÜM GALERİSİ</span>

        <h2>

          Öncesi

          <br />

          & Sonrası

        </h2>

        <p>

          Patili dostlarımızın bakım öncesi ve sonrası

          profesyonel dönüşümünü keşfedin.

        </p>

      </motion.div>

      <div className="ba-grid">

        <BeforeAfterCard

          title="Premium Köpek Grooming"

          before="/images/dog-before.jpg"

          after="/images/dog-after.jpg"

        />

        <BeforeAfterCard

          title="Premium Kedi Grooming"

          before="/images/cat-before.jpg"

          after="/images/cat-after.jpg"

        />

        <BeforeAfterCard

          title="Poodle Grooming"

          before="/images/poodle-before.jpg"

          after="/images/poodle-after.jpg"

        />

      </div>

    </section>

  );

}