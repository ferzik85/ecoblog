import { postsMetadata } from "../posts-metadata";
import PostCard from "./postCard";
import styles from "./styles/posts.module.css";

export default async function Posts() {
  const listItems = postsMetadata.map((post) => (
    <PostCard key={post.id} {...post} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div>
          WELCOME, LUBIMKA<span>❤️</span>
        </div>
        <div>HAPPY INTERNATIONAL WOMEN’S DAY!</div>
        <div>THIS SITE IS MY GIFT FOR YOU</div>
      </div>
      {listItems}
    </div>
  );
}
