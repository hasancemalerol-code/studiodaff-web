import "./Services.css";

const services = [
  {
    image: "/images/service1.jpg",
    title: "Köpek Bakımı",
    description:
      "Irkına uygun profesyonel yıkama, kesim, kurutma ve bakım hizmeti.",
  },
  {
    image: "/images/service2.jpg",
    title: "Kedi Bakımı",
    description:
      "Kediniz için stressiz, güvenli ve hijyenik bakım deneyimi.",
  },
  {
    image: "/images/service3.jpg",
    title: "Tırnak & Kulak Bakımı",
    description:
      "Sağlıklı pati ve kulak bakımıyla dostlarınız her zaman rahat.",
  },
];

export default function Services() {
  return (
    <section className="services" id="hizmetler">

      <div className="services-title">

        <span>HİZMETLERİMİZ</span>

        <h2>
          Patili Dostlarınız İçin
          <br />
          Premium Bakım
        </h2>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <img src={service.image} alt={service.title} />

            <div className="service-content">

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Detayları İncele</button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}