import "../../Css/cartWidget.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
    addDoc(ref, ordenDeCompra).then(() => {
      setIrCompra(true);
      clear();
    });
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
      <>
        {total > 0 ? (
          <h2 className="d-flex flex-row textcolor">
            Cantidad de Productos {cart.length}{" "}
          </h2>
        ) : (
          <>
            <div className=" d-flex  flex-direction: column justify-content-center title">
              <p style={{ color: "white" }}>
                <h2>No hay Productos en el Carrito</h2>{" "}
              </p>
            </div>
            <div className="d-flex flex-direction: column justify-content-center btnVolver">
              <button className="btn btn-secondary ">
                <Link style={{ color: "white" }} to="/">
                  Volver a Productos
                </Link>
              </button>
            </div>
          </>
          
        )}
        {!irCompra ? (
          <>
            <div className="d-flex flex-row ">
              {cart?.map(
                ({ id, name, price, stock, image, cantidad, totalPrice }) => (
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
                <button onClick={clear} className="btn btn-danger  ">
                      Vaciar Carrito
                    </button>
              </h2>
              <h3 className="d-flex flex-row textcolor">
                <form className="d-flex flex-column" onSubmit={finalizarCompra}>
                  <h5 className="row place">
                    Para Terminar La Compra Complete Los Datos
                  </h5>
                  <div>
                    <input
                      required
                      className="me-2 text"
                      type="name"
                      placeholder="Name"
                      name="name"
                      onChange={nameForm}
                    />
                  </div>
                  <div>
                    <input
                      required
                      className="me-2 text"
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={nameForm}
                    />
                  </div>
                  <div>
                    <button
                      className="btn btn-success btnCompra"
                      disabled={cart.length === 0 || !form.name || !form.email}>
                      Comprar
                    </button>                    
                  </div>
                </form>
              </h3>
            </div>
          </>
        ) : (
          <Orden />
        )}
      </>
    </>
  );
};

export default CartWidget;
