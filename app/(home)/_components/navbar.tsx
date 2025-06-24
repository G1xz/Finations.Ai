"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-solid">
      {/*Esquerda*/}
      <div className="flex itens-center gap-10">
        <Image
          src="/logo.png"
          width={33}
          height={33}
          alt="financeAi"
          className="rounded-full"
        />
        <Link
          href="/"
          className={
            pathname == "/" ? "text-primary font-bold" : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname == "/transactions"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Transacoes
        </Link>
        <Link
          href="/subscription"
          className={
            pathname == "/subscription"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      {/*Direita*/}
      <UserButton showName />
    </nav>
  );
};

export default Navbar;
