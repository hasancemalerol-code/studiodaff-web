import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Reveal from "../components/Reveal";
import ScrollProgress from "../components/ScrollProgress";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <main>

      <ScrollProgress />

      <Navbar />

      
       <Hero />
      

      <Reveal direction="left" delay={0.1}>
        <About />
      </Reveal>

      <Reveal direction="right" delay={0.15}>
        <WhyChoose />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <Services />
      </Reveal>

      <Reveal direction="zoom" delay={0.2}>
        <BeforeAfter />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <Testimonials />
      </Reveal>

      <Reveal direction="zoom" delay={0.2}>
        <Gallery />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <Appointment />
      </Reveal>

      <Reveal direction="left" delay={0.2}>
        <Contact />
      </Reveal>

      <Reveal direction="up" delay={0.1}>
        <Footer />
      </Reveal>

      <BackToTop />

      <WhatsAppButton />

    </main>
  );
}