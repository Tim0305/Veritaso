import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Buscador from "./pages/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import SearchResults from "./pages/SearchResults/SearchResults";
import Articulo from "./pages/Articulo/Articulo";
import NotFound from "./pages/NotFound/NotFound";
import ModificarArticulo from "./pages/ModificarArticulo/ModificarArticulo";
import CrearArticulo from "./pages/CrearArticulo/CrearArticulo";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Buscador />} />
            <Route path="/resultados" element={<SearchResults />} />
            <Route path="/articulo" element={<Articulo />} />
            <Route path="/modificarArticulo" element={<ModificarArticulo />} />
            <Route path="/crearArticulo" element={<CrearArticulo />} />
            {/* Redirige a Home si la ruta no existe */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
