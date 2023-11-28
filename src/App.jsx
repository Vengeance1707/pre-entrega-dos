import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Catalogo from './components/Catalogo';
import DetalleDeProducto from './components/DetalleDeProducto';
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
