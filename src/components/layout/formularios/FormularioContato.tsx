"use client";

import { useEffect, useState } from "react";
import styles from "./FormularioContato.module.css";

export default function FormularioContato() {
  const [formMessage, setFormMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const showForm = () => setIsOpen(true);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("contact-form:open", showForm);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("contact-form:open", showForm);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <section
      aria-labelledby="contact-title"
      className={`${styles.panel} ${isOpen ? styles.open : ""}`}
      id="contatos"
    >
      <div className={styles.heading}>
        <h2 className={styles.title} id="contact-title">
          Vamos conversar?
        </h2>
        <button
          aria-label="Fechar formulário de contato"
          className={styles.closeButton}
          onClick={() => setIsOpen(false)}
          type="button"
        >
          ×
        </button>
      </div>
      <p className={styles.description}>
        Deixe seus dados e conte como podemos ajudar.
      </p>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          setFormMessage(
            "O formulário ainda não está conectado a um canal de envio.",
          );
        }}
      >
        <label className={styles.field}>
          Nome
          <input
            autoComplete="name"
            className={styles.input}
            name="name"
            required
          />
        </label>
        <label className={styles.field}>
          E-mail
          <input
            autoComplete="email"
            className={styles.input}
            name="email"
            required
            type="email"
          />
        </label>
        <label className={styles.field}>
          Como podemos ajudar?
          <textarea
            className={styles.textarea}
            name="message"
            required
            rows={3}
          />
        </label>
        <button className={styles.submitButton} type="submit">
          Enviar mensagem
        </button>
        {formMessage && (
          <p aria-live="polite" className={styles.formMessage}>
            {formMessage}
          </p>
        )}
      </form>
    </section>
  );
}
