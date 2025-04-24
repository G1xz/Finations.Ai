import Image from "next/image";
import React from "react";
import { Button } from "../components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }
  return (
    <div className="grid grid-cols-2 h-full">
      {/*ESQUERDA*/}
      <div className="flex h-full flex-col justify-center p-8 max-w-[500px] mx-auto">
        <div className="flex items-start mb-8">
          <Image
            src="/LOGO.png"
            alt="LOGO"
            height={45}
            width={45}
            className="rounded-full mr-2 "
          />
          <h1 className="text-4xl font-bold mb-3">FINATIONS.AI</h1>
        </div>
        <h1>Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A finations ai e uma plataforma de gestao finaceira que utiliza IA
          para monitorar suas motivacoes, oferecer insights personalizados,
          facilitando o controle do seu orcamento.
        </p>
        <SignInButton>
          <Button variant={"outline"}>
            <LogInIcon />
            Fazer login ou criar conta
          </Button>
        </SignInButton>
      </div>
      {/*DIREITA*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faca login"
          fill
          className="object-coverf"
        />
      </div>
    </div>
  );
};

export default LoginPage;
