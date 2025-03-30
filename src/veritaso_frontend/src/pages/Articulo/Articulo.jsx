import { veritaso_backend } from "declarations/veritaso_backend";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../components/NavBar/NavBar";

import { veritaso_backend } from "declarations/veritaso_backend";
import styled from "styled-components";

function Articulo() {
  // Obtener la  del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idArticulo = queryParams.get("id");
  const [loading, setLoading] = useState(true);
  const [articulo, setArticulo] = useState(null);

  // Obtener el articulo por ID
  useEffect(() => {
    veritaso_backend.getArticulo(idArticulo).then((response) => {
      // Obtener el primer articulo
      setArticulo(response[0]);
      setLoading(false);
    });
  }, []);


  return articulo ? (
    <>
      <Navbar />
      <Container>
        <div className="pagina">
          <h2>
            {articulo.titulo}
          </h2>
          <br />
          <div className="resumen">
            <span>
              {articulo.resumen}
            </span>
          </div>
          <div className="texto">
            <span>{articulo.texto}</span>
          </div>
        </div>
      </Container>
    </>
  ) : (
    <p>Error, no se pudo encontrar el articulo</p>
  );
}

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center; /* Separa los filtros y los resultados */
  align-items: flex-start; /* Alinea los elementos arriba */
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f5f5, #dcdcdc);

  .pagina {
    width: 50%;
    height: 100vh;
    border-radius: 2px;
    background-color: #fff;
    padding: 80px;

    h2 {
      text-align: center;
    }

  }
`;

export default Articulo;
