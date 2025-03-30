import { useLocation } from "react-router-dom";

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

function Articulo() {
  // Obtener la  del usuario enviada mediante la URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idArticulo = queryParams.get("id");

  // Obtener el articulo por ID
  const articulo = articulos.find((a) => a.id == idArticulo);

  return articulo ? (
    <div>
      <h1>{articulo.nombre}</h1>
      <p>{articulo.resumen}</p>
      <hr />
      <p>{articulo.texto}</p>
    </div>
  ) : (
    <p>Error, no se pudo encontrar el articulo</p>
  );
}

export default Articulo;
