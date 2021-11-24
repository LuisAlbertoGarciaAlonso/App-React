import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetailContainer/ItemDetail';
import { data } from '../../DataProducts/ArrayProductos';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    getProduct
      .then((result) => {
        itemId && setProduct(result.find((item) => item.id === itemId));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return isLoading ? <h1>CARGANDO...</h1> : <ItemDetail {...product} />;
};
