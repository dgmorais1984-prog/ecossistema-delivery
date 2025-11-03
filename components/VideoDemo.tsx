// components/VideoDemo.tsx
"use client";

import { motion } from "framer-motion";

export function VideoDemo() {
  return (
    <section
      id="video" // O ID para o botão "Ver Demonstração"
      className="w-full py-16 md:py-24 bg-gray-950 text-white" // Fundo escuro
    >
      <div className="container mx-auto px-4 text-center">
        
        {/* Título da Seção (MODIFICADO) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Veja seu Ecossistema em Ação
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
            Veja em 2 minutos como o pedido da mesa e o do delivery se
            conectam ao caixa e à entrega.
          </p>
        </motion.div>

        {/* O Player de Vídeo (Sem mudança) */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto shadow-2xl shadow-blue-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <video
            className="w-full h-auto rounded-lg"
            controls 
            preload="metadata" 
            poster="/poster-video.jpg" // (Opcional) A capa do vídeo
          >
            <source
              src="/demo-video.mp4" // Puxa o vídeo da pasta 'public'
              type="video/mp4"
            />
            Seu navegador não suporta o player de vídeo.
          </video>
        </motion.div>
      </div>
    </section>
  );
}