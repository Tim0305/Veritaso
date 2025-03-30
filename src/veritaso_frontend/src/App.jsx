import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Articulo from "./pages/Articulo/Articulo";
import Buscador from "./pages/Buscador/Buscador";
import Inicio from "./pages/Inicio/Inicio";
import NotFound from "./pages/NotFound/NotFound";
import SearchResults from "./pages/SearchResults/SearchResults";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Buscador />} />
        <Route path="/resultados" element={<SearchResults />} />
        <Route path="/articulo" element={<Articulo />} />
        {/* Redirige a Home si la ruta no existe */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App;
