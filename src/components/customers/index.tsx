import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserRoundPlus } from "lucide-react";

export default function Customers() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
            Overview de clientes
          </CardTitle>
          <UserRoundPlus className="text-lg sm:text-xl text-gray-800" />
        </div>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Mortimer "Morty" Smith
            </p>
            <span className="text-12[12px] sm:text-sm text-gray-400">
              morty@mail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Mortimer "Morty" Smith
            </p>
            <span className="text-12[12px] sm:text-sm text-gray-400">
              morty@mail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Mortimer "Morty" Smith
            </p>
            <span className="text-12[12px] sm:text-sm text-gray-400">
              morty@mail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Mortimer "Morty" Smith
            </p>
            <span className="text-12[12px] sm:text-sm text-gray-400">
              morty@mail.com
            </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8 rounded-full">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>TT</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Mortimer "Morty" Smith
            </p>
            <span className="text-12[12px] sm:text-sm text-gray-400">
              morty@mail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
