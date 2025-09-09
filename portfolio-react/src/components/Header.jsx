import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Mi Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;