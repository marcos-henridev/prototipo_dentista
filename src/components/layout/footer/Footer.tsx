import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.clinic}>
          <p className={styles.name}>Clínica Sorriso Pleno</p>
          <address className={styles.address}>
            Rua das Flores, 123 · Centro · Cidade Exemplo, EX · CEP 12345-678
          </address>
          <p className={styles.registration}>CNPJ: XX.XXX.XXX/XXXX-XX</p>
        </div>
        <div aria-label="Instagram" className={styles.instagram}>
          <Image
            alt=""
            aria-hidden="true"
            height={28}
            src="https://api.iconify.design/mdi/instagram.svg?color=%23ffffff"
            unoptimized
            width={28}
          />
          <span>Instagram</span>
        </div>
      </div>
      <p className={styles.copyright}>
        © Clínica Sorriso Pleno
      </p>
    </footer>
  );
}
