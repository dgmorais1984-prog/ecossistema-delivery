// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Importa o CSS global que limpamos

export const metadata: Metadata = {
  title: "Ecossistema Delivery | A Solução Completa para Lanchonetes",
  description:
    "Plataforma Multi-Tenant com App do Cliente, Gestão da Loja e App do Motoboy.",
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