import Image from "next/image";
import styles from "./page.module.css";

import Matheus from "../../../public/matheus.svg";
import Link from "next/link";

export default function Home() {
  return (
    <section className={styles.container}>
      <p className={styles.content}>
        Olá, <br /> eu sou o{" "}
        <strong className={styles.content__strong}>Matheus</strong> Web Designer{" "}
        <br />
        <Link className={styles.link} href="#">Contate-me</Link>
      </p>
      <div className={styles.imageContainer}>
        <Image src={Matheus} alt="Matheus Previde" className={styles.image} />
      </div>
    </section>
  );
}
