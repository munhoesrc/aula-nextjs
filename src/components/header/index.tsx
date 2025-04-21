import Link from "next/link";
import { ModeToggle } from "../toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white sm:pl-14">
      <h1 className="text-2xl font-bold">Aula Next</h1>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <a href="/dashboard" className="hover:text-gray-400">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/contatos" className="hover:text-gray-400">
              Contatos
            </a>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-400">
              Posts
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
