import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TablaClientes from "../components/clientes/TablaClientes";
import CuadroBusquedas from "../components/busquedas/CuadroBusquedas,";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  // 🔹 Función para obtener clientes desde la API
  const obtenerClientes = async () => {
    try {
      const respuesta = await fetch("http://localhost:3000/api/clientes");
      if (!respuesta.ok) throw new Error("Error al obtener los clientes");

      const datos = await respuesta.json();
      setClientes(datos);
      setClientesFiltrados(datos);
      setCargando(false);
    } catch (error) {
      console.log(error.message);
      setCargando(false);
    }
  };

  // 🔹 Función de búsqueda (fuera de obtenerClientes)
  const manejarCambioBusqueda = (e) => {
    const texto = e.target.value.toLowerCase();
    setTextoBusqueda(texto);

    const filtradas = clientes.filter(
      (cliente) =>
        cliente.primer_nombre.toLowerCase().includes(texto) ||
        cliente.segundo_nombre.toLowerCase().includes(texto) ||
        cliente.primer_apellido.toLowerCase().includes(texto) ||
        cliente.segundo_apellido.toLowerCase().includes(texto) ||
        cliente.cedula.toLowerCase().includes(texto) ||
        cliente.celular.toLowerCase().includes(texto)
    );

    setClientesFiltrados(filtradas);
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  return (
    <Container className="mt-4">
      <h4>Clientes</h4>

      <Row>
        <Col lg={5} md={8} sm={8} xs={7}>
          <CuadroBusquedas
            textoBusqueda={textoBusqueda}
            manejarCambioBusqueda={manejarCambioBusqueda}
          />
        </Col>
      </Row>

      <TablaClientes clientes={clientesFiltrados} cargando={cargando} />
    </Container>
  );
};

export default Clientes;
