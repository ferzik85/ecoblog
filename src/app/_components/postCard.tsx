import type { Post } from "@/types/postType";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles/postCard.module.css";

export default async function PostCard({
  postPath,
  title,
  date,
  imagePath,
  imageWidth,
  imageHeight,
  preview,
}: Post) {
  return (
    <section className={styles.container}>
      <div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.image}
          src={imagePath}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          quality={75}
        />
      </div>
      <div className={styles.text}>{preview}</div>
      <div className={styles.metadata}>
        <span>{date}</span>
        <span><Link href={postPath} className={styles.link}>READ FULL</Link></span>
      </div>
    </section>
  );
}
