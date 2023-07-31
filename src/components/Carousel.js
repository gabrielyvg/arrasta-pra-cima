import Image from "next/image";
import { motion } from "framer-motion";
import styles from "@/styles/Carousel.module.css";
import { useState, useEffect, useRef } from "react";

export default function Carousel(props) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        <motion.div
          ref={carousel}
          className={styles.carouselDiv}
          whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className={styles.carouselInner}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1}}>
            {props.images.map((img) => (
              <motion.div key={img.id} className={styles.item}>
                <div className={styles.descricaoCurso}>{img.title}</div>
                <Image src={img.image} alt="imagem curso" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
