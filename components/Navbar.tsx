"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const links = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Öncesi / Sonrası", href: "#before-after" },
  { label: "Yorumlar", href: "#testimonials" },
  { label: "Galeri", href: "#gallery" },
  { label: "İletişim", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "#hero";

      links.forEach((item) => {
        const section = document.querySelector(
          item.href
        ) as HTMLElement | null;

        if (!section) return;

        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          current = item.href;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <motion.header
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">

        <a
          href="#hero"
          className="navbar-logo"
        >
          Studio<span>Daff</span>
        </a>

        <nav className="navbar-links">

          {links.map((item) => (

            <a
              key={item.label}
              href={item.href}
              className={
                active === item.href
                  ? "active"
                  : ""
              }
            >
              {item.label}
            </a>

          ))}

        </nav>

        <button
          className="navbar-toggle"
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          aria-label="Menü"
        >
          ☰
        </button>

        <AnimatePresence>

          {mobileMenu && (

            <motion.div
              className="mobile-menu"
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              {links.map((item) => (

                <a
                  key={item.label}
                  href={item.href}
                  className={
                    active === item.href
                      ? "active"
                      : ""
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </a>

              ))}

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </motion.header>
  );
}