import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom'; 
import { ProductsContext } from "../../Context/ProductsContext";


export const NavBar = () => {
  const { cart } = useContext(ProductsContext);

  const categories = [
    { id: '1', address: '/', text: 'ELECTRIFICA' },
    { id: '2', address: '/category/herramientas de mano', text: 'Herramientas de Mano' },
    { id: '3', address: '/category/medicion', text: 'Medicion' },
    { id: '4', address: '/category/porta herramientas', text: 'Porta Herramientas' },
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
      {cart.length && 
      <div className="links firma animate__animated animate animate__flip" key={5}>
            <NavLink
              to="/Carrito"
              className={({ isActive }) => (isActive ? 'activeClass' : '')}>
              Carrito {cart.length}
            </NavLink>
          </div>
      }
    </section>
  );
};
