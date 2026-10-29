"use client";

import { useEffect, useState } from "react";
import styles from "./FormularioAgendamento.module.css";

const services = [
  "Profilaxia (limpeza e remoção de placa e tártaro)",
  "Aplicação de flúor",
  "Selantes para proteger os dentes",
  "Orientação de higiene bucal",
  "Restaurações para tratar cáries",
  "Tratamento de canal (endodontia)",
  "Coroas e facetas",
  "Pinos e núcleos de preenchimento",
  "Raspagem e alisamento radicular",
  "Tratamento de gengivite e periodontite",
  "Cirurgias gengivais",
  "Extração de dentes, incluindo sisos",
  "Remoção de cistos ou lesões",
  "Implantes dentários",
  "Enxertos ósseos",
  "Próteses fixas (pontes)",
  "Próteses removíveis (dentaduras e parciais)",
  "Próteses sobre implantes",
];

const weekdays = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "long",
  year: "numeric",
});
const fullDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "full",
});

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

type AgendamentoDrawerProps = {
  initialMonth: Date;
  onClose: () => void;
};

export default function AgendamentoDrawer({
  initialMonth,
  onClose,
}: AgendamentoDrawerProps) {
  const [month, setMonth] = useState(initialMonth);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0,
  ).getDate();
  const firstDayOffset =
    (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
  const calendarCells = [
    ...Array.from({ length: firstDayOffset }, () => null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const changeMonth = (amount: number) => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + amount, 1));
    setSelectedDate("");
  };

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
    setMessage("");
  };

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        aria-labelledby="booking-title"
        aria-modal="true"
        className={styles.drawer}
        role="dialog"
      >
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>Agendamento</p>
            <h2 className={styles.title} id="booking-title">
              Escolha uma data
            </h2>
          </div>
          <button
            aria-label="Fechar agendamento"
            className={styles.closeButton}
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <div className={styles.calendar}>
          <div className={styles.monthNavigation}>
            <button
              aria-label="Mês anterior"
              className={styles.monthButton}
              disabled={
                month.getFullYear() === today.getFullYear() &&
                month.getMonth() === today.getMonth()
              }
              onClick={() => changeMonth(-1)}
              type="button"
            >
              ‹
            </button>
            <h3 className={styles.monthTitle}>
              {monthFormatter.format(month)}
            </h3>
            <button
              aria-label="Próximo mês"
              className={styles.monthButton}
              onClick={() => changeMonth(1)}
              type="button"
            >
              ›
            </button>
          </div>
          <div aria-label="Calendário de disponibilidade" className={styles.grid}>
            {weekdays.map((weekday) => (
              <span className={styles.weekday} key={weekday}>
                {weekday}
              </span>
            ))}
            {calendarCells.map((day, index) => {
              if (!day) {
                return <span aria-hidden="true" key={`empty-${index}`} />;
              }

              const date = new Date(
                month.getFullYear(),
                month.getMonth(),
                day,
              );
              const dateKey = getDateKey(date);
              const isAvailable = date.getDay() !== 0 && date.getDay() !== 6;
              const isPast = date < today;
              const isDisabled = !isAvailable || isPast;
              const isSelected = selectedDate === dateKey;

              return (
                <button
                  aria-label={`${fullDateFormatter.format(date)}${
                    isDisabled ? ", indisponível" : ", disponível"
                  }`}
                  aria-pressed={isSelected}
                  className={`${styles.day} ${
                    isAvailable && !isPast ? styles.available : ""
                  } ${isSelected ? styles.selected : ""}`}
                  disabled={isDisabled}
                  key={dateKey}
                  onClick={() => {
                    setSelectedDate(dateKey);
                    setMessage("");
                  }}
                  type="button"
                >
                  {day}
                </button>
              );
            })}
          </div>
          <p className={styles.legend}>
            <span aria-hidden="true" className={styles.legendDot} />
            Dias úteis indicados como disponíveis (demonstração)
          </p>
          {selectedDate && (
            <p className={styles.selectedDate}>
              Data selecionada:{" "}
              {fullDateFormatter.format(
                new Date(
                  month.getFullYear(),
                  month.getMonth(),
                  Number(selectedDate.slice(-2)),
                ),
              )}
            </p>
          )}
        </div>

        <fieldset className={styles.serviceFieldset}>
          <legend className={styles.servicesTitle}>
            Serviços de interesse
          </legend>
          <div className={styles.serviceList}>
            {services.map((service) => (
              <label className={styles.serviceOption} key={service}>
                <input
                  checked={selectedServices.includes(service)}
                  className={styles.checkbox}
                  onChange={() => toggleService(service)}
                  type="checkbox"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          className={styles.submitButton}
          disabled={!selectedDate || selectedServices.length === 0}
          onClick={() =>
            setMessage(
              "Sua seleção está pronta. A confirmação de horários será habilitada quando o sistema estiver conectado ao banco de dados.",
            )
          }
          type="button"
        >
          Continuar agendamento
        </button>
        {message && (
          <p aria-live="polite" className={styles.message}>
            {message}
          </p>
        )}
      </aside>
    </div>
  );
}
