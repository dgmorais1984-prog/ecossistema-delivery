// components/ModulosEmAcao.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Componente SIMPLES de imagem - sem complicação
const SimpleImage = ({ 
  src, 
  alt, 
  onClick 
}: { 
  src: string; 
  alt: string; 
  onClick: () => void;
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-auto rounded-lg shadow-md border border-gray-600 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  );
};

// Componente para um grupo de imagens de um módulo
const ModuloDisplay = ({
  title,
  description,
  images,
  delay,
}: {
  title: string;
  description: string;
  images: { src: string; alt: string }[];
  delay: number;
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img.src,
    alt: img.alt,
    title: img.alt, 
  }));

  return (
    <motion.div
      className="bg-gray-800 p-4 sm:p-6 rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <h3 className="text-2xl sm:text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400 text-sm sm:text-base">{description}</p>
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: delay + idx * 0.05 }}
          >
            <SimpleImage
              src={img.src}
              alt={img.alt}
              onClick={() => {
                setIndex(idx); 
                setOpen(true); 
              }}
            />
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides} 
        plugins={[Thumbnails, Zoom]} 
        controller={{ closeOnPullDown: true }} 
      />
    </motion.div>
  );
};

export function ModulosEmAcao() {
  return (
    <section
      id="modulos"
      className="w-full py-12 md:py-20 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Módulos Detalhados: Veja em Ação!
          </h2>
          <p className="mt-3 text-base md:text-lg max-w-2xl mx-auto text-gray-400">
            Explore a interface real de cada módulo e suas funcionalidades
            principais. Clique nas imagens para ampliar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-6">
          
          {/* MÓDULO DONO */}
          <ModuloDisplay
            title="Módulo Dono"
            description="Controle total do seu negócio na palma da mão."
            delay={0}
            images={[
              {
                src: "/modulos-em-acao/dono/dono-relatorios.jpg",
                alt: "Relatórios de vendas",
              },
              {
                src: "/modulos-em-acao/dono/dono-cardapio.jpg",
                alt: "Cadastro de cardápio",
              },
              {
                src: "/modulos-em-acao/dono/dono-funcionarios.jpg",
                alt: "Gestão de funcionários",
              },
              {
                src: "/modulos-em-acao/dono/dono-home.jpg",
                alt: "Tela inicial do módulo dono",
              },
              {
                src: "/modulos-em-acao/dono/dono-entrega.jpg",
                alt: "Configuração de entrega",
              },
              {
                src: "/modulos-em-acao/dono/dono-resumo.jpg",
                alt: "Resumo financeiro",
              },
            ]}
          />

          {/* MÓDULO CAIXA */}
          <ModuloDisplay
            title="Módulo Caixa"
            description="Fechamento rápido e gestão inteligente do salão."
            delay={0.1}
            images={[
              {
                src: "/modulos-em-acao/caixa/caixa-mesa.jpg",
                alt: "Controle de mesas abertas",
              },
              {
                src: "/modulos-em-acao/caixa/caixa-delivery.jpg",
                alt: "Fechamento de conta com troco",
              },
              {
                src: "/modulos-em-acao/caixa/caixa-acompanhar.jpg",
                alt: "Tela de cancelamento de pedido",
              },
			  {
                src: "/modulos-em-acao/caixa/caixa-detalhes-entrega.jpg",
                alt: "Detalhes da entrega",
              },
			  {
                src: "/modulos-em-acao/caixa/caixa-salao.jpg",
                alt: "Controle do salão",
              },
			  {
                src: "/modulos-em-acao/caixa/caixa-movimento.jpg",
                alt: "Movimento do caixa",
              },
            ]}
          />

          {/* MÓDULO GARÇOM */}
          <ModuloDisplay
            title="Módulo Garçom"
            description="Agilidade no atendimento e envio de pedidos."
            delay={0.2}
            images={[
              {
                src: "/modulos-em-acao/garcom/garcom-mesas.jpg",
                alt: "Visão geral das mesas",
              },
              {
                src: "/modulos-em-acao/garcom/garcom-itens.jpg",
                alt: "Seleção de itens",
              },
			  {
                src: "/modulos-em-acao/garcom/garcom-pedido.jpg",
                alt: "Detalhes do pedido",
              },
			  {
                src: "/modulos-em-acao/garcom/garcom-opcoes.jpg",
                alt: "Opções do pedido",
              },
			  {
                src: "/modulos-em-acao/garcom/garcom-confirmar-entrega.jpg",
                alt: "Confirmação de entrega",
              },
            ]}
          />

          {/* MÓDULO COZINHA */}
          <ModuloDisplay
            title="Módulo Cozinha"
            description="Organização da fila de preparo e avisos em tempo real."
            delay={0.3}
            images={[
              {
                src: "/modulos-em-acao/cozinha/cozinha-painel.jpg",
                alt: "Fila de pedidos na cozinha",
              },
              {
                src: "/modulos-em-acao/cozinha/cozinha-itens.jpg",
                alt: "Itens do pedido",
              },
			  {
                src: "/modulos-em-acao/cozinha/cozinha-preparo.jpg",
                alt: "Preparo do pedido",
              },
            ]}
          />

          {/* APP DO CLIENTE */}
          <ModuloDisplay
            title="App do Cliente"
            description="Seu delivery próprio na mão do seu cliente."
            delay={0.4}
            images={[
              {
                src: "/modulos-em-acao/cliente/cliente-menu.jpg",
                alt: "Cardápio do cliente com fotos",
              },
              {
                src: "/modulos-em-acao/cliente/cliente-cardapio.jpg",
                alt: "Carrinho de compras do cliente",
              },
              {
                src: "/modulos-em-acao/cliente/cliente-checkout.jpg",
                alt: "Checkout do pedido",
              },
			  {
                src: "/modulos-em-acao/cliente/cliente-checkout2.jpg",
                alt: "Finalização do pedido",
              },
			  {
                src: "/modulos-em-acao/cliente/cliente-status.jpg",
                alt: "Status do pedido",
              },
			  {
                src: "/modulos-em-acao/cliente/cliente-rastreio.jpg",
                alt: "Rastreamento de motoboy",
              },
            ]}
          />

          {/* APP DO MOTOBOY */}
          <ModuloDisplay
            title="App do Motoboy"
            description="Gestão de entregas eficiente e rastreio em tempo real."
            delay={0.5}
            images={[
              {
                src: "/modulos-em-acao/motoboy/motoboy-pedidos.jpg",
                alt: "Fila de pedidos para motoboy",
              },
              {
                src: "/modulos-em-acao/motoboy/motoboy-detalhes.jpg",
                alt: "Tela de Detalhes do Pedido",
              },
              {
                src: "/modulos-em-acao/motoboy/motoboy-aceito.jpg",
                alt: "Pedido Aceito",
              },
			  {
                src: "/modulos-em-acao/motoboy/motoboy-entrega.jpg",
                alt: "Confirmação de entrega",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}