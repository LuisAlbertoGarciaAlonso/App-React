import {useState} from "react"
import "./itemCount.css"
import React from "react"

function ItemCount({stock, onAdd}){
const [number, setNumber] = useState(1)
const onIncrease= () => {
    number !== stock && setNumber(number +1)
   
}
const onDecrease= () => {
    number !== 1 && setNumber(number -1)
}
    return(
        <>
        <h2 className="cantidad">{`Cantidad ${number}`}</h2>
        <button onClick={onIncrease} className="btn btn-success botonMas">Sumar un Producto</button>

        <button onClick={onDecrease} className="btn btn-danger botonMenos">Restar un Producto</button>

        <button disabled={number === 0} onClick={()=>onAdd(number)} className="btn btn-success botonAdd">Agregar al Carrito</button>
        </>
    )

    

}
export default ItemCount