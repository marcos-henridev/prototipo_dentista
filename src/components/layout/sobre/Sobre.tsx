import Image from "next/image";
import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <section
      aria-labelledby="sobre-titulo"
      className={styles.section}
      id="sobre"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageFrame}>
            <Image
              alt="Equipe de dentistas da clínica"
              className={styles.image}
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              src="/dentistas.jpg"
            />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Sobre a clínica</p>
            <h2 className={styles.title} id="sobre-titulo">
              Experiência que você pode confiar
            </h2>
            <p className={styles.description}>
              Com anos de atuação e formação continuada, nossa equipe une
              técnica, tecnologia e atenção ao paciente para oferecer
              tratamentos seguros e resultados duradouros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
