import React from "react";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ vista }) => {

  // Verifica si el usuario está autenticado usando un flag
  const estaLogueado = localStorage.getItem("logueado") === "true";

  console.log("Usuario autenticado:", estaLogueado);

  return estaLogueado ? vista : <Navigate to="/" replace />;
};

export default RutaProtegida;
