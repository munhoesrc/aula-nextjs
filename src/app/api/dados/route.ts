"use server";

export async function GET() {
  return Response.json([
    {
      id: 1,
      title: "Como usar Next.js com Tailwind CSS",
      content:
        "Neste post, vamos aprender como configurar Tailwind CSS em um projeto Next.js do zero.",
      author: "Renan Munhoes",
      publishedAt: "2025-04-10T12:00:00Z",
    },
    {
      id: 2,
      title: "Entendendo Server Side Rendering (SSR)",
      content:
        "O SSR permite que o conteúdo de uma página seja renderizado no servidor antes de ser enviado para o navegador.",
      author: "Teste dos Santos",
      publishedAt: "2025-04-11T08:30:00Z",
    },
    {
      id: 3,
      title: "Dicas para melhorar a performance no React",
      content:
        "Vamos explorar técnicas como memoização, lazy loading e uso correto do useEffect.",
      author: "Teste Segundo dos Santos",
      publishedAt: "2025-04-12T16:45:00Z",
    },
  ]);
}
