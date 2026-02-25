import packageJson from '../../../package.json';
import styles from './styles/footer.module.css'

export default function Footer() {
  const date = new Date();
  const buildDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  const version = packageJson.version;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.item}>© {date.getFullYear()} Sergey and Olga.</span>
        <span className={styles.item}>All rights reserved. No reproduction without permission.</span>
        <span className={styles.item}>Ver. {version} Date: {buildDate}</span>
      </div>
    </footer>
  );
}