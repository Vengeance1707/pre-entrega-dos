const products = [
    {
      id: 1,
      category: 'cpu',
      name: 'Intel Core i7-10700K',
      description: 'Procesador Intel Core i7 de 10ª generación',
      price: 350,
      image: 'url/to/cpu-image.jpg',
    },
    // pendiente que agregue mas productos jeje
  ];
  
  export const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };
  
  export const getProductById = (id) => {
    return products.find((product) => product.id === parseInt(id));
  };
  