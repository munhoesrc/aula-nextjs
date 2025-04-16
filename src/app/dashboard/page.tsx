import { Button } from "../../components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-wrap gap-x-4">
        <Button className=" text-white p-2 rounded">Voltar</Button>
        <Button className=" text-white p-2 rounded">Avançar</Button>
      </div>
      <p className="mt-4 text-lg">Bem-vindo ao painel de controle!</p>
    </main>
  );
}
