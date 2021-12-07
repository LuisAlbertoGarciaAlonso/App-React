import React from 'react';
import { Link } from 'react-router-dom';


export const Item = ({ id, name, category, image, price }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className={`item_card cardOferta`}>
        <span>{name}</span>
        <span>Cat: {category}</span>
        <span>
          <img src={image} alt={name} className="tamañoImagen"/>
        </span>
        <span>$ {price}</span>
      </div>
    </Link>
  );
};
