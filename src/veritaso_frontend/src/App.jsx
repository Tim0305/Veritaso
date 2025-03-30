import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Buscador from "./pages/Buscador/Buscador";
import Inicio from "./pages/Inicio/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}

export default App;
