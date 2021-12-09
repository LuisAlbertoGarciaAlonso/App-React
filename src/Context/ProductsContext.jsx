import React, { createContext, useState} from "react";
import { data } from "../DataProducts/ArrayProductos";


export const ProductsContext = createContext(null);


export const ProductsProvider = ({children}) => {

    const [cart, setCart] =  useState([]);
    // const [cartItems, setCartItems] =  useState([]);

const addToCart = () => {
    setCart([...cart])
}

console.log(cart)


    return(
        <ProductsContext.Provider value={{cart, setCart ,addToCart}}
        >
            {children}

        </ProductsContext.Provider>
    )
}





















// const addCarrito = 


// const addItem = (item, qy) => {
//     const position = isInCart(item.id)
//     let addItemWorked = true
//     if (position === -1) {
//       itemsInCart.push({ item: item, qy: qy })
//       // suma la cantidad de items elegida al total del carrito
//       setQyInCart(qyInCart + qy)
//       setCartTotal(getTotal())
//     }
//     else {
//       const currentQy = itemsInCart[position].qy
//       if (currentQy + qy <= item.stock) {
//         itemsInCart[position] = { item: item, qy: currentQy + qy }
//         // suma la cantidad de items elegida al total del carrito
//         setQyInCart(qyInCart + qy)
//         setCartTotal(getTotal())
//       }
//       else {
//         addItemWorked = false
//       }
//     }
//     return addItemWorked
//   }

    // const addCarrito = e => {
    //     if (e.target.classList.contains("btn-dark")) {
    //         setCarrito(e.target.parentElement)
    //     }
    //     e.stopPropagation()
    //   }
      
    //   const setCarrito = objeto => {
    //     const producto = {
    //         id: objeto.querySelector(".btn-dark").dataset.id,
    //         nombre: objeto.querySelector("#tituloProducto").textContent,
    //         precio:  objeto.querySelector("p").textContent,
    //         cantidad: 1
    //     }
    //     if (carrito.hasOwnProperty(producto.id)) {
    //         producto.cantidad = carrito[producto.id].cantidad + 1
    //     }
    //     carrito[producto.id] = {...producto}
    //     pintarCarrito()
    //   }
      
    //   const pintarCarrito = () => {
    //     items.innerHTML = ''
    //     Object.values(carrito).forEach(producto => {
    //         templateCarrito.querySelector('th').textContent = producto.id;
    //         templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre;
    //         templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
    //         templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad;
    //         templateCarrito.querySelector('#dolar').textContent = ((producto.precio / parseFloat(dolarBlue))*producto.cantidad).toFixed(2);
    //         templateCarrito.querySelector('.btn-success').dataset.id = producto.id;
    //         templateCarrito.querySelector('.btn-danger').dataset.id = producto.id;
    //         const clone = templateCarrito.cloneNode(true);
    //         fragment.appendChild(clone);
    //     });
    //     items.appendChild(fragment);
        
    //     pintarFooter();
    //     localStorage.setItem("carrito",JSON.stringify(carrito));
    //   }
      
    //   const pintarFooter = () => {
    //     footer.innerHTML= "";
    //     if(Object.keys(carrito).length === 0){
    //     footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`  
    //     return
    //     }
    //     const sumaCantidad = Object.values(carrito).reduce((acumulador,{cantidad}) => acumulador + cantidad,0 );
    //     const sumaPrecio = Object.values(carrito).reduce((acumulador,{cantidad, precio}) => acumulador + cantidad * precio,0 );
    //     const sumaPrecioDolar = (Object.values(carrito).reduce((acumulador,{cantidad, precio}) => acumulador + cantidad * 
    //     precio,0)/parseFloat(dolarBlue)).toFixed(2);
    //     templateFooter.querySelectorAll("td")[0].textContent = sumaCantidad;
    //     templateFooter.querySelectorAll("span")[0].textContent = sumaPrecio;
    //     templateFooter.querySelector("#totalDolar").textContent = sumaPrecioDolar;
    //     const clone = templateFooter.cloneNode(true);
    //     fragment.appendChild(clone);
    //     footer.appendChild(fragment);
    //     const btnVaciar = document.getElementById("vaciar-carrito");
    //     btnVaciar.addEventListener("click", () => {
    //         carrito = {};
    //         pintarCarrito();
    //     });
    //     const graciasPorComprar = () => {
    //       sessionStorage.setItem("CompraRealizada",JSON.stringify(carrito));
    //       carrito = {};
    //         pintarCarrito();
    //       swal("COMPRANDO", "GRACIAS POR SU COMPRA", "success");
    //     }
    //     $("#comprarCarrito").click ((e) => {
    //       e.preventDefault();
    //       graciasPorComprar();
    //     })
    //   }
    //   const btnAumentar = e => {
    //     if (e.target.classList.contains('btn-success')) {
    //         const producto = carrito[e.target.dataset.id]
    //         producto.cantidad++
    //         carrito[e.target.dataset.id] = { ...producto }
    //         pintarCarrito()
    //     }
    //     if (e.target.classList.contains('btn-danger')) {
    //         const producto = carrito[e.target.dataset.id]
    //         producto.cantidad--
    //         if (producto.cantidad === 0) {
    //             delete carrito[e.target.dataset.id]
    //         } else {
    //             carrito[e.target.dataset.id] = {...producto}
    //         }
    //         pintarCarrito()
    //     }
    //     e.stopPropagation()
    //   }
    



