import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { data } from '../../DataProducts/ArrayProductos';//para cuando usaba data local
import { useParams } from 'react-router-dom';
import {Spinner} from "react-bootstrap";
import {collection, getFirestore, getDocs} from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  const { catId } = useParams();

  // useEffect(() => {
  //   setLoader(true);

  //   const getItems = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(data);
  //     }, 1000);
  //   });

  //   getItems
  //     .then((res) => {
  //       catId
  //         ? setItems(res.filter((item) => item.category === catId))
  //         : setItems(res);
  //     })
  //     .finally(() => {
  //       setLoader(false);
  //     });
  // }, [catId]);


                            //FIREBASE!!!!!!

  useEffect(()=>{
    setLoader(true)
    const dataProducts = getFirestore()
    const ref = collection(dataProducts, "products")
    getDocs(ref)
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
      console.log(products)
      const filteredItems = products.filter((p) => p.category === catId)
      catId === undefined ? setItems(products) : setItems(filteredItems)
    })
  //   .then((snapShot) => {
  //     setItems(snapShot.docs.map((doc)=>({ id: doc.id,...doc.data() }))) //con id de firestore
  // // snapShot.docs.map((product) => setProducts(prev => ([...prev,product.data() //este es sin id de firestorm
  //   })
    .finally(()=>{
      setLoader(false)
    })
    .catch((error)=>{
      console.log(error)
    })
    },[catId])

 //console.log(items) //ya tienen los products desde FB y con id de FB

  return loader ? (
    <Spinner animation='border' role='status' variant='primary' className='spinnerUbicacion'>
  <span className='visually-hidden'>Cargando...</span></Spinner> 
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};
                      


