import { useState } from "react";
import styles from "./CrearArticulo.module.css";
import { veritaso_backend } from "declarations/veritaso_backend";

function CrearArticulo() {
  const [titulo, setTitulo] = useState("");
  const [resumen, setResumen] = useState("");
  const [texto, setTexto] = useState("");

  const handleGuardar = () => {
    const fechaCreacion = new Date().toISOString();
    veritaso_backend
      .createArticulo(titulo, resumen, texto, fechaCreacion)
      .then((resultado) => {
        if (resultado) alert("El artículo se creó correctamente");
        else alert("Hubo un problema al crear el artículo");
      });
  };

  return (
    <div className={styles.container}>
      <h2>Modificar Artículo</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="titulo">Titulo:</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
        <button type="button" onClick={handleGuardar} className={styles.button}>
          Guardar Cambios
        </button>
      </form>
    </div>
  );
}

export default CrearArticulo;
