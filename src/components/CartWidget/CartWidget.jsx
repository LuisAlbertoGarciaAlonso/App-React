import "../../Css/cartWidget.css";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../../Context/ProductsContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Orden from "../OrdenDeCompra/OrdenDeCompra";

const CartWidget = () => {
  const {
    cart,
    total,
    clear,
    sumarAlCarrito,
    restarAlCarrito,
    eliminarDelCarrito,
    loading,
    getUser,
  } = useContext(ProductsContext);
  const [form, setForm] = useState({ name: "", email: "" });
  const fecha = new Date();
  const [irCompra, setIrCompra] = useState(false);

  const finalizarCompra = (e) => {
    e.preventDefault();
    getUser(form);
    const dataCompra = getFirestore();
    const ref = collection(dataCompra, "ordenDeCompra");
    const ordenDeCompra = {
      comprador: form.name,
      email: form.email,
      items: cart,
      date: fecha,
      Total: total,
    };
    console.log(ordenDeCompra);
    addDoc(ref, ordenDeCompra)
    .then(()=>{setIrCompra(true); clear()});
  };

  const nameForm = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className="d-flex flex-row textcolor">
        Cantidad de Productos {cart.length}{" "}
      </h2>
      {!irCompra?(
        <>
          <div className="d-flex flex-row ">
            {cart?.map(({id, name, price, stock, image, cantidad, totalPrice}) =>
                (
                <div key={id} className="textcolor">
                  <img src={image} alt={name} />
                  <span className="d-flex flex-column ">{name}</span>
                  <span className="d-flex flex-column ">
                    Precio Unitario: $ {price}
                  </span>
                  <span className="d-flex flex-column ">
                    Cantidad de Unidades: {cantidad}
                  </span>
                  <span className="d-flex flex-column ">
                    Total Precio Productos: $ {totalPrice}
                  </span>
                  <button
                    onClick={() => sumarAlCarrito(id)}
                    className="btn btn-success botonMas"
                    disabled={stock <= cantidad || loading}
                  >
                    Sumar
                  </button>
                  <button
                    onClick={() => restarAlCarrito(id)}
                    className="btn btn-danger botonMenos"
                    disabled={cantidad <= 1 || loading}
                  >
                    Restar
                  </button>
                  <button
                    onClick={() => eliminarDelCarrito(id)}
                    className="btn btn-danger botonEliminar"
                    disabled={loading}
                  >
                    Eliminar
                  </button>
                </div>
              )
            )}
          </div>
          <hr className=" textcolor" />
          <div>
            <h2 className="d-flex flex-row textcolor">
              TOTAL CARRITO: $ {total}
              <form className="d-flex flex-column" onSubmit={finalizarCompra}>
                <h2 className="row">Para Terminar La Compra Complete Los Datos</h2>
                <div>
                  <input required className="me-2" type="name" placeholder="Name" name="name" onChange={nameForm}/>             
                  <input required className="me-2" type="email" placeholder="Email" name="email" onChange={nameForm}/>          
                  <button className="btn btn-success " disabled={ cart.length === 0 || !form.name || !form.email}>
                    Comprar
                  </button>
                </div>
              </form>
              <button onClick={clear} className="btn btn-danger  ">
                Vaciar Carrito
              </button>
            </h2>
          </div>
      </>
      ):(
      <Orden />
      )}
    </>
  );
};

export default CartWidget;
