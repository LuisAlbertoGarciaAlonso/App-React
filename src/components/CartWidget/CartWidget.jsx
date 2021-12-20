// import iconoCarrito from "./iconoCarrito.jpg"
import "./cartWidget.css";
import React,{ useContext} from "react"
import { ProductsContext,} from "../../Context/ProductsContext";
import swal from 'sweetalert';




const CartWidget = () => {

    const { cart, total,clear,sumarAlCarrito,restarAlCarrito,eliminarDelCarrito} = useContext(ProductsContext) //para usar el context
    function graciasPorLaCompra(){
        if(cart.length>=1)
        swal({
            title: "Estas Seguro?, sabemos que si pero...",
            text: "Una Vez que Aceptes se Procesara tu Carrito para Facturarlo y Entregarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Perfecto! Estamos procesando tu compra!! GRACIAS!!!", {
                icon: "success",
                
              });
              clear();
              <Route path="/" element={<ItemListContainer />} />
            } else {
              swal("Nos Imaginabamos, a Seguir comprando!");
            }
          });
          
    }
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
                stock,
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
                    <button onClick={()=>sumarAlCarrito(id)} className="btn btn-success botonMas" disabled={stock<=cantidad}>Sumar</button>
                    <button onClick={()=>restarAlCarrito(id)} className="btn btn-danger botonMenos" disabled={cantidad<=1}>Restar</button>
                    <button onClick={()=>eliminarDelCarrito(id)} className="btn btn-danger botonEliminar">Eliminar</button>
                </div>    
            )
        })
        }
</div>
<hr className=" textcolor" />
<h2 className="d-flex flex-row textcolor">
    TOTAL CARRITO: $ {total}
    <button onClick={clear}  className="btn btn-danger  d-flex flex-row">Vaciar Carrito</button>
    <button onClick={graciasPorLaCompra}  className="btn btn-success  d-flex flex-row">Comprar</button>
</h2>
        </>
    )
}

export default CartWidget