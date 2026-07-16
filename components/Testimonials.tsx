"use client";

import { motion } from "framer-motion";
import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Ayşe K.",
    image: "/images/user1.jpg",
    comment:
      "Köpeğimiz ilk defa bu kadar mutlu döndü. İlgi ve profesyonellik gerçekten harika.",
  },
  {
    id: 2,
    name: "Merve A.",
    image: "/images/user2.jpg",
    comment:
      "Salon çok temiz. Kedim hiç strese girmeden bakımını tamamladı.",
  },
  {
    id: 3,
    name: "Can T.",
    image: "/images/user3.jpg",
    comment:
      "Kesim tam istediğimiz gibi oldu. Kesinlikle tavsiye ederim.",
  },
  {
    id: 4,
    name: "Elif D.",
    image: "/images/user4.jpg",
    comment:
      "Gerçekten premium hizmet. Artık tek adresimiz Studio Daff.",
  },
  {
    id: 5,
    name: "Burak Y.",
    image: "/images/user5.jpg",
    comment:
      "Personel çok ilgili. Pati dostumuz kendini evinde gibi hissetti.",
  },
  {
    id: 6,
    name: "Selin G.",
    image: "/images/user6.jpg",
    comment:
      "Kaliteli hizmet, güler yüz ve mükemmel sonuç. Çok memnun kaldık.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <motion.div
        className="testimonial-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <span>MÜŞTERİ YORUMLARI</span>

        <h2>

          Bizi Tercih Edenler

          <br />

          Ne Diyor?

        </h2>

        <p>

          Binlerce mutlu dostumuz ve onların
          değerli sahiplerinden gelen yorumlar.

        </p>

      </motion.div>

      <div className="testimonial-grid">

        {reviews.map((review) => (

          <motion.div

            key={review.id}

            className="testimonial-card"

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{
              duration: .6,
            }}

          >

            <img
              src={review.image}
              alt={review.name}
            />

            <div className="stars">

              ★★★★★

            </div>

            <h3>

              {review.name}

            </h3>

            <p>

              "{review.comment}"

            </p>
                        <div className="google-badge">

              <span className="google-icon">G</span>

              <span>Google Review</span>

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div

        className="testimonial-footer"

        initial={{ opacity: 0 }}

        whileInView={{ opacity: 1 }}

        viewport={{ once: true }}

        transition={{ delay: .3 }}

      >

        <div className="rating">

          <span className="rating-score">

            4.9

          </span>

          <span className="rating-stars">

            ★★★★★

          </span>

        </div>

        <p>

          5000+ mutlu pati ve yüzlerce
          olumlu müşteri yorumu.

        </p>

      </motion.div>

    </section>

  );

}