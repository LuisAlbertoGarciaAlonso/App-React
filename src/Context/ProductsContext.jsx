import { addDoc,getFirestore,collection,getDocs, doc, updateDoc,deleteDoc} from "@firebase/firestore";
import React, { createContext, useEffect, useState} from "react";
export const ProductsContext = createContext(null);

export const ProductsProvider = ({children}) => {
    const [cart, setCart] =  useState([]);
    const [loading, setLoading] =useState(false)
    const [total, setTotal]= useState (0);//total de precio  carro   

    //FIREBASE!!!
     const database = getFirestore()    
     const ref = collection(database, "products")
     const refCart = collection(database, "cartItems") //setCArt
    
    useEffect(()=>{
        let tot= 0;
    cart.forEach(i=>tot+=i.totalPrice)
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
    upDateCart(cart[index].cartId,{cantidad:count, totalPrice:count*cart[index].price})
}

const upDateCart = (cartId,newItem)=>{
    setLoading(true)
    const pro = doc(database,"cartItems",cartId)
    updateDoc(pro,newItem)
    .then(()=>{
        getCartItems();
    })
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
    upDateCart(cart[index].cartId,{cantidad:count, totalPrice:count*cart[index].price})
}


const eliminarDelCarrito = (productId)=>{
    const index = isOnCart(productId)
    if(index<0){
        throw new Error("Error");
    }
    setLoading(true)
    deleteDoc(doc(database, "cartItems", cart[index].cartId))
    .then(()=>{
        getCartItems();
    })
}

const clear = () => {
    setCart([])
}

useEffect(() => {
    getDocs(refCart)
        .then((snapShot)=>{
            setCart(snapShot.docs.map((doc)=>({cartId:doc.id,...doc.data()})))
        })
}, [])

const getCartItems = ()=>{
    setLoading(true)
    getDocs(refCart)
        .then((snapShot)=>{
            setCart(snapShot.docs.map((doc)=>({cartId:doc.id,...doc.data()})))
            setLoading(false)
        })
}
const addToCart = (product) => {
    const index = isOnCart(product.id)
    if( index === -1 ){
        
        const item = {
            ...product,
            totalPrice: product.cantidad*product.price
        }
        //A FireStore
        addDoc(refCart,item)
        getCartItems()

    }else{
        const count = cart[index].cantidad + product.cantidad;
        const ref=cart.find(item=>item.id===product.id)
        upDateCart(ref.cartId,{cantidad:count,totalPrice:count*product.price})
    }

}
const getUser = (form) => {
    setUserEmail(form)
  }

    return(
        <ProductsContext.Provider
        value={{
            cart,
            total,
            addToCart,
            sumarAlCarrito,
            restarAlCarrito,
            clear,
            eliminarDelCarrito,
            getUser,
            loading
                }}>
            {children}
        </ProductsContext.Provider>
    )
}