import React from 'react';
import '../Styles/Inicio.css';

const Inicio = () => {
  return (
    <div className="container">
      <header>
        <h1>Bienvenidos a Rage Componentes</h1>
        <p>Tu destino para la última tecnología en componentes para PC.</p>
      </header>

      <main>
        <section>
          <h2>Explora nuestras ofertas</h2>
          <p>Descubre una amplia gama de componentes de alta calidad para mejorar tu experiencia informática.</p>
        </section>

        <section>
          <h2>Características destacadas:</h2>
          <ul>
            <li>Componentes de alta calidad</li>
            <li>Rendimiento excepcional</li>
            <li>Variedad de opciones</li>
            <li>Diseño innovador</li>
          </ul>
        </section>


        <section>
          <h2>¿Por qué elegirnos?</h2>
          <p>Nuestra misión es proporcionar productos de calidad que impulsen tu configuración a nuevos niveles de rendimiento.</p>
        </section>

        <p>¡Explora nuestra colección y lleva tu experiencia informática al siguiente nivel!</p>

        <a href="/productos" className="explore-btn">Ver productos</a>
      </main>

      <footer>
        <p>&copy; 2023 Rage Componentes. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Inicio;
