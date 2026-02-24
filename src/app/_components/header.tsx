import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Blog</Link>
        <Link href="/contact-me">Contact</Link>
        <Link href="/about-me">About</Link>
      </nav>
    </header>
  );
}