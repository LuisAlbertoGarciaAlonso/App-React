import React from "react";

const Mensaje = ({ ord }) => {
  console.log(ord);

  return (
    <div style={{ color: "white" }}>
      {ord.items.map((i) => (
        <ul key={i.id}>
          <li>
            <h3>Nombre del Producto: {i.name}</h3>
            <h5>
              Cantidad: {i.cantidad} - Precio: ${i.price}
            </h5>
          </li>
        </ul>
      ))}
      <h3>Total: ${ord.Total}</h3>
      <p>Id de la compra: {ord.id}</p>
      <p>Fecha: {ord.date}</p>
      <p>Email: {ord.comprador}</p>
    </div>
  );
};

export default Mensaje;
