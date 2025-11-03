// components/ModulosEmAcao.tsx
"use client"; 

import { motion } from "framer-motion";
// REMOVEMOS O 'next/image'
import { useState } from "react"; 

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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
    // Animação SÓ NO CARD (ISSO ESTÁ CERTO)
    <motion.div
      className="bg-gray-800 p-6 rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* --- ESTA É A SOLUÇÃO --- */}
        {/* Eu REMOVI o <motion.div> que estava aqui */}
        {images.map((img, idx) => (
          <div key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-lg shadow-md border border-gray-600 object-cover cursor-pointer hover:scale-105 transition-transform duration-200"
              onClick={() => {
                setIndex(idx); 
                setOpen(true); 
              }}
              loading="lazy" 
            />
          </div>
        ))}
        {/* --- FIM DA SOLUÇÃO --- */}

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
  // O resto da função é O MESMO que você já tem
  // (Eu mantive todos os seus nomes de arquivo .jpg)
  return (
    <section
      id="modulos"
      className="w-full py-16 md:py-24 bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Módulos Detalhados: Veja em Ação!
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
            Explore a interface real de cada módulo e suas funcionalidades
            principais. Clique nas imagens para ampliar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-8">
          
          {/* MÓDULO DONO (Mantive seus nomes) */}
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

          {/* MÓDULO CAIXA (Mantive seus nomes) */}
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
                alt: "Tela de cancelamento de pedido",
              },
			  {
                src: "/modulos-em-acao/caixa/caixa-salao.jpg",
                alt: "Tela de cancelamento de pedido",
              },
			  {
                src: "/modulos-em-acao/caixa/caixa-movimento.jpg",
                alt: "Tela de cancelamento de pedido",
              },
            ]}
          />

          {/* MÓDULO GARÇOM (Mantive seus nomes) */}
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
                alt: "Tela de novo pedido do garçom",
              },
			  {
                src: "/modulos-em-acao/garcom/garcom-pedido.jpg",
                alt: "Tela de novo pedido do garçom",
              },
			  
			  {
                src: "/modulos-em-acao/garcom/garcom-opcoes.jpg",
                alt: "Tela de novo pedido do garçom",
              },
			  {
                src: "/modulos-em-acao/garcom/garcom-confirmar-entrega.jpg",
                alt: "Tela de novo pedido do garçom",
              },
            ]}
          />

          {/* MÓDULO COZINHA (Mantive seus nomes) */}
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
                alt: "Aviso de pedido pronto",
              },
			  
			  {
                src: "/modulos-em-acao/cozinha/cozinha-preparo.jpg",
                alt: "Aviso de pedido pronto",
              },
			  
            ]}
          />

          {/* APP DO CLIENTE (Mantive seus nomes) */}
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
                alt: "Rastreamento de motoboy",
              },
			  
			  {
                src: "/modulos-em-acao/cliente/cliente-checkout2.jpg",
                alt: "Rastreamento de motoboy",
              },

				{
                src: "/modulos-em-acao/cliente/cliente-status.jpg",
                alt: "Rastreamento de motoboy",
              },
			  {
                src: "/modulos-em-acao/cliente/cliente-rastreio.jpg",
                alt: "Rastreamento de motoboy",
              },
            ]}
          />

          {/* APP DO MOTOBOY (Mantive seus nomes) */}
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