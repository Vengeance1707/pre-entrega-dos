import React from 'react';
import { getProductsByCategory } from '../data/products';


const Productos = () => {
  const products = getProductsByCategory('');

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;

