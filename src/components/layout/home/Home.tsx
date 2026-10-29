import Image from "next/image";
import styles from "./Home.module.css";
import Agendamentos from "@/components/layout/agendamento/agendamentos";
import Button from "@/components/ui/button/button";
import Text from "@/components/ui/text/text";

export default function Home() {
  return (
    <div className={styles.hero}>
      <section aria-label="Apresentação" className={styles.home} id="home">
        <Image
          alt=""
          className={styles.backgroundImage}
          fill
          priority
          src="/dentista_trabalhando.jpg"
        />
        <div aria-hidden="true" className={styles.backgroundOverlay} />
        <div className={styles.content}>
          <Text className={styles.headline}>
            Seu sorriso dos sonhos começa aqui
          </Text>
          <p className={styles.subheadline}>
            Agende sua avaliação gratuita e descubra o melhor tratamento para o
            seu sorriso
          </p>
          <Button className={styles.cta} href="/#agendamento">
            Agende sua avaliação
          </Button>
        </div>
      </section>
      <Agendamentos />
    </div>
  );
}
