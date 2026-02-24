import type { Post } from "@/types/postType";
import Link from "next/link";
import Image from "next/image";

export default async function PostCard({
  postPath,
  title,
  date,
  author,
  imagePath,
  previewText,
}: Post) {
  return (
    <li>
      <ul>
        <li>
          <Link href={postPath}>{title}</Link>
        </li>
        <li>{date}</li>
        <li>{author}</li>
        <li>
          <Image
            src={imagePath}
            alt={title}
            width={800}
            height={600}
            quality={100}
          />
        </li>
        <li>{previewText}</li>
      </ul>
    </li>
  );
}
