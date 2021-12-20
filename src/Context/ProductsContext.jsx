import { addDoc,getFirestore,collection } from "@firebase/firestore";
import React, { createContext, useEffect, useState} from "react";
export const ProductsContext = createContext(null);
export const ProductsProvider = ({children}) => {
    const [cart, setCart] =  useState([]);
    const [total, setTotal]= useState (0);//total de precio  carro   
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
const sumarAlCarrito = (productId)=>{
    const index = isOnCart(productId)
    if(index<0){
        throw new Error("Error");
    }
    let count = cart[index].cantidad + 1;
    if(count>cart[index].stock){
        count=cart[index].stock
    }
    const item = {
        ...cart[index],
        cantidad: count,
        totalPrice: count*cart[index].price
    }
    const newCart= [...cart]
    newCart[index]=item;
    setCart([...newCart]);
    console.log(productId)
}
const restarAlCarrito = (productId)=>{
    const index = isOnCart(productId)
    if(index<0){
        throw new Error("Error");
    }
    const count = cart[index].cantidad -1; 
    if(count<1){
        eliminarDelCarrito(productId)
        return
    }
    const item = {
        ...cart[index],
        cantidad: count,
        totalPrice: count*cart[index].price
    }
    const newCart= [...cart]
    newCart[index]=item;
    setCart([...newCart]);
    console.log(productId)
}

const eliminarDelCarrito = (productId)=>{
    const newCart= cart.filter(i=>i.id!==productId)
    setCart([...newCart]);
    console.log(productId)
    }

const clear = () => {
    setCart([])
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
        <ProductsContext.Provider value={{cart,total,addToCart,sumarAlCarrito,restarAlCarrito,clear,eliminarDelCarrito}}>
            {children}
        </ProductsContext.Provider>
    )
}