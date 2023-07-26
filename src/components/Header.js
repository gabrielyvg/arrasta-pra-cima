import styles from "@/styles/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/logo_1.png"
            width="50"
            height="50"
            alt="Logo arrasta pra cima"
          />
          <h1 className={styles.link_items}>Arrasta pra Cima</h1>
        </div>
        <div className={styles.logo}>
          <h1 className={styles.link_items}>Usuário</h1>
          <Image src="/icone_1.png" width="60" height="60" alt="Foto usuario" />
        </div>
      </nav>
    </header>
  );
}
