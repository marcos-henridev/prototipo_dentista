"use client";

import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Serviços", href: "/#servicos" },
];

export default function Header() {
  const openContactForm = () => {
    window.dispatchEvent(new Event("contact-form:open"));
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Navegação principal">
        {links.map(({ label, href }) => (
          <Link className={styles.link} href={href} key={label}>
            {label}
          </Link>
        ))}
        <Link
          className={`${styles.link} ${styles.desktopContact}`}
          href="/#contatos"
        >
          Contatos
        </Link>
        <button
          className={`${styles.link} ${styles.mobileContact}`}
          onClick={openContactForm}
          type="button"
        >
          Contatos
        </button>
      </nav>
    </header>
  );
}
