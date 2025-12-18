import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Antecedentes from './pages/Antecedentes';
import Informacion from './pages/Informacion';
import Galeria from './pages/Galeria';
import ServicioSocial from './pages/ServicioSocial';
import Practicas from './pages/Practicas';
import Vinculacion from './pages/Vinculacion';
import Proyectos from './pages/Proyectos';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/antecedentes" element={<Antecedentes />} />
            <Route path="/informacion" element={<Informacion />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/servicio" element={<ServicioSocial />} />
            <Route path="/practicas" element={<Practicas />} />
            <Route path="/vinculacion" element={<Vinculacion />} />
            <Route path="/proyectos" element={<Proyectos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;