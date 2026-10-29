"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./Home.module.css";
import Agendamentos from "@/components/layout/agendamento/agendamentos";
import FormularioAgendamento from "@/components/layout/formularios/FormularioAgendamento";
import Button from "@/components/ui/button/button";
import Text from "@/components/ui/text/text";
import Servicos from "@/components/layout/servicos/Servicos";
import Resultados from "@/components/layout/resultados/Resultados";
import Sobre from "@/components/layout/sobre/Sobre";

export default function Home() {
  const [bookingMonth, setBookingMonth] = useState<Date | null>(null);

  return (
    <>
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
              Agende sua avaliação gratuita e descubra o melhor tratamento para
              o seu sorriso
            </p>
            <Button
              aria-haspopup="dialog"
              className={styles.cta}
              onClick={() => {
                const now = new Date();
                setBookingMonth(new Date(now.getFullYear(), now.getMonth(), 1));
              }}
            >
              Agende sua avaliação
            </Button>
          </div>
        </section>
        <Agendamentos />
      </div>
      <Servicos />
      <Resultados />
      <Sobre />
      {bookingMonth && (
        <FormularioAgendamento
          initialMonth={bookingMonth}
          onClose={() => setBookingMonth(null)}
        />
      )}
    </>
  );
}
