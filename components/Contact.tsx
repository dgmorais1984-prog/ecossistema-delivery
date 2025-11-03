// components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato" // O ID para o botão "Agendar Demo"
      className="w-full py-16 md:py-24 bg-gray-950 text-white"
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Vamos Conversar?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-400">
            Agende sua demonstração gratuita. Preencha abaixo e nossa equipe
            entrará em contato o mais rápido possível.
          </p>
        </motion.div>

        {/* --- ALTERAÇÃO AQUI --- */}
        {/* Trocamos o Formspree pelo Formsubmit */}
        <motion.form
          // 1. TROQUE AQUI pelo seu e-mail
          action="https://formsubmit.co/diogorrc@hotmail.com" 
          method="POST"
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* 2. ESTE CAMPO "MÁGICO" FAZ O REDIRECT DE GRAÇA */}
          <input 
            type="hidden" 
            name="_next" 
            // 3. Coloque o link da sua página de obrigado
            value="http://localhost:3000/obrigado" 
          />
          
          {/* Opcional: Desativa o Captcha (só durante o teste) */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Nome e Nome da Lanchonete */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Seu Nome
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Nome da Lanchonete
              </label>
              <input
                type="text"
                name="lanchonete"
                id="company"
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* WhatsApp e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300">
                WhatsApp (com DDD)
              </label>
              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="(XX) 9XXXX-XXXX"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Seu E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 p-3 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          {/* Botão de Envio */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-10 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300"
            >
              Agendar Demonstração
              <Send size={18} className="ml-2" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}