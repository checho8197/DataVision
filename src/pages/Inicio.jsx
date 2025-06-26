import React from "react";
import { motion } from "framer-motion";

function Inicio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a DataVision
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center max-w-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Plataforma de análisis inteligente para empresas modernas.
      </motion.p>
      <motion.button
        className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explorar
      </motion.button>
    </div>
  );
}

export default Inicio;
