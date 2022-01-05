import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductsContext} from "../../Context/ProductsContext";
import Mensaje from '../DatosPedido/DatosPedido'
import {getFirestore,collection,getDocs,orderBy,query,} from 'firebase/firestore'


const Orden = () => {
  const [order, setOrder] = useState([])
  const { userEmail } = useContext(ProductsContext)
  const { email } = userEmail

  useEffect(() => {
    const dataCompra = getFirestore()
    const ref = query(collection(dataCompra, 'ordenDeCompra'), orderBy('date'))
    getDocs(ref).then((snapshot) => {
      const orden = snapshot.docs.map((doc) => {
        const data = doc.data()
        const { date } = data
        const fecha = new Date(date.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat('es-Es', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(fecha)
        return {
          id: doc.id,
          ...data,
          date: normalizedCreatedAt,
        }
      })
      setOrder(orden.filter((b) => b.buyer === email))
    })
  }, [email])
  return (
    <div style={{color: 'white'}}>
      {order?.lenght === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>Compra Realizada</h1>
          {order.map((ord) => (
            <Mensaje key={ord.id} ord={ord} />
          ))}
        </>
      )}
      <Link to="/">Volver</Link>
    </div>
  )
}

export default Orden
