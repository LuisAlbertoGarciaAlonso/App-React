import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { data } from "../../DataProducts/ArrayProductos";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../Css/spinner.css";



export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();
  const [irAlCarrito, setIrAlCarrito] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 1000);
    });

    getProduct
      .then((result) => {
        itemId && setProduct(result.find((item) => item.id === itemId));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  // esta es la funcion del boton agragr al carrito
  const onAdd = (cantidad) => {
    console.log({ ...product, cantidad: cantidad });
    setIrAlCarrito(true);
  };

  return isLoading ? (
    <Spinner
      animation="border"
      role="status"
      variant="primary"
      className="spinnerUbicacion"
    >
      <span className="visually-hidden ">Cargando...</span>
    </Spinner>
  ) : (
    <ItemDetail {...product} onAdd={onAdd} irAlCarrito={irAlCarrito} />
  );
};
