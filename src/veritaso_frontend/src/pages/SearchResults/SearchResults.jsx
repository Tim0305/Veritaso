import { veritaso_backend } from "declarations/veritaso_backend";
import { useEffect, useState } from "react";
import { RiDeleteBinLine, RiEditLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import styles from "./SearchResult.module.css";
import Navbar from "../../components/NavBar/NavBar";

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

  const handleDeleteArticulo = (id) => {
    veritaso_backend.deleteArticulo(id).then((response) => {
      if (response) {
        alert("El articulo se elimino correctamente");
        // Actuaizar la lista de articulos
        cargarDatosDatabase();
      } else alert("Hubo un error al eliminar el articulo");
    });
  };

  const cargarDatosDatabase = () => {
    // Obtener la lista de articulos
    veritaso_backend.getArticulos().then((response) => setArticulos(response));
  };

  useEffect(() => {
    cargarDatosDatabase();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <span>{}</span>
        <div className={styles.resultadosContainer}>
          {articulosFiltrados.length === 0 ? (
            <NotFound />
          ) : (
            <ul>
              {articulosFiltrados.map((a) => (
                <li key={a.id} className={styles.listItem}>
                  <div className={styles.botones}>
                    <button onClick={() => handleClickModificarArticulo(a.id)}>
                      <RiEditLine size={40} />
                    </button>
                    <button onClick={() => handleDeleteArticulo(a.id)}>
                      <div className="delete-icon">
                        <RiDeleteBinLine size={40} />
                      </div>
                    </button>
                  </div>
                  <a
                    className={styles.tituloArticulo}
                    onClick={() => handleClickArticulo(a.id)}
                  >
                    <b>{a.titulo}</b>
                  </a>
                  <p className={styles.resumenArticulo}>{a.resumen}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
