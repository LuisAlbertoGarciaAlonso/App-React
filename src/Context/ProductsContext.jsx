import { addDoc,getFirestore,collection } from "@firebase/firestore";
import React, { createContext, useEffect, useState} from "react";


export const ProductsContext = createContext(null);

export const ProductsProvider = ({children}) => {
        
    const [cart, setCart] =  useState([]);
    const [total, setTotal]= useState (0);//total de precio  carro   
    const [cantidad, setCantidad] = useState()
    const database = getFirestore()

    //FIREBASE!!!
    // const ref = collection(database, "products")
    // const refCart = collection(database, "cartItems") //setCArt






    useEffect(()=>{
        let tot= 0;
    cart.forEach(i=>tot+=i.totalPrice)//tot=tot+i.totalPrice
    setTotal(tot)
    },[cart]);

const isOnCart =(itemId)=>{
    return cart?.findIndex(item => item.id === itemId)
}

const sumarAlCarrito = (product)=>{
    
    cantidad !== product.stock && setCantidad(cantidad +1)
        return cantidad
}
const restarAlCarrito = (product)=>{

    cantidad !== product.stock && setCantidad(cantidad -1)
   return cantidad
}

const clear = () => {
    setCart([])
    setTotal(0)
  }

const addToCart = (product) => {//total por producto y sumas total de compra
    const index = isOnCart(product.id)
    if( index === -1 ){
        //addDoc(refCart, product) //firebase guardar el producto en el carrito
        const item = {
            ...product,
            totalPrice: product.cantidad*product.price
        }
        setCart(cart => [ item,...cart ]);
    }else{
        const count = cart[index].cantidad + product.cantidad;
        const item = {
            ...product,
            cantidad: count,
            totalPrice: count*product.price
        }
        const newCart= cart.filter(i=>i.id!==product.id)
        setCart([item,...newCart]);
    }
    
}
    return(
        <ProductsContext.Provider value={{cart,total,addToCart,sumarAlCarrito,restarAlCarrito,clear}}>
            {children}
        </ProductsContext.Provider>
    )
}