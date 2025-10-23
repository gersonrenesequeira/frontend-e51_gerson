import { Table, Spinner } from "react-bootstrap";

const TablaProductos = ({ productos, cargando }) => {

    if (cargando){
        return(
        <>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
        </>
        );
    }

    return (
        <>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>ID Producto</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>ID Categoría</th>
                        <th>Precio Unitario</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => {
                    return(
                        <tr key={producto.id_producto}>
                            <td>{producto.id_producto}</td>
                            <td>{producto.nombre_producto}</td>
                            <td>{producto.descripcion_producto}</td>
                            <td>{producto.id_categoria}</td>
                            <td>{producto.precio_unitario}</td>
                            <td>{producto.stock}</td>
                            <td>
                                {producto.imagen ? (
                                    <img src={producto.imagen} alt={producto.nombre_producto} style={{ width: "50px", height: "50px" }} />
                                ) : (
                                    "Sin imagen"
                                )}
                            </td>
                            <td>Acción</td>
                        </tr>
                    );
                  })}
                </tbody>
            </Table>
        </>
    )
}

export default TablaProductos;
