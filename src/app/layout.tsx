import type { Metadata } from "next";
import Header from "./_components/header";
import Footer from "./_components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Little eco blog",
  description: "Little eco blog built with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
