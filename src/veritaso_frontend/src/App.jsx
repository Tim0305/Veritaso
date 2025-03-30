import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Articulo from "./pages/Articulo/Articulo";
import Buscador from "./pages/Buscador/Buscador";
import ModificarArticulo from "./pages/ModificarArticulo/ModificarArticulo";
import NotFound from "./pages/NotFound/NotFound";
import SearchResults from "./pages/SearchResults/SearchResults";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Buscador />} />
            <Route path="/resultados" element={<SearchResults />} />
            <Route path="/articulo" element={<Articulo />} />
            <Route path="/modificarArticulo" element={<ModificarArticulo />} />
            {/* Redirige a Home si la ruta no existe */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
