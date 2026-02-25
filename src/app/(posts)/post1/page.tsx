import { postsMetadata } from "../../posts-metadata";
import type { Post } from "@/types/postType";
import Image from "next/image";
import styles from "../_styles/post.module.css";

export default function Post() {
  const { title, date, imagePath, preview }: Post = postsMetadata[0];
  return (
    <div className={styles.container}>
      <article className={styles.post}>
        <div>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={1441}
            height={727}
            quality={75}
          />
        </div>
        <div className={styles.text}>{preview}</div>
        <div className={styles.metadata}>
          <span>{date}</span>
        </div>
      </article>
    </div>
  );
}
