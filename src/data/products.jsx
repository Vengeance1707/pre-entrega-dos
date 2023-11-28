const products = [
  {
    id: 1,
    category: 'cpu',
    name: 'Intel Core i7-10700K',
    description: 'Procesador Intel Core i7 de 10ª generación',
    price: 350,
    image: 'url/to/cpu-image.jpg',
  },
  {
    id: 2,
    category: 'cpu',
    name: 'AMD Ryzen 9 5900X',
    description: 'Procesador AMD Ryzen 9 de 5ª generación',
    price: 450,
    image: 'url/to/ryzen-image.jpg',
  },
  {
    id: 3,
    category: 'gpu',
    name: 'NVIDIA GeForce RTX 3080',
    description: 'Tarjeta gráfica NVIDIA GeForce RTX 3080',
    price: 800,
    image: 'url/to/gpu-image.jpg',
  },
  {
    id: 4,
    category: 'gpu',
    name: 'AMD Radeon RX 6800 XT',
    description: 'Tarjeta gráfica AMD Radeon RX 6800 XT',
    price: 750,
    image: 'url/to/radeon-image.jpg',
  },
  {
    id: 5,
    category: 'motherboard',
    name: 'ASUS ROG Strix B550-F Gaming',
    description: 'Placa base ASUS ROG Strix B550-F Gaming',
    price: 200,
    image: 'url/to/motherboard-image.jpg',
  },
  {
    id: 6,
    category: 'motherboard',
    name: 'MSI MPG B450 Tomahawk MAX',
    description: 'Placa base MSI MPG B450 Tomahawk MAX',
    price: 150,
    image: 'url/to/motherboard-image.jpg',
  },
  {
    id: 7,
    category: 'ram',
    name: 'Corsair Vengeance LPX 16GB',
    description: 'Memoria RAM Corsair Vengeance LPX 16GB',
    price: 80,
    image: 'url/to/memory-image.jpg',
  },
  {
    id: 8,
    category: 'ram',
    name: 'G.Skill Ripjaws V 32GB',
    description: 'Memoria RAM G.Skill Ripjaws V 32GB',
    price: 120,
    image: 'url/to/memory-image.jpg',
  },
  {
    id: 9,
    category: 'cooler',
    name: 'NZXT Kraken X63 RGB',
    description: 'Refrigeración líquida NZXT Kraken X63 RGB',
    price: 150,
    image: 'url/to/cooler-image.jpg',
  },
  {
    id: 10,
    category: 'cooler',
    name: 'Corsair iCUE H100i RGB Pro XT',
    description: 'Refrigeración líquida Corsair iCUE H100i RGB Pro XT',
    price: 130,
    image: 'url/to/cooler-image.jpg',
  },
];

export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};


  