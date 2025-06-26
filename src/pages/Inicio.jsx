import React, { useState } from "react";
import { motion } from "framer-motion";

function Inicio() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6">
      {!showForm ? (
        <>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Impulsa tus decisiones con inteligencia de datos.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-xl mb-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Plataforma avanzada para que tu negocio tome mejores decisiones y crezca.
          </motion.p>

          <motion.button
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
          >
            Comenzar
          </motion.button>

          <div className="mt-16 max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Análisis Preciso</h3>
              <p>Visualiza tendencias y datos clave con claridad y rapidez.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Decisiones Inteligentes</h3>
              <p>Toma decisiones estratégicas basadas en IA y datos reales.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Crecimiento Seguro</h3>
              <p>Optimiza tus recursos y maximiza tus ganancias.</p>
            </div>
          </div>
        </>
      ) : (
        <motion.div
          className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 max-w-md w-full text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Tu empresa es personal o profesional?
          </motion.h2>

          <motion.div
            className="flex justify-around"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition w-40"
              onClick={() => alert("Seleccionaste Personal")}
            >
              Personal
            </button>

            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition w-40"
              onClick={() => alert("Seleccionaste Profesional")}
            >
              Profesional
            </button>
          </motion.div>

          <motion.button
            className="mt-8 text-indigo-400 hover:text-indigo-600 underline"
            onClick={() => setShowForm(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Volver
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default Inicio;
