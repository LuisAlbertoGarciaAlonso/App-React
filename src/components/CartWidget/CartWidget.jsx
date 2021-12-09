import iconoCarrito from "./iconoCarrito.jpg"
import "./icono.css";
import React,{useContext} from "react"
import { ProductsContext } from "../../Context/ProductsContext";
import { Item } from "../ItemListContainer/Item";




const CartWidget = () => {

    const { cart, setCart } = useContext(ProductsContext) //para usar el contesxt

    return(
        <>

        <img src={iconoCarrito} alt="" />
        <h2>Cantidad de Productos {cart.length} </h2>
        <pre>{JSON.stringify(cart, null , 3)}</pre>
        
        {/* <section className="flex-row">
            {cart?.map((cart) => (
                <Item {...cart} key={cart.id} />
            ))}
            
        </section>  renderizar las tarjetas dentro del carro*/} 





        
        </>
    )
}


export default CartWidget