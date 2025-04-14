import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  //const authenticated = false; // Simulando que o usuário não está autenticado
  const authenticated = true; // Simulando que o usuário está autenticado

  if (request.nextUrl.pathname.startsWith("/dashboard") && !authenticated) {
    console.log("ACESSO NEGADO!!");
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
