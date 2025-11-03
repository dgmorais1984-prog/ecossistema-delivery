// components/Solucoes.tsx
"use client";

import { motion } from "framer-motion";
// Importamos o ícone de 'check' que é perfeito para listas de features
import { CheckCircle2 } from "lucide-react";

// Um sub-componente para o Card de cada Pacote
const PackageCard = ({
  title,
  description,
  isBestValue = false,
  children,
}: {
  title: string;
  description: string;
  isBestValue?: boolean;
  children: React.ReactNode;
}) => (
  <motion.div
    className={`relative p-6 rounded-lg border h-full flex flex-col ${
      isBestValue
        ? "border-blue-500 bg-gray-800"
        : "border-gray-700 bg-gray-800"
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
  >
    {/* Selo de "Mais Popular" */}
    {isBestValue && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
        ECOSSISTEMA COMPLETO
      </div>
    )}

    <h3 className="text-2xl font-semibold text-white mt-2">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
    <hr className="my-4 border-gray-600" />
    <ul className="space-y-3">{children}</ul>
  </motion.div>
);

// Um sub-componente para cada item da lista
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2
      size={18}
      className="mt-1 flex-shrink-0 text-blue-400"
    />
    <span className="text-gray-300">{text}</span>
  </li>
);

// O Componente Principal da Seção
export function Solucoes() {
  return (
    <section id="solucoes" className="w-full py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Encontre a Solução Certa para seu Negócio
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
            Do controle de mesas até o ecossistema completo de delivery. Temos
            o plano modular que você precisa.
          </p>
        </motion.div>

        {/* Grid com os 3 Pacotes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Pacote 1: Gestão Interna */}
          <PackageCard
            title="Pacote Gestão Interna"
            description="Para restaurantes e bares com foco total no salão."
          >
            <FeatureItem text="Módulo Dono (Relatórios, Cardápio, Configurações)" />
            <FeatureItem text="Módulo Caixa (Financeiro, Vê o salão, Cancelamentos)" />
            <FeatureItem text="Módulo Garçom (Controle de mesas, Pedidos)" />
            <FeatureItem text="Módulo Cozinha (Fila de pedidos, Aviso de 'Pronto!')" />
          </PackageCard>

          {/* Pacote 2: Gestão + Delivery */}
          <PackageCard
            title="Pacote Gestão + Delivery"
            description="Tenha seu próprio 'iFood' sem pagar taxas."
          >
            <FeatureItem text="TUDO do Pacote Gestão Interna" />
            <FeatureItem text="App do Cliente (Cardápio, Pedidos, Status)" />
            <FeatureItem text="Gestão de Retirada no Local (Takeaway)" />
            <FeatureItem text="Verificação de E-mail e Troca de Senha" />
          </PackageCard>

          {/* Pacote 3: Ecossistema Completo */}
          <PackageCard
            title="Pacote Ecossistema Completo"
            description="A solução definitiva com logística própria."
            isBestValue={true} // Isso ativa o selo de destaque
          >
            <FeatureItem text="TUDO do Pacote Gestão + Delivery" />
            <FeatureItem text="App do Motoboy (Fila de corridas, Aceite)" />
            <FeatureItem text="Rastreio em Tempo Real para o cliente" />
            <FeatureItem text="Integração automática com o Caixa" />
          </PackageCard>
        </div>
      </div>
    </section>
  );
}