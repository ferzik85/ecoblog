import { postsMetadata } from "../posts-metadata";
import PostCard from "./postCard";
import styles from './styles/posts.module.css'

export default async function Posts() {
  const listItems = postsMetadata.map((post) => (
    <PostCard key={post.id} {...post} />
  ));

  return <div className={styles.container}>{listItems}</div>;
}
