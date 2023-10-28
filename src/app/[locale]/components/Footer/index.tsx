import Link from "next/link";
import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi'

import styles from './styles.module.css'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <section className={styles.footer__container}>
        <Link className={styles.link} aria-label="LinkedIn" href="#"><FiLinkedin size={35} /></Link>
        <Link className={styles.link} aria-label="Instagram" href="#"><FiInstagram size={35} /></Link>
        <Link className={styles.link} aria-label="E-mail" href="#"><FiMail size={35} /></Link>
      </section>
    </footer>
  )
}