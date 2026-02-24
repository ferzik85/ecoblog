import { postsMetadata } from "../../posts-metadata";
import type { Post } from "@/types/postType";

export default function Post() {
  const { title, date, author, imagePath, previewText } : Post = postsMetadata[0];
  return (
      <article>
       <ul>
        <li>{title}</li>
        <li>{date}</li>
        <li>{author}</li>
        <li>{imagePath}</li>
        <li>{previewText}</li>
      </ul>
      </article>
  );
}