import styles from "./agendamentos.module.css";

const weekdays = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
];

export default function Agendamentos() {
  return (
    <section
      aria-label="Informações para agendamento"
      className={styles.section}
      id="agendamento"
    >
      <div className={styles.cards}>
        <article className={styles.card}>
          <h2 className={styles.title}>Clínica Sorriso Pleno</h2>
          <address className={styles.address}>
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

        <article className={styles.card}>
          <h2 className={styles.title}>Horários de atendimento</h2>
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
        </article>
      </div>
    </section>
  );
}
