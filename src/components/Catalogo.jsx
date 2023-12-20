import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../data/products';
import ProductCard from './ProductCard';

const Catalogo = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = getProductsByCategory(category);
    setProducts(fetchedProducts);
  }, [category]);

  return (
    <div className="container mt-4">
      <h2>Bienvenidos a Rage Componentes</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
