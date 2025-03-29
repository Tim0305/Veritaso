import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log(`Buscando: ${query}`);
    // Aquí puedes agregar la lógica para realizar la búsqueda
  };

  return (
    <div className="home">
      
      <a href="##">Ver lo mas reciente</a>
      <h2>Buscar nota</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar nota..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Home;