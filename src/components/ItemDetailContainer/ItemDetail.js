import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ id, name, category, image, price, stock , onAdd}) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col imagenDetail" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>Descripcion</p>
        <h2> ${price} </h2>
        <ItemCount stock={stock} onAdd={onAdd}/>
        {/* ACA PONER EL CONTADOR!!! */}
        {/* aca un Link con el terminar compra */}
      </section>
    </div>
  );
};
