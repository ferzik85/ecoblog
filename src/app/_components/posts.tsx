import { postsMetadata } from "../posts-metadata";
import PostCard from "./postCard";

export default async function Posts() {
  const listItems = postsMetadata.map((post) => (
    <PostCard key={post.id} {...post} />
  ));

  return <ul>{listItems}</ul>;
}
