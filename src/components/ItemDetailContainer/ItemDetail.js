import React from 'react';

export const ItemDetail = ({ id, name, category, image, price }) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col imagenDetail" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>Descripcion</p>
        <h2> ${price} </h2>
      </section>
    </div>
  );
};
