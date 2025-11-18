import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Encabezado from "./components/navegacion/Encabezado";

import Login from "./views/Login";
import Inicio from "./views/Inicio";
import Empleados from "./views/Empleados";
import Categorias from "./views/Categorias";
import Clientes from "./views/Clientes";
import Productos from "./views/Productos";
import Usuarios from "./views/Usuarios";
import Ventas from "./views/Ventas";
import Compras from "./views/Compras";
import Catalogo from "./views/Catalogo";
import RutaProtegida from "./components/rutas/RutaProtegida";

import "./App.css";

const AppContent = () => {
  const location = useLocation();

  // Ocultar encabezado en login y root
  const rutasSinEncabezado = ["/", "/login"];
  const mostrarEncabezado = !rutasSinEncabezado.includes(location.pathname);

  return (
    <>
      {mostrarEncabezado && <Encabezado />}

      <main className={mostrarEncabezado ? "margen-superior-main" : ""}>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route path="/inicio" element={<RutaProtegida vista={<Inicio />} />} />
          <Route path="/categorias" element={<RutaProtegida vista={<Categorias />} />} />
          <Route path="/clientes" element={<RutaProtegida vista={<Clientes />} />} />
          <Route path="/empleados" element={<RutaProtegida vista={<Empleados />} />} />
          <Route path="/usuarios" element={<RutaProtegida vista={<Usuarios />} />} />
          <Route path="/ventas" element={<RutaProtegida vista={<Ventas />} />} />
          <Route path="/compras" element={<RutaProtegida vista={<Compras />} />} />
          <Route path="/productos" element={<RutaProtegida vista={<Productos />} />} />
          <Route path="/catalogo" element={<RutaProtegida vista={<Catalogo />} />} />

          {/* Ruta 404 */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
