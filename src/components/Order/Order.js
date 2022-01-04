import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Mensaje from '../Mensaje/Mensaje'
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import './order.css'

const Order = () => {
  const [order, setOrder] = useState([])
  const { userEmail } = useContext(CartContext)
  const { email } = userEmail

  useEffect(() => {
    const db = getFirestore()
    const ref = query(collection(db, 'ticket'), orderBy('date'))
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
    <div className="order-box">
      {order?.lenght === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>Aca dejamos tus tikets de compra</h1>
          {order.map((ord) => (
            <Mensaje key={ord.id} ord={ord} />
          ))}
        </>
      )}
      <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default Order
