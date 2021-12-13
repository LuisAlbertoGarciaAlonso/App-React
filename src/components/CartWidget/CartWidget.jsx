// import iconoCarrito from "./iconoCarrito.jpg"
import "./icono.css";
import React,{ useContext} from "react"
import { ProductsContext } from "../../Context/ProductsContext";
// import ItemCount from "../ItemCount/ItemCount";




const CartWidget = () => {

    const { cart, total,clear,sumarAlCarrito,restarAlCarrito} = useContext(ProductsContext) //para usar el contesxt

    return(
        <>
         {/* <img src={iconoCarrito} alt="" className="carrito"/>  */}
        <h2 className="d-flex flex-row textcolor">Cantidad de Productos {cart.length} </h2>
        {/* <pre>{JSON.stringify(cart, null , 3)}</pre> */}
        
    <div >
        {
        cart?.map((item)=>{
            const { id,
                name,
                // category,
                price,
                // stock,
                image,
                cantidad,
                totalPrice}=item
            return(
                <div  key={id} className="textcolor" >
                    <img src={image} alt={name} />
                    <span className="d-flex flex-column ">{name}</span>
                    <span className="d-flex flex-column ">Precio Unitario: $ {price}</span>
                    <span className="d-flex flex-column ">Cantidad de Unidades: {cantidad}</span>
                    <span className="d-flex flex-column ">Total Precio Productos: $ {totalPrice}</span>
                    {/* <button className="btn btn-success d-flex flex-row">+</button>
                    <button className="btn btn-danger d-flex flex-row">-</button>                     */}
                    <button onClick={sumarAlCarrito} className="btn btn-success botonMas">Sumar</button>
                    <button onClick={restarAlCarrito} className="btn btn-danger botonMenos">Restar</button>
                </div>    
            )
        })
        }
</div>
<hr className=" textcolor" />
<h2 className="d-flex flex-row textcolor">
    TOTAL CARRITO: $ {total}
    <button onClick={clear}  className="btn btn-danger  d-flex flex-row">Vaciar Carrito</button>
</h2>
        </>
    )
}

export default CartWidget