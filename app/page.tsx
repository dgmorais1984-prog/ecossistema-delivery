// app/page.tsx
import { Hero } from "@/components/Hero";
import { Solucoes } from "@/components/Solucoes";
import { ModulosEmAcao } from "@/components/ModulosEmAcao";
import { VideoDemo } from "@/components/VideoDemo";
import { Contact } from "@/components/Contact"; 

export default function Home() {
  return (
    <main>
      {/* 1. O Anzol */}
      <Hero />
      
      {/* 2. O que você vende (Os Pacotes) */}
      <Solucoes />
      
      {/* 3. A Prova (As Telas Reais de Cada Módulo) */}
      <ModulosEmAcao />
      
      {/* 4. A Demonstração (O Vídeo no Fim) */}
      <VideoDemo />
      
      {/* 5. O Fechamento (Onde o cliente "Agenda a Demo") */}
      { <Contact /> }
    </main>
  );
}