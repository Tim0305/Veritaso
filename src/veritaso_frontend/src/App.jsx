import { useState } from 'react';
import { veritaso_backend } from 'declarations/veritaso_backend';

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
