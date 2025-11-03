// app/obrigado/page.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link"; // Importa o componente de Link

export default function ObrigadoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <motion.div
        className="text-center bg-gray-800 p-8 md:p-12 rounded-lg shadow-2xl border border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 150 }}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold mt-6">
          Tudo Certo!
        </h1>
        <p className="mt-4 text-lg max-w-lg mx-auto text-gray-300">
          Recebemos seu pedido de demonstração. Nossa equipe entrará em
          contato com você pelo WhatsApp ou e-mail o mais rápido possível.
        </p>

        <Link
          href="/" // Link de volta para a página inicial
          className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-300"
        >
          Voltar ao Início
        </Link>
      </motion.div>
    </main>
  );
}