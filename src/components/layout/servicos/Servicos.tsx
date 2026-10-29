"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Servicos.module.css";

const slides = [
  {
    src: "/foto1.jpg",
    alt: "Dentista realizando um procedimento odontológico",
  },
  {
    src: "/foto2.jpg",
    alt: "Dentista atendendo uma pessoa em consultório",
  },
];

const services = [
  {
    title: "Prevenção e manutenção",
    items: [
      "Profilaxia (limpeza e remoção de placa e tártaro)",
      "Aplicação de flúor",
      "Selantes para proteger os dentes, principalmente em crianças",
      "Orientação de higiene bucal",
    ],
  },
  {
    title: "Tratamentos restauradores",
    items: [
      "Restaurações (obturações) para tratar cáries",
      "Tratamento de canal (endodontia), quando a polpa do dente está inflamada ou infectada",
      "Coroas e facetas",
      "Pinos e núcleos de preenchimento",
    ],
  },
  {
    title: "Periodontia (gengivas)",
    items: [
      "Raspagem e alisamento radicular",
      "Tratamento de gengivite e periodontite",
      "Cirurgias gengivais (enxertos, correção de sorriso gengival)",
    ],
  },
  {
    title: "Cirurgias",
    items: [
      "Extração de dentes, incluindo sisos",
      "Cirurgias para remoção de cistos ou lesões",
      "Implantes dentários",
      "Enxertos ósseos",
    ],
  },
  {
    title: "Reabilitação e prótese",
    items: [
      "Próteses fixas (pontes)",
      "Próteses removíveis (dentaduras, parciais)",
      "Próteses sobre implantes",
    ],
  },
];

export default function Servicos() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () =>
      setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    return () =>
      motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section aria-labelledby="servicos-titulo" className={styles.section} id="servicos">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Cuidado completo para o seu sorriso</p>
          <h2 className={styles.heading} id="servicos-titulo">
            Nossos serviços
          </h2>
          <p className={styles.description}>
            Do cuidado preventivo à reabilitação, oferecemos tratamentos para
            acompanhar você em cada etapa.
          </p>
        </div>

        <div className={styles.content}>
          <div
            aria-label="Fotos dos atendimentos odontológicos"
            className={styles.carousel}
            role="region"
          >
            <div className={styles.slides}>
              {slides.map((slide, index) => (
                <Image
                  alt={index === activeSlide ? slide.alt : ""}
                  aria-hidden={index !== activeSlide}
                  className={`${styles.slide} ${
                    index === activeSlide ? styles.activeSlide : ""
                  }`}
                  fill
                  key={slide.src}
                  priority={index === 0}
                  sizes="(max-width: 800px) 100vw, 40vw"
                  src={slide.src}
                />
              ))}
            </div>
            <p className={styles.slideCount}>
              {activeSlide + 1} / {slides.length}
            </p>
          </div>

          <div aria-label="Lista de tratamentos" className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.card} key={service.title}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <ul className={styles.list}>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
