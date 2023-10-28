import Image from "next/image";
import Link from "next/link";
import {  useTranslations } from "next-intl";

import Matheus from "../../../public/matheus.svg";

import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations("home");

  return (
    <section className={styles.container}>
      <p className={styles.content}>
        {t('hello')}, <br /> {t("I'm")}{" "}
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
