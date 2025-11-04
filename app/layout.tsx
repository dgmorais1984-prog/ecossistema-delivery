// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css"; 

export const metadata: Metadata = {
  // SEO PRINCIPAL (que o Google mostra nas buscas)
  title: "Sistema de Gestão e Delivery Próprio para Lanchonetes | Sem Taxas",
  description:
    "Tenha seu sistema de gestão completo (caixa, salão, cozinha) e app de delivery próprio. Plataforma 100% modular. Agende uma demonstração gratuita!",
  keywords: "sistema para lanchonete, sistema para restaurante, app de delivery proprio, gestao de salao, sistema de caixa, app de garcom",
  
  // --- VERIFICAÇÃO DO GOOGLE SEARCH CONSOLE ---
  metadataBase: new URL('https://ecossistema-delivery.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  
  // 1. A TAG DE VERIFICAÇÃO VAI AQUI (Para o Google Search Console)
  verification: {
    google: '1dTpVWwpI-ZlQ1hRiIVnSoFLJePLI4TxBSN7gygAljg',
  },
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-CBK38CGERY" 
        />
        
        {/* Inicializa o Analytics */}
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