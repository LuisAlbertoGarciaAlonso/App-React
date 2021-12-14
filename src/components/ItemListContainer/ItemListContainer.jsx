import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { data } from '../../DataProducts/ArrayProductos';
import { useParams } from 'react-router-dom';
import {Spinner} from "react-bootstrap"
// import {collection, addDoc, getFirestore, getDocs} from "firebase/firestore"

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { catId } = useParams();

  useEffect(() => {
    setLoader(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });

    getItems
      .then((res) => {
        catId
          ? setItems(res.filter((item) => item.category === catId))
          : setItems(res);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [catId]);

  return loader ? (
    <Spinner animation="border" role="status" variant="primary" className="spinnerUbicacion">
  <span className="visually-hidden">Cargando...</span></Spinner> 
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};



                      //FIREBASE!!!!!!


// useEffect(()=>{
//   const database = getFirestore()
//   const ref = collection(database, "products")
//   getDocs(ref)
//   .then((snapShot) => {
//     setProducts(snapShot.docs.map((doc)=>({ id: doc.id,...doc.data }))) //con id de firestore
// // snapShot.docs.map((product) => setProducts(prev => ([...prev,product.data() //este es sin id de firestore

// setLoader(false)

//   })//setProducts es el que setea los productos seria mi setItems
//   },[])