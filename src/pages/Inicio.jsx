import React, { useState } from "react";
import { motion } from "framer-motion";

function Inicio() {
  const [showForm, setShowForm] = useState(false);
  const [companyType, setCompanyType] = useState(null); // "independiente" o "corporativa"
  const [independienteAnswers, setIndependienteAnswers] = useState({
    rubro: "",
    tiempoOperacion: "",
    presenciaRedes: "",
    canalVentas: "",
    rangoVentas: "",
  });
  const [corporativaAnswers, setCorporativaAnswers] = useState({
    sector: "",
    sucursales: "",
    empleados: "",
    sistemaGestion: "",
    volumenVentas: "",
    objetivo: "",
  });

  // Manejadores de inputs
  const handleIndependienteChange = (e) => {
    setIndependienteAnswers({ ...independienteAnswers, [e.target.name]: e.target.value });
  };

  const handleCorporativaChange = (e) => {
    setCorporativaAnswers({ ...corporativaAnswers, [e.target.name]: e.target.value });
  };

  // Botón enviar (solo muestra alerta con respuestas por ahora)
  const handleSubmit = () => {
    if (companyType === "independiente") {
      alert("Respuestas Independiente:\n" + JSON.stringify(independienteAnswers, null, 2));
    } else if (companyType === "corporativa") {
      alert("Respuestas Corporativa:\n" + JSON.stringify(corporativaAnswers, null, 2));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-10">
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
      ) : !companyType ? (
        // Elegir tipo empresa
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
            ¿Qué tipo de empresa tienes?
          </motion.h2>

          <motion.div
            className="flex justify-around"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition w-40"
              onClick={() => setCompanyType("independiente")}
            >
              Independiente
            </button>

            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-lg shadow-lg transition w-40"
              onClick={() => setCompanyType("corporativa")}
            >
              Corporativa
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
      ) : companyType === "independiente" ? (
        // Formulario Independiente
        <motion.div
          className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 max-w-lg w-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Cuéntanos sobre tu empresa independiente</h2>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es tu rubro o actividad principal?</span>
            <input
              type="text"
              name="rubro"
              value={independienteAnswers.rubro}
              onChange={handleIndependienteChange}
              placeholder="Ej: ventas online, servicios, artesanías..."
              className="w-full rounded-md px-3 py-2 text-black"
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuánto tiempo llevas operando?</span>
            <select
              name="tiempoOperacion"
              value={independienteAnswers.tiempoOperacion}
              onChange={handleIndependienteChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="menos6">Menos de 6 meses</option>
              <option value="6a12">6-12 meses</option>
              <option value="mas1">Más de 1 año</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Tienes presencia en redes sociales?</span>
            <select
              name="presenciaRedes"
              value={independienteAnswers.presenciaRedes}
              onChange={handleIndependienteChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es tu canal principal de ventas?</span>
            <select
              name="canalVentas"
              value={independienteAnswers.canalVentas}
              onChange={handleIndependienteChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="tiendaFisica">Tienda física</option>
              <option value="online">Online</option>
              <option value="ambos">Ambos</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es tu rango mensual aproximado de ventas?</span>
            <select
              name="rangoVentas"
              value={independienteAnswers.rangoVentas}
              onChange={handleIndependienteChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="menos500">Menos de $500</option>
              <option value="500-2000">$500 - $2000</option>
              <option value="mas2000">Más de $2000</option>
            </select>
          </label>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCompanyType(null)}
              className="text-indigo-400 hover:text-indigo-600 underline font-semibold"
            >
              Volver
            </button>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Enviar
            </button>
          </div>
        </motion.div>
      ) : (
        // Formulario Corporativa
        <motion.div
          className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-8 max-w-lg w-full shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Cuéntanos sobre tu empresa corporativa</h2>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es el sector o industria?</span>
            <input
              type="text"
              name="sector"
              value={corporativaAnswers.sector}
              onChange={handleCorporativaChange}
              placeholder="Ej: Comercio, servicios, manufactura..."
              className="w-full rounded-md px-3 py-2 text-black"
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuántas sucursales o puntos de venta tienes?</span>
            <input
              type="number"
              name="sucursales"
              value={corporativaAnswers.sucursales}
              onChange={handleCorporativaChange}
              placeholder="Ej: 3"
              className="w-full rounded-md px-3 py-2 text-black"
              min={0}
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuántos empleados trabajan en la empresa?</span>
            <input
              type="number"
              name="empleados"
              value={corporativaAnswers.empleados}
              onChange={handleCorporativaChange}
              placeholder="Ej: 25"
              className="w-full rounded-md px-3 py-2 text-black"
              min={0}
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Utilizan algún sistema de gestión o ERP?</span>
            <select
              name="sistemaGestion"
              value={corporativaAnswers.sistemaGestion}
              onChange={handleCorporativaChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
              <option value="planeamos">Planeamos implementar</option>
            </select>
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es el volumen mensual aproximado de ventas o facturación?</span>
            <input
              type="text"
              name="volumenVentas"
              value={corporativaAnswers.volumenVentas}
              onChange={handleCorporativaChange}
              placeholder="Ej: $5000"
              className="w-full rounded-md px-3 py-2 text-black"
            />
          </label>

          <label className="block mb-4">
            <span className="text-lg font-semibold mb-1 block">¿Cuál es tu principal objetivo con la plataforma?</span>
            <select
              name="objetivo"
              value={corporativaAnswers.objetivo}
              onChange={handleCorporativaChange}
              className="w-full rounded-md px-3 py-2 text-black"
            >
              <option value="">Selecciona</option>
              <option value="optVentas">Optimizar ventas</option>
              <option value="mejorarInventario">Mejorar inventario</option>
              <option value="marketing">Marketing</option>
              <option value="analisisFinanciero">Análisis financiero</option>
            </select>
          </label>

          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCompanyType(null)}
              className="text-indigo-400 hover:text-indigo-600 underline font-semibold"
            >
              Volver
            </button>
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            >
              Enviar
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Inicio;
