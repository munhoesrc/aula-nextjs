import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";

import Link from "next/link";
import { Package, PanelBottom } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="flex w-full flex-col bg-muted/40">
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:px-12">
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
                  className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base"
                  prefetch={false}
                >
                  <Package className="w-5 h-5 transition-all" />
                  <span className="sr-only">Conteúdo Sidebar</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  );
}
