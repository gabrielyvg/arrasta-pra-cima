import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} Arrasta pra Cima. Todos os direitos
          reservados.
        </p>
      </footer>
    </>
  );
}
