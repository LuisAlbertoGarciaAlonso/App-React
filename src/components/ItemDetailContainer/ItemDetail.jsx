import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "../../Css/itemDetail.css"

export const ItemDetail = ({ id, name, category, image, price, stock , onAdd, irAlCarrito}) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col imagenDetail" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>Descripcion</p>
        <h2>$ {price} </h2>

        {irAlCarrito? 
        (<><button className="btn btn-success " ><Link to= "/Carrito" className="btnTerminarCompra">Terminar Compra</Link></button></>)
        :
        (<>  <ItemCount stock={stock} onAdd={onAdd}/> </>)
        }

        {/* ACA PONER EL CONTADOR!!! */}
        {/* aca un Link con el terminar compra */}
      </section>
    </div>
  );
};
