import { useState } from "react";

function Inicio() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {};

  return (
    <>
      <nav>
        <button>Log In</button>
      </nav>
      <body>
        <img src="/Veritaso.png" alt="Logo Veritaso" />
        <input />
        <button>Buscar</button>
      </body>
    </>
  );
}
export default Inicio;
