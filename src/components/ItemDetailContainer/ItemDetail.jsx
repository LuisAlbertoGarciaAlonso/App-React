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
        (<><button className="btn btn-success " ><Link to= "/Carrito" className="btnTerminarCompra terminarCompra">Terminar Compra</Link></button> <button  className="btn btn-secondary " ><Link to= "/" className="btnTerminarCompra">Seguir Comprando </Link></button></>)
        :
        (<>  <ItemCount stock={stock} onAdd={onAdd}/> </>)
        }
      </section>
    </div>
  );
};
