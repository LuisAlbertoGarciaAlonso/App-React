import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, category, image, price,stock }) => {
  return (
    <>
    <Link to={`/product/${id}`}>
      <div className={`item_card cardOferta`}>
        <span>{name}</span>
        <span>Cat: {category}</span>
        <span className="tamaño">
          <img src={image} alt={name} className="tamañoImagen"/>
        </span>
        <span>$ {price}</span>
        <span>Stock {stock}</span>
        <button className="btn btn-success botonAdd">Ver Producto</button>
      </div>
    </Link>
    </>
  );
};

