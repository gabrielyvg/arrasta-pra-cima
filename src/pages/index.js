import Head from "next/head";
import Cards from "@/components/Cards";
import mockObjs from "@/utils/mockObjs";
import { Inter } from "next/font/google";
import Carousel from "@/components/Carousel";
import styles from "@/styles/Home.module.css";
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <section className={styles.backgroundSection1}>
          <div className={styles.centerItems}>
            <div className={styles.title}>
              A plataforma para quem busca aprimoramento!
            </div>
            <div className={styles.subTitle}>
              Cursos desenvolvidos de forma clara e objetiva, onde o nosso foco
              é você.
            </div>
          </div>
          <Carousel images={mockObjs.images} />
        </section>
        <section className={styles.backgroundSection2}>
          <div className={styles.cardsDiv}>
            <Cards cards={mockObjs.cards} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
