import { Route, Router, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
}
export default App;
