import { useState } from "react";
import styles from "./Buscador.module.css";
import { useNavigate } from "react-router-dom";

function Buscador() {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const navigate = useNavigate();

  const handleEnviar = () => {
    // Enviar la busqueda mediante la url
    navigate(`/resultados?busqueda=${encodeURIComponent(search)}`);
  };

  return (
    <div className={styles.container}>
      <img src="/Veritaso.png" alt="Logo Veritaso" className={styles.logo} />
      <div className={styles.containerInput}>
        <input className={styles.input} onChange={handleChangeSearch} />
        <button className={styles.buttonBuscar} onClick={handleEnviar}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Buscador;
