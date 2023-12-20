import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Catalogo from './components/Catalogo';
import DetalleDeProducto from './components/DetalleDeProducto';
import Inicio from './pages/Inicio';
import Carrito from './pages/Carrito';
import IniciarSesion from './pages/IniciarSesion';
import Productos from './pages/Productos';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/category/:category" element={<Catalogo />} />
          <Route path="/item/:id" element={<DetalleDeProducto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
