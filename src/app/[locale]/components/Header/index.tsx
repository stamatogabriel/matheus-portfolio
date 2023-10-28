import Image from "next/image";
import Link from "next/link";
import LocaleLink from "next-intl/link";
import {  useTranslations } from "next-intl";

import styles from './styles.module.css'

export default function Header () {
  const t = useTranslations("header");

  return (
    <header className={styles.header}>
      <section className={styles.header__container}>
        <Image src="/logo.png" height={60} width={65} alt="MP Design" />
        <div className={styles.link__container}>
          <Link className={styles.link} href="#">{t('home')}</Link>
          <Link className={styles.link} href="#">{t('about')}</Link>
          <Link className={styles.link} href="#">{t('skills')}</Link>
          <Link className={styles.link} href="#">{t('contact')}</Link>
        </div>
        <div className={styles.button__container}>
          <LocaleLink href="/" locale="pt" className={styles.brazilianButton}>pt</LocaleLink>
          <LocaleLink href="/" locale="en" className={styles.englishButton}>en</LocaleLink>
        </div>
      </section>
    </header>
  )
}