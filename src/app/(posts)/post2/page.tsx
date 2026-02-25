import { postsMetadata } from "../../posts-metadata";
import type { Post } from "@/types/postType";
import Image from "next/image";

export default function Post() {
  const { title, date, author, imagePath, previewText }: Post =
    postsMetadata[1];
  return (
    <article>
      <ul>
        <li>{title}</li>
        <li>{date}</li>
        <li>{author}</li>
        <li>
          <Image
            src={imagePath}
            alt={title}
            width={3000}
            height={1159}
            quality={75}
          />
        </li>
        <li>{previewText}</li>
      </ul>
    </article>
  );
}
