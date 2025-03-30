import { useLocation, useNavigate } from "react-router-dom";
import { veritaso_backend } from "declarations/veritaso_backend";
import styles from "./SearchResult.module.css";
import { useEffect, useState } from "react";

function SearchResults() {
  // Obtener la busqueda del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("busqueda");
  const navigate = useNavigate();

  const [articulos, setArticulos] = useState([]);

  const articulosFiltrados = articulos.filter((a) => {
    return a.titulo.toLowerCase().includes(search.toLowerCase());
  });

  const handleClickArticulo = (id) => {
    navigate(`/articulo?id=${encodeURIComponent(id)}`);
  };

  const handleClickModificarArticulo = (id) => {
    navigate(`/modificarArticulo?id=${encodeURIComponent(id)}`);
  };

  useEffect(() => {
    // Obtener la lista de articulos
    veritaso_backend.getArticulos().then((response) => setArticulos(response));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filtrosContainer}></div>
      <div className={styles.resultadosContainer}>
        {articulosFiltrados.length === 0 ? (
          <span>Sin resultados</span>
        ) : (
          <ul>
            {articulosFiltrados.map((a) => (
              <li key={a.id} className={styles.listItem}>
                <a
                  className={styles.tituloArticulo}
                  onClick={() => handleClickArticulo(a.id)}
                >
                  <b>{a.titulo}</b>
                </a>
                <p className={styles.resumenArticulo}>{a.resumen}</p>
                <button onClick={() => handleClickModificarArticulo(a.id)}>
                  Modificar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
