import React, { useState, useEffect, useContext } from "react";
import  ItemDetail  from "./ItemDetail";
import { data } from "../../DataProducts/ArrayProductos";//cuando la data provenia local
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../../Css/spinner.css";
import { ProductsContext } from "../../Context/ProductsContext";
import { getFirestore,collection,getDocs} from "@firebase/firestore";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(ProductsContext) //para usar el context

  useEffect(() => {
    setIsLoading(true)
    const dataProducts = getFirestore()
    const ref = collection(dataProducts, "products")
    getDocs(ref)
      .then((snapshot) => {
        const detailItem = snapshot.docs.map((doc)=> {
          return { id: doc.id, ...doc.data() }})
        const filtredId= detailItem.find((pId)=>pId.id === itemId) 
        itemId===undefined? setProduct(detailItem):setProduct(filtredId)

        // console.log(itemId)
        //   console.log(detailItem)
        //   console.log(filtredId)
        //   console.log(ref)
        setIsLoading(false)
      })
      
      
      .catch((error) => {
        console.log(error)
      })
  }, [itemId])




// useEffect(()=>{
//   setIsLoading(true);
//   const dataProducts = getFirestore()
//   const ref = doc(dataProducts, 'products', id)
//     getDoc(ref)
//     .then((snapShot) => {
//       // setProduct({ id: snapShot.id, ...snapShot.data() })
//       const products = snapShot.docs.map((doc) => {
//         return { id: doc.id, ...doc.data() }
//       })
//       console.log(products)
//       const filteredItems = products.filter((p) => p.id === id)
//       catId === undefined ? setProduct(products) : setProduct(filteredItems)

//     })

//     .finally(()=>{
//       setIsLoading(false)})

//     .catch((error)=>{
//       console.log(error)})

//     },[id])
// console.log(product)


  // useEffect(() => {
  //   setIsLoading(true);
  //   const getProduct = new Promise((res) => {
  //     setTimeout(() => {
  //       res(data);
  //     }, 1000);
  //   });
  //   getProduct
  //     .then((result) => {
  //       itemId && setProduct(result.find((item) => item.id === itemId));
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [itemId]);

  // esta es la funcion del boton agragr al carrito
  const onAdd = (cantidad) => {
    addToCart({ ...product, cantidad: cantidad })
    setIrAlCarrito(true);
  };
  return isLoading ? (
    <Spinner
      animation="border"
      role="status"
      variant="danger"
      className="spinnerUbicacion"
    >
      <span className="visually-hidden ">Cargando...</span>
    </Spinner>
  ) : (
    <ItemDetail {...product} onAdd={onAdd} irAlCarrito={irAlCarrito} />
  );
};
