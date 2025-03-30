import React, { useEffect, useState } from "react";
import styles from "./ModificarArticulo.module.css";
import { veritaso_backend } from "declarations/veritaso_backend";
import { useLocation } from "react-router-dom";

function ModificarArticulo() {
  // Obtener la busqueda del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idArticulo = queryParams.get("id");

  const [articulo, setArticulo] = useState(null);
  const [nombre, setNombre] = useState("");
  const [resumen, setResumen] = useState("");
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(true);

  // Obtener el articulo de la base de datos
  useEffect(() => {
    veritaso_backend.getArticulo(idArticulo).then((response) => {
      setNombre(response.nombre);
      setResumen(response.resumen);
      setTexto(response.texto);
      setLoading(false);
    });
  }, []);

  const handleGuardar = () => {
    const articuloModificado = {
      ...articulo,
      nombre,
      resumen,
      texto,
    };
    onGuardar(articuloModificado); // Llama a la función para manejar el guardado
  };

  return (
    loading && (
      <div className={styles.container}>
        <h2>Modificar Artículo</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="resumen">Resumen:</label>
            <textarea
              id="resumen"
              value={resumen}
              onChange={(e) => setResumen(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="texto">Texto:</label>
            <textarea
              id="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />
          </div>
          <button
            type="button"
            onClick={handleGuardar}
            className={styles.button}
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    )
  );
}

export default ModificarArticulo;
