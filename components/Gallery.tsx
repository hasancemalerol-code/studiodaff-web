"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Gallery.css";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) return;

      if (e.key === "Escape") {
        setSelected(null);
      }

      if (e.key === "ArrowRight") {
        setSelected((prev) =>
          prev === null ? 0 : (prev + 1) % images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setSelected((prev) =>
          prev === null
            ? 0
            : (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, [selected]);

  const nextImage = () => {
    if (selected === null) return;

    setSelected((selected + 1) % images.length);
  };

  const prevImage = () => {
    if (selected === null) return;

    setSelected(
      (selected - 1 + images.length) % images.length
    );
  };

  return (
    <section className="gallery-section" id="gallery">

      <div className="gallery-header">

        <span>PREMIUM GALERİ</span>

        <h2>
          Patili Dostlarımızdan
          <br />
          Özel Kareler
        </h2>

        <p>
          Studio Daff'ta sevgiyle ağırladığımız
          dostlarımızın en güzel anlarından
          seçilmiş kareler.
        </p>

      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <motion.div
            key={index}
            className={`gallery-card ${
              index === 0 ? "large" : ""
            }`}
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() => setSelected(index)}
          >

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />

          </motion.div>

        ))}

      </div>

      <AnimatePresence>

        {selected !== null && (

          <motion.div
            className="lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelected(null)}
          >

            <motion.img
              src={images[selected]}
              alt="Gallery"
              className="lightbox-image"
              initial={{
                scale: .8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .8,
                opacity: 0,
              }}
              transition={{
                duration: .35,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
            />
                        <button
              className="lightbox-close"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(null);
              }}
            >
              ✕
            </button>

            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ❮
            </button>

            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ❯
            </button>

            <div className="lightbox-counter">
              {selected + 1} / {images.length}
            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}