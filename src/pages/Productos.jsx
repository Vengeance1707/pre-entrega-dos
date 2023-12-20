import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import '../Productos.css';

const Productos = () => {

  const products = getProductsByCategory();

  return (
    <div>
      <h2>Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
