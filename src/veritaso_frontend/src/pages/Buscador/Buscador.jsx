import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import styles from "./Buscador.module.css";

function Buscador() {
  const [search, setSearch] = useState("");
  const buttonRef = useRef(null);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const navigate = useNavigate();

  const handleEnviar = () => {
    // Enviar la busqueda mediante la url
    navigate(`/resultados?busqueda=${encodeURIComponent(search)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (buttonRef.current) buttonRef.current.click();
    }
  };

  return (
    <div className={styles.container}>
      <img src="/Veritaso.png" alt="Logo Veritaso" className={styles.logo} />
      <div className={styles.containerInput}>
        <input
          className={styles.input}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyDown}
          type="text"
          id="input"
          name="input"
          placeholder="Buscar"
        />
        <button
          className={styles.buttonBuscar}
          onClick={handleEnviar}
          ref={buttonRef}
        >
          <CiSearch size={20} />
        </button>
      </div>
      <footer>Veritaso 2025 - Todos los derechos reservados</footer>
    </div>
  );
}

export default Buscador;
