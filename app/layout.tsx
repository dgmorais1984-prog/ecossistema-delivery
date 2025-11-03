// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Importa o CSS global que limpamos

export const metadata: Metadata = {
  // 1. TÍTULO (O mais importante - 60 caracteres)
  title: "Sistema de Gestão e Delivery Próprio para Lanchonetes | Sem Taxas",

  // 2. DESCRIÇÃO (O que convence o clique - 160 caracteres)
  description:
    "Tenha seu sistema de gestão completo (caixa, salão, cozinha) e app de delivery próprio. Plataforma 100% modular. Agende uma demonstração gratuita!",
  
  // 3. PALAVRAS-CHAVE (Bônus para ajudar o Google)
  keywords: "sistema para lanchonete, sistema para restaurante, app de delivery proprio, gestao de salao, sistema de caixa, app de garcom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      {/* Removemos qualquer className da tag <body> 
        para que ela não interfira nos estilos de fundo 
        de cada seção da nossa página.
      */}
      <body>{children}</body>
    </html>
  );
}