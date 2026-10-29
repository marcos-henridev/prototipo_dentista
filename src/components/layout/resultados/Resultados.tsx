import Image from "next/image";
import styles from "./Resultados.module.css";

export default function Resultados() {
  return (
    <section
      aria-labelledby="resultados-titulo"
      className={styles.section}
      id="resultados"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Antes e depois</p>
            <h2 className={styles.title} id="resultados-titulo">
              Transformando sorrisos, renovando a confiança
            </h2>
            <p className={styles.description}>
              Um sorriso saudável muda a forma como você se sente. Confira o
              resultado de tratamentos realizados em nossa clínica e imagine o
              seu próprio antes e depois.
            </p>
          </div>
          <div className={styles.imageFrame}>
            <Image
              alt="Comparação antes e depois de um tratamento odontológico"
              className={styles.image}
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
              src="/antes%20e%20depois.avif"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
