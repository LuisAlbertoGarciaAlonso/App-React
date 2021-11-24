import {useState} from "react"
import "./itemCount.css"

function ItemCount(){

const [number, setNumber] = useState(0)

const onIncrease= () => {
    if(number === 20){
        console.log(`Nose puede aumentar mas de 20`)
    }else{
        setNumber(number +1)
    }
}

const onDecrease= () => {
    if(number === 0){
console.log(`Nose puede disminuir menos de 0`)
    }else{
        setNumber(number -1)
    }
}

    return(
        <>
        <h2 className="cantidad">{`Cantidad ${number}`}</h2>
        <button onClick={onIncrease} className="btn btn-primary botonMas">+</button>
        <button onClick={onDecrease} className="btn btn-secondary botonMenos">-</button>
        </>
    )

    

}
export default ItemCount