import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { veritaso_backend } from "declarations/veritaso_backend";

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

  return (
    loading === false && (
      <div>
        <h1>{articulo.titulo}</h1>
        <p>{articulo.resumen}</p>
        <hr />
        <p>{articulo.texto}</p>
      </div>
    )
  );
}

export default Articulo;
