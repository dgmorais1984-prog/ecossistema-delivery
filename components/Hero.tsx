// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// Importar o ícone de seta para baixo
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      // A 'flex items-center' vai centralizar o grid do conteúdo
      className="relative w-full min-h-screen flex items-center bg-gray-900 text-white overflow-hidden"
    >
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,122,255,.15),rgba(255,255,255,0))]"></div>
      </div>

      {/* --- ÍCONES COM POSIÇÃO ABSOLUTA E RESPONSIVOS --- */}
      <motion.div
        // No CELULAR (default): Perto do topo (top-8) e centralizado (justify-center)
        // No DESKTOP (lg:): Mais para baixo (lg:top-16) e na esquerda (lg:justify-start)
        className="absolute top-8 lg:top-16 left-0 right-0 z-20 flex justify-center lg:justify-start items-center gap-x-6 lg:gap-x-16 container mx-auto px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {/* Ícone 1: App Lanchonete / Gestão */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/icones-apps/icone-chef-tablet.png"
            alt="Ícone App Lanchonete"
            width={200} // Resolução (mantém alta)
            height={200} // Resolução (mantém alta)
            // --- ALTERAÇÃO RESPONSIVA ---
            // CELULAR: w-20 h-20 (80px)
            // DESKTOP: lg:w-48 lg:h-48 (192px)
            className="w-20 h-20 lg:w-48 lg:h-48 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-700"
          />
        </motion.div>

        {/* Ícone 2: App Delivery Cliente */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Image
            src="/icones-apps/icone-delivery-bag.png"
            alt="Ícone App Delivery Cliente"
            width={200} // Resolução
            height={200} // Resolução
            // --- ALTERAÇÃO RESPONSIVA ---
            className="w-20 h-20 lg:w-48 lg:h-48 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-700"
          />
        </motion.div>

        {/* Ícone 3: App Motoboy */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Image
            src="/icones-apps/icone-motoboy.png"
            alt="Ícone App Motoboy"
            width={200} // Resolução
            height={200} // Resolução
            // --- ALTERAÇÃO RESPONSIVA ---
            className="w-20 h-20 lg:w-48 lg:h-48 rounded-2xl lg:rounded-3xl shadow-lg border border-gray-700"
          />
        </motion.div>
      </motion.div>

      {/* Container do Conteúdo */}
      <div className="container mx-auto px-4 z-10">
        
        {/* --- ALTERAÇÃO AQUI --- */}
        {/* Adicionando padding-top RESPONSIVO para o texto não bater nos ícones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-40 lg:pt-0">
          
          {/* Coluna 1: Texto */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Título (com tamanho de fonte responsivo) */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Gerencie seu Negócio.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500">
                Venda sem Limites e sem Taxas.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-gray-300">
              A plataforma completa que integra caixa, cozinha, garçom e seu
              app de delivery próprio. 100% modular, 100% seu.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#video"
                className="px-8 py-3 w-full sm:w-auto font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                Ver Demonstração
              </a>
              <a
                href="#contato"
                className="px-8 py-3 w-full sm:w-auto font-semibold rounded-md bg-gray-700 hover:bg-gray-600 transition-all duration-300"
              >
                Agendar Demonstração
              </a>
            </div>
          </motion.div>

          {/* Coluna 2: IMAGEM DO APP - AGORA VISÍVEL NO MOBILE TAMBÉM */}
          <motion.div
            // --- CORREÇÃO AQUI ---
            // REMOVIDO: hidden lg:flex
            // ADICIONADO: flex em todas as telas
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/modulos-em-acao/dono/dono-inicio.jpg"
              alt="Tela Inicial do Módulo Dono"
              width={350}
              height={700}
              className="rounded-2xl shadow-2xl shadow-blue-500/20 object-cover max-w-[280px] lg:max-w-none"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Seta para baixo animada para "Role para ver mais" */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400 z-30"
        animate={{ y: [0, -10, 0] }} // Animação de "bounce"
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
        <span className="text-sm mt-1">Role para ver mais</span>
      </motion.div>
    </section>
  );
}