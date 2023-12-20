import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/productos" className="nav-link">Productos</Link>
        </li>
        <li className="nav-item">
          <Link to="/carrito" className="nav-link">Carrito</Link>
        </li>
        <li className="nav-item">
          <Link to="/iniciar-sesion" className="nav-link">Iniciar Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;


