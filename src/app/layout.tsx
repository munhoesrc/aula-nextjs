import "./globals.css";

import { Header } from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula Next JS do zero!",
  description: "Aprendendo Next.js do zero com Sujeito Programador",
  openGraph: {
    title: "Aprendendo Next.js com Sujeito Programador no YouTube",
    description: "Aprendendo Next.js do zero com Sujeito Programador",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
