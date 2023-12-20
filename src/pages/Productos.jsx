import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import '../Productos.css';

const Productos = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

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
            <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      <div>
        <h2>Carrito</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Productos;
