import "./globals.css";

import { Header } from "../components/header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
