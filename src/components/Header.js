import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Link from 'next/link';

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
          <Link href={'/'} className={styles.link_items}>Arrasta pra Cima</Link>
        </div>
        <div className={styles.logo}>
          <h1 className={styles.link_items}>Usuário</h1>
          <Image className={styles.userImage} src="/icone_1.png" width="60" height="60" alt="Foto usuario" />
        </div>
      </nav>
    </header>
  );
}
