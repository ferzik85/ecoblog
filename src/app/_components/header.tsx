import Link from "next/link";
import styles from './styles/header.module.css'

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">BLOG</Link>
        <Link className={styles.link} href="/contact-me">CONTACT ME</Link>
        <Link className={styles.link} href="/about-me">ABOUT ME</Link>
      </nav>
    </header>
  );
}