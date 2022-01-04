import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "../../Css/itemDetail.css"
import { ProductsContext } from '../../Context/ProductsContext';




const ItemDetail = ({ id, name, category, image, price, stock , onAdd, irAlCarrito,}) => {
  return (
    <div className="detail-row" key ={id} id={id}>
      <img src={image} alt={`${id}-${name}`} className="flex-col imagenDetail" />
      <section className="flex-col">
        <h1>{name}</h1>
        <h3>{category}</h3>
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

export default ItemDetail