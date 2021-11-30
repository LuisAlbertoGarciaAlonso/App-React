import {useState} from "react"
import "./itemCount.css"

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
        <button onClick={onIncrease} /*className="btn btn-primary botonMas"*/>+</button>

        <button onClick={onDecrease} /*className="btn btn-secondary botonMenos"*/>-</button>

        <button disabled={number === 0} onClick={()=>onAdd(number)} /*className="btn btn-primary botonAdd"*/>Agragar al Carrito</button>
        </>
    )

    

}
export default ItemCount