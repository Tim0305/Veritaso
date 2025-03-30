import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styles from "./Buscador.module.css";

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
        <input className={styles.input} onChange={handleChangeSearch}
          type="text"
          id="input"
          name="input"
          placeholder="Buscar"       
        />
        <button className={styles.buttonBuscar} onClick={handleEnviar}>
          <CiSearch size={20}/>
        </button>
      </div>
      <footer>
        Veritaso 2025 - Todos los derechos reservados
      </footer>
    </div>
    
  );
}

export default Buscador;
