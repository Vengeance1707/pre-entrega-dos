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
          <Route path="/" element={<Catalogo />} />
          <Route path="/category/:category" element={<Catalogo />} />
          <Route path="/item/:id" element={<DetalleDeProducto />} />
          <Route path="/" exact component={Inicio} />
          <Route path="/productos" component={Productos} />
          <Route path="/carrito" component={Carrito} />
          <Route path="/iniciar-sesion" component={IniciarSesion} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
