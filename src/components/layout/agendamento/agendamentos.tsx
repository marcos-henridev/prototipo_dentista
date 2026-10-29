"use client";

import { useEffect, useState } from "react";
import styles from "./agendamentos.module.css";

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
];

export default function Agendamentos() {
  const [isCompact, setIsCompact] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 620px)");
    const updateViewport = () => {
      setIsCompact(compactViewport.matches);
      setIsLocationOpen(!compactViewport.matches);
      setIsScheduleOpen(!compactViewport.matches);
    };

    updateViewport();
    compactViewport.addEventListener("change", updateViewport);
    return () => compactViewport.removeEventListener("change", updateViewport);
  }, []);

  return (
    <section
      aria-label="Informações para agendamento"
      className={styles.section}
      id="agendamento"
    >
      <div className={styles.cards}>
        <article
          className={`${styles.card} ${
            isLocationOpen ? styles.cardOpen : ""
          }`}
        >
          <h2 className={styles.title}>
            <button
              aria-controls="location-details"
              aria-expanded={!isCompact || isLocationOpen}
              className={styles.cardToggle}
              onClick={() => {
                if (isCompact) setIsLocationOpen((isOpen) => !isOpen);
              }}
              type="button"
            >
              Clínica Sorriso Pleno
              {isCompact && (
                <span aria-hidden="true" className={styles.toggleIcon}>
                  {isLocationOpen ? "−" : "+"}
                </span>
              )}
            </button>
          </h2>
          <address
            className={styles.address}
            id="location-details"
            hidden={isCompact && !isLocationOpen}
          >
            <p>
              <strong>Rua:</strong> das Flores
            </p>
            <p>
              <strong>Número:</strong> 123
            </p>
            <p>
              <strong>Bairro:</strong> Centro
            </p>
            <p>
              <strong>Cidade e estado:</strong> Cidade Exemplo, EX
            </p>
            <p>
              <strong>CEP:</strong> 12345-678
            </p>
          </address>
        </article>

        <article
          className={`${styles.card} ${
            isScheduleOpen ? styles.cardOpen : ""
          }`}
        >
          <h2 className={styles.title}>
            <button
              aria-controls="schedule-details"
              aria-expanded={!isCompact || isScheduleOpen}
              className={styles.cardToggle}
              onClick={() => {
                if (isCompact) setIsScheduleOpen((isOpen) => !isOpen);
              }}
              type="button"
            >
              Horários de atendimento
              {isCompact && (
                <span aria-hidden="true" className={styles.toggleIcon}>
                  {isScheduleOpen ? "−" : "+"}
                </span>
              )}
            </button>
          </h2>
          <div
            className={styles.scheduleDetails}
            id="schedule-details"
            hidden={isCompact && !isScheduleOpen}
          >
            <table className={styles.schedule}>
              <tbody>
                {weekdays.map((day) => (
                  <tr className={styles.scheduleRow} key={day}>
                    <th className={styles.day} scope="row">
                      {day}
                    </th>
                    <td>8:00 às 17:00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>
      </div>
    </section>
  );
}
