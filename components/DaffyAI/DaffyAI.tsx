"use client";

import { motion } from "framer-motion";
import "./DaffyAI.css";

export default function DaffyAI() {

  return (

    <div className="daffy-ai">

      {/* Glow */}

      <div className="daffy-glow"></div>

      {/* Character */}

      <motion.img
        src="/images/daffy.png"
        alt="Daffy"
        className="daffy-avatar"
        animate={{
          y:[0,-8,0],
          scale:[1,1.02,1]
        }}
        transition={{
          repeat:Infinity,
          duration:5,
          ease:"easeInOut"
        }}
      />

      {/* Chat Card */}

      <motion.div

        className="ai-card"

        initial={{
          opacity:0,
          y:30
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:.3
        }}

      >

        <span className="ai-badge">

          🟢 ONLINE

        </span>

        <h2>

          Merhaba 👋

        </h2>

        <p>

          Ben <strong>Daffy</strong>.

          <br/><br/>

          StudioDaff'ın yapay zekâ destekli
          pet bakım danışmanıyım.

          <br/><br/>

          Sana bakım önerileri verebilir,
          doğru hizmeti bulmana yardımcı olabilir
          ve birkaç adımda randevu oluşturabilirim.

        </p>

        <div className="quick-grid">

          <button>

            🐶

            Köpek Bakımı

          </button>

          <button>

            🐱

            Kedi Bakımı

          </button>

          <button>

            ✂️

            Hizmetler

          </button>

          <button>

            📅

            Randevu

          </button>

        </div>

        <button className="start-chat">

          Daffy ile Konuş

        </button>

      </motion.div>

    </div>

  );

}