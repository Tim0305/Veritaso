import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SearchResult.module.css";

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

function SearchResults() {
  // Obtener la busqueda del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("busqueda");
  const navigate = useNavigate();

  const articulosFiltrados = articulos.filter((a) =>
    a.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  const handleClickArticulo = (id) => {
    navigate(`/articulo?id=${encodeURIComponent(id)}`);
  };

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
                  className={styles.nombreArticulo}
                  onClick={() => handleClickArticulo(a.id)}
                >
                  <b>{a.nombre}</b>
                </a>
                <p className={styles.resumenArticulo}>{a.resumen}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
