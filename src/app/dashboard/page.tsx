import ChartOverview from "@/components/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, UserRoundPlus, ArrowDownUp, Car } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 - Total de vendas */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Todal vendas
              </CardTitle>
              <DollarSign className="text-lg sm:text-xl text-gray-800" />
            </div>
            <CardDescription className="flex items-center justify-start">
              Total de vendas em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold flex items-center justify-start">
              $ 40.000
            </p>
          </CardContent>
        </Card>

        {/* Card 2 - Total de clientes */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de clientes
              </CardTitle>
              <UserRoundPlus className="text-lg sm:text-xl text-gray-800" />
            </div>
            <CardDescription className="flex items-center justify-start">
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold flex items-center justify-start">
              120
            </p>
          </CardContent>
        </Card>

        {/* Card 3 - Total de pedidos */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de pedidos
              </CardTitle>
              <ArrowDownUp className="text-lg sm:text-xl text-gray-800" />
            </div>
            <CardDescription className="flex items-center justify-start">
              Total de pedidos em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold flex items-center justify-start">
              1.320
            </p>
          </CardContent>
        </Card>

        {/* Card 4 - Total de entregas */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de entregas
              </CardTitle>
              <Car className="text-lg sm:text-xl text-gray-800" />
            </div>
            <CardDescription className="flex items-center justify-start">
              Total de entregas em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold flex items-center justify-start">
              792
            </p>
          </CardContent>
        </Card>
      </section>
      <section className="py-4">
        <ChartOverview />
      </section>
    </main>
  );
}
