// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script"; // 1. IMPORTAMOS O COMPONENTE SCRIPT
import "./globals.css"; 

export const metadata: Metadata = {
  // Título e SEO Otimizados
  title: "Sistema de Gestão e Delivery Próprio para Lanchonetes | Sem Taxas",
  description:
    "Tenha seu sistema de gestão completo (caixa, salão, cozinha) e app de delivery próprio. Plataforma 100% modular. Agende uma demonstração gratuita!",
  keywords: "sistema para lanchonete, sistema para restaurante, app de delivery proprio, gestao de salao, sistema de caixa, app de garcom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {/* Aqui está o seu site */}
        {children}
        
        {/* --- GOOGLE ANALYTICS (G-CBK38CGERY) --- */}
        {/* 2. Adicionamos o script do Google Tags */}
        <Script
          strategy="afterInteractive" // Carrega o script após o site ficar interativo (ótimo para performance)
          src="https://www.googletagmanager.com/gtag/js?id=G-CBK38CGERY" 
        />
        
        {/* 3. Inicializamos o Analytics com seu ID */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CBK38CGERY');
          `}
        </Script>
      </body>
    </html>
  );
}