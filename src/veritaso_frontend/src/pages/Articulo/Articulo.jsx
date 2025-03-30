import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Obtener los articulos que coincidan con las busquedas
const articulos = [
  {
    id: 0,
    nombre: "Articulo 1",
    resumen: "Este es el articulo 1",
    texto: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },
  {
    id: 1,
    nombre: "Articulo 2",
    resumen: "Este es el articulo 2",
    texto: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },
  {
    id: 2,
    nombre: "Articulo 3",
    resumen: "Este es el articulo 3",
    texto: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },
];

function Articulo() {
  // Obtener la  del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idArticulo = queryParams.get("id");

  // Obtener el articulo por ID
  const articulo = articulos.find((a) => a.id == idArticulo);

  return articulo ? (
    <Container>
      <div className="pagina">
        <div className="title">
          <h2>{articulo.nombre}</h2>
        </div>
        <br/>
        <div className="resumen">
          <span>{articulo.resumen}</span>
        </div>
        <br />
        <div className="text">
          <span>{articulo.texto}</span>
        </div>
      </div>

    </Container>
  ) : (
    <p>Error, no se pudo encontrar el articulo</p>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center; /* Separa los filtros y los resultados */
  align-items: flex-start; /* Alinea los elementos arriba */
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5, #dcdcdc);

  .pagina{
    width: 50%;
    height: 100vh;
    border-radius: 2px;
    background-color: #fff;
    padding: 80px;

    h2{
      text-align: center;
    }
  }

`;


export default Articulo;
