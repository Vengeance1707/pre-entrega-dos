const products = [
  {
    id: 1,
    category: 'cpu',
    name: 'Intel Core i7-10700K',
    description: 'Procesador Intel Core i7 de 10ª generación',
    price: 350,
    image: require('../images/_intel_i7_10700k_.png'),
  },
  {
    id: 2,
    category: 'cpu',
    name: 'AMD Ryzen 9 5900X',
    description: 'Procesador AMD Ryzen 9 de 5ª generación',
    price: 450,
    image: require('../images/amd-ryzen-9-5900x.jpg'),
  },
  {
    id: 3,
    category: 'gpu',
    name: 'NVIDIA GeForce RTX 3080',
    description: 'Tarjeta gráfica NVIDIA GeForce RTX 3080',
    price: 800,
    image: require('../images/3080.png'),
  },
  {
    id: 4,
    category: 'gpu',
    name: 'AMD Radeon RX 6800 XT',
    description: 'Tarjeta gráfica AMD Radeon RX 6800 XT',
    price: 750,
    image: require('../images/AMD Radeon RX 6800 XT.jpg'),
  },
  {
    id: 5,
    category: 'motherboard',
    name: 'ASUS ROG Strix B550-F Gaming',
    description: 'Placa base ASUS ROG Strix B550-F Gaming',
    price: 200,
    image: require('../images/ASUS ROG Strix B550-F.jpg'),
  },
  {
    id: 6,
    category: 'motherboard',
    name: 'MSI MPG B450 Tomahawk MAX',
    description: 'Placa base MSI MPG B450 Tomahawk MAX',
    price: 150,
    image: require('../images/MSI MPG B450 Tomahawk MAX.png'),
  },
  {
    id: 7,
    category: 'ram',
    name: 'Corsair Vengeance LPX 16GB',
    description: 'Memoria RAM Corsair Vengeance LPX 16GB',
    price: 80,
    image: require('../images/Corsair Vengeance LPX 16GB.jpg'),
  },
  {
    id: 8,
    category: 'ram',
    name: 'G.Skill Ripjaws V 32GB',
    description: 'Memoria RAM G.Skill Ripjaws V 32GB',
    price: 120,
    image: require('../images/G.Skill Ripjaws V 32GB.jpg'),
  },
  {
    id: 9,
    category: 'cooler',
    name: 'NZXT Kraken X63 RGB',
    description: 'Refrigeración líquida NZXT Kraken X63 RGB',
    price: 150,
    image: require('../images/NZXT Kraken X63 RGB.jpg'),
  },
  {
    id: 10,
    category: 'cooler',
    name: 'Corsair iCUE H100i RGB Pro XT',
    description: 'Refrigeración líquida Corsair iCUE H100i RGB Pro XT',
    price: 130,
    image: require('../images/Corsair iCUE H100i RGB Pro XT.jpg'),
  },
  {
    id: 11,
    category: 'gpu',
    name: 'AMD Radeon RX 6700 XT',
    description: 'Tarjeta gráfica AMD Radeon RX 6700 XT',
    price: 500,
    image: require('../images/AMD Radeon RX 6700 XT.jpg'),
  },
  {
    id: 12,
    category: 'ram',
    name: 'Kingston HyperX Fury 8GB',
    description: 'Memoria RAM Kingston HyperX Fury 8GB',
    price: 60,
    image: require('../images/Kingston HyperX Fury 8GB.jpg'),
  },
  {
    id: 13,
    category: 'cooler',
    name: 'Cooler Master Hyper 212 RGB',
    description: 'Refrigeración por aire Cooler Master Hyper 212 RGB',
    price: 40,
    image: require('../images/Cooler Master Hyper 212 RGB.jpg'),
  },
  {
    id: 14,
    category: 'motherboard',
    name: 'Gigabyte B550 Aorus Elite',
    description: 'Placa base Gigabyte B550 Aorus Elite',
    price: 180,
    image: require('../images/Gigabyte B550 Aorus Elite.png'),
  },
  {
    id: 15,
    category: 'gpu',
    name: 'NVIDIA GeForce GTX 1660 Super',
    description: 'Tarjeta gráfica NVIDIA GeForce GTX 1660 Super',
    price: 250,
    image: require('../images/NVIDIA GeForce GTX 1660 Super.jpg'),
  },

];

export const getProductsByCategory = (category = null) => {
  if (category) {
    return products.filter((product) => product.category === category);
  } else {
    return products;
  }
};

export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};


