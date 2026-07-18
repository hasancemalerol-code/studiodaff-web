import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">

        <div className="hero-left">

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
            Profesyonel pet grooming hizmetimiz ile
            her pati mutlu ayrılır.
          </p>

          <div className="hero-buttons">

            <a
              href="https://wa.me/905307347462?text=Merhaba%20StudioDaff,%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
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
              <span>Google Puanı</span>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="/images/hero.jpg"
            alt="Studio Daff"
          />

        </div>

      </div>
    </section>
  );
}