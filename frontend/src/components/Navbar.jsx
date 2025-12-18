import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav>
        <ul className="menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/antecedentes">Antecedentes</Link></li>
          <li><Link to="/informacion">Información</Link></li>
          <li><Link to="/galeria">Galería</Link></li>
          <li 
            className="submenu-container"
            onMouseEnter={() => setSubmenuOpen(true)}
            onMouseLeave={() => setSubmenuOpen(false)}
          >
            <span className="submenu-trigger">
              Únete a Nosotros <span className="arrow">▾</span>
            </span>
            {submenuOpen && (
              <ul className="submenu">
                <li><Link to="/servicio">Servicio Social</Link></li>
                <li><Link to="/practicas">Prácticas Profesionales</Link></li>
                <li><Link to="/vinculacion">Vinculación</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/proyectos">Proyectos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;