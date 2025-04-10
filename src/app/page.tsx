import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aula Next JS do zero!",
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Pagina HOME</h1>
      <p className="mt-4 text-lg">Welcome to my Next.js app!</p>
    </main>
  );
}
