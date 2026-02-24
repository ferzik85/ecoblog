interface Post {
  id: number;
  postPath: string;
  title: string;
  date: string;
  author: string;
  imagePath: string;
  previewText: string;
}

export const posts: Post[] = [
  {
    id: 1,
    postPath: "/posts/post1",
    title: "First Post",
    date: "2026-02-24",
    author: "Sergey",
    imagePath: "/images/post1.jpg",
    previewText: "preview Text 1"
  },
  {
    id: 2,
    postPath: "/posts/post2",
    title: "Second Post",
    date: "2026-02-24",
    author: "Sergey",
    imagePath: "/images/post2.jpg",
    previewText: "preview Text 2"
  },
];
