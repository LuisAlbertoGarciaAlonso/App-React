import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "../../Css/itemDetail.css"
import { ProductsContext } from '../../Context/ProductsContext';


export const ItemDetail = ({ id, name, category, image, price, stock , onAdd, irAlCarrito, data}) => {
  return (
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col imagenDetail" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>Descripcion</p>
        <h2>$ {price} </h2>
        {irAlCarrito? 
        (<>
            <Link to= "/Carrito" className="btnTerminarCompra  btn btn-success">Terminar Compra</Link>
            <Link to= "/" className="btnTerminarCompra  btn btn-secondary">Seguir Comprando</Link>
        </>)
        :
        (<>  <ItemCount stock={stock} onAdd={onAdd}/> </>)
        }
      </section>
    </div>
  );
};
