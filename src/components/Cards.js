import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Cards.module.css";

export default function Cards(props) {
  return (
    <>
      {props.cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <Image src={card.image} className={styles.image} alt="Instrutor" />
          <div className={styles.cardDescription}>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.subtitle}>{card.subtitle}</div>
            <div className={styles.details}>{card.details}</div>
            <Link href=`/aulas/${card.id}`>
              <div className={styles.button}>Matricule-se!</div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
