import Image from "next/image";
import styles from "./about.module.css";

export default function AboutMe() {
  return (
    <div className={styles.container1}>
      <article className={styles.container2}>
        <section className={styles.card}>
          <div>
            <h1 className={styles.title}>About Me</h1>
          </div>
          <div className={styles.image}>
            <Image
              src="/assets/about/avatar1.webp"
              alt="About Me"
              width={400}
              height={400}
              quality={100}
            />
          </div>
          <div className={styles.text}>
            Here I will write a few words about me!
          </div>
        </section>
        <section className={styles.card}>
          <div>
            <h1 className={styles.title}>About this blog</h1>
          </div>
          <div className={styles.text}>
            And here I will add a few words about this blog!
          </div>
        </section>
      </article>
    </div>
  );
}
