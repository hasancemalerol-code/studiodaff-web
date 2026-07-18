"use client";

import DaffyAI from "./DaffyAI/DaffyAI";
import "./Hero.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        {/* SOL TARAF */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-top">
            PREMIUM PET GROOMING & SPA
          </p>

          <h1>
            Sevgiyle Bakım,
            <br />
            <span>Mutlu Patiler.</span>
          </h1>

          <p className="hero-text">
            StudioDaff olarak dostlarınıza yalnızca bakım değil,
            güven, hijyen ve konfor sunuyoruz.
            Profesyonel ekibimiz ile köpek ve kedi dostlarınıza
            premium bakım deneyimi yaşatıyoruz.
          </p>

          <div className="hero-buttons">
            <a
              href="https://wa.me/905307347462?text=Merhaba%20StudioDaff,%20randevu%20almak%20istiyorum."
              className="btn-gold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Randevu Al
            </a>

            <a
              href="tel:+905307347462"
              className="btn-call"
            >
              📞 Ara
            </a>

            <a
              href="#services"
              className="btn-outline"
            >
              Hizmetlerimiz
            </a>
          </div>

          <div className="hero-info">

            <div className="info-card">
              <h2>10+</h2>
              <span>Yıllık Deneyim</span>
            </div>

            <div className="info-card">
              <h2>5000+</h2>
              <span>Mutlu Pati</span>
            </div>

            <div className="info-card">
              <h2>★ 4.9</h2>
              <span>Google Yorumu</span>
            </div>

          </div>

        </motion.div>

        {/* SAĞ TARAF */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
        <DaffyAI />
          
        
        </motion.div>

      </div>
    </section>
  );
}