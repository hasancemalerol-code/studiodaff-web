import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="hakkimizda">
      <div className="about-container">

        <div className="about-image">
          <Image
            src="/images/about.jpg"
            alt="Studio Daff"
            width={600}
            height={700}
            className="about-img"
          />
        </div>

        <div className="about-content">

          <span className="about-subtitle">
            HAKKIMIZDA
          </span>

          <h2>
            Patili Dostlarınız
            <br />
            Emin Ellerde
          </h2>

          <p>
            Studio Daff olarak yalnızca bakım hizmeti sunmuyor,
            dostlarınıza sevgi dolu ve güvenli bir deneyim yaşatıyoruz.
            Profesyonel ekibimiz, hijyenik ortamımız ve kaliteli ürünlerimiz
            sayesinde her pati mutlu ayrılır.
          </p>

          <div className="about-boxes">

            <div className="box">
              <h3>10+</h3>
              <span>Yıllık Deneyim</span>
            </div>

            <div className="box">
              <h3>5000+</h3>
              <span>Mutlu Dost</span>
            </div>

            <div className="box">
              <h3>%100</h3>
              <span>Sevgiyle Bakım</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}