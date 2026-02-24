import type { Post } from "@/types/postType";
import Link from "next/link";

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
        <li><Link href={postPath}>{title}</Link></li>
        <li>{date}</li>
        <li>{author}</li>
        <li>{imagePath}</li>
        <li>{previewText}</li>
      </ul>
    </li>
  );
}
