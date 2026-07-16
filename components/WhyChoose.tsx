import "./WhyChoose.css";

const features = [
  {
    icon: "🐾",
    title: "Uzman Groomer",
    text: "Deneyimli ekibimiz her dostunuza profesyonel bakım sunar.",
  },
  {
    icon: "🛁",
    title: "Hijyenik Ortam",
    text: "Her bakım sonrası tüm ekipmanlarımız özenle sterilize edilir.",
  },
  {
    icon: "💛",
    title: "Sevgiyle Yaklaşım",
    text: "Her patiye kendi ailemizin bir parçası gibi davranıyoruz.",
  },
  {
    icon: "🏆",
    title: "Premium Ürünler",
    text: "Deri dostu ve kaliteli bakım ürünleri kullanıyoruz.",
  },
  {
    icon: "📅",
    title: "Kolay Randevu",
    text: "Online randevu sistemi ile dakikalar içinde rezervasyon yapın.",
  },
  {
    icon: "⭐",
    title: "5000+ Mutlu Pati",
    text: "Bugüne kadar binlerce dostumuza güvenli bakım hizmeti sunduk.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why">

      <div className="why-title">

        <span>NEDEN STUDIO DAFF?</span>

        <h2>
          Güven, Sevgi ve
          <br />
          Profesyonellik
        </h2>

        <p>
          Patili dostlarınız için sadece bakım değil,
          güvenli ve keyifli bir deneyim sunuyoruz.
        </p>

      </div>

      <div className="why-grid">

        {features.map((item, index) => (

          <div className="why-card" key={index}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}