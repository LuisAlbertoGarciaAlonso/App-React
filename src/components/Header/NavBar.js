import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const NavBar = () => {
  const categories = [
    { id: '', address: '/', text: 'ELECTRIFICA' },
    { id: '', address: '/category/herramientas de mano', text: 'Herramientas de Mano' },
    { id: '', address: '/category/medicion', text: 'Medicion' },
    { id: '', address: '/category/porta herramientas', text: 'Porta Herramientas' },
  ];
  return (
    <section className="aparecer">
      {categories.map((cat) => {
        return (
          <div className="links firma animate__animated animate animate__flip" key={cat.id}>
            <NavLink
              to={cat.address}
              className={({ isActive }) => (isActive ? 'activeClass' : '')}>
              {cat.text}
            </NavLink>
          </div>
        );
      })}
    </section>
  );
};
