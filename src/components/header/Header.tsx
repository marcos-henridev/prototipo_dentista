import styles from "./Header.module.css";

const links = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Contatos", href: "/#contatos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Home", href: "/" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Navegação principal">
        {links.map(({ label, href }) => (
          <a className={styles.link} href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
