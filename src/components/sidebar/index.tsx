import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";

import Link from "next/link";
import {
  Home,
  Package,
  PanelBottom,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      {/* Sidebar para mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header
          className="px-4 sticky top-0 z-30 flex h-14 items-center border-b bg-background gap-4 sm:static
        sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="sm-hidden cursor-pointer"
              >
                <PanelBottom className="w-5 h-5" />
                <span className="sr-only">Abrir Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium p-6">
                <Link
                  href="#"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center
                  text-primary-foreground md:text-base gap-2"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  <span className="sr-only">Conteúdo Sidebar</span>
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="w-5 h-5 transition-all" />
                  Início
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ShoppingBag className="w-5 h-5 transition-all" />
                  Pedidos
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  Produtos
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="w-5 h-5 transition-all" />
                  Clientes
                </Link>

                <Link
                  href="#"
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings className="w-5 h-5 transition-all" />
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </div>
  );
}
