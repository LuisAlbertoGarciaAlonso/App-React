import React, { useEffect, useState } from "react"

const Products = React.createContext()

export function ProductsProvider({children}){

    const [products,setProducts] = useState()

    useEffect(()=>{
        fetch("../DataProducts/ArrayProductos.js") 
        .then(res => res.json())
        .then(data => setProducts(data))
        .then(data => console.log(data))

    },[])

    return(
        <Products.Provider value ={{products}}>

            {children}

        </Products.Provider>
    
    )};


export default Products