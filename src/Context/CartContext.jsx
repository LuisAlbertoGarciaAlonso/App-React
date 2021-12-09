import React, { useState } from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({ children }) => {

  const [itemsInCart, setItemsInCart] = useState([])

  const [qyInCart, setQyInCart] = useState(0)

  const [cartTotal, setCartTotal] = useState(0)

  /* 
  formato item
        {
        id: id,
        title: title,
        description: description,
        photo: photo,
        price: price,
        stock: stock,
      }
  */


  const addItem = (item, qy) => {
    const position = isInCart(item.id)
    let addItemWorked = true
    /* si position === -1 es que el item no fue agregado anteriormente al carrito, entonces lo agrega
    sino le suma la cantidad seleccionada al item que ya formaba parte del carrito para evitar duplicados */

    /* de momento se fija "superficialmente" en el stock para agregar items, porque en verdad el stock del producto 
    deberia bajar cuando se lo agrega al carrito, pero eso se vera cuando usemos firebase.
    es decir el stock no cambia nunca al agregar al carrito, pero si queres agregar mas sale un modal de error
    */
    if (position === -1) {
      itemsInCart.push({ item: item, qy: qy })
      // suma la cantidad de items elegida al total del carrito
      setQyInCart(qyInCart + qy)
      setCartTotal(getTotal())
    }
    else {
      const currentQy = itemsInCart[position].qy
      if (currentQy + qy <= item.stock) {
        itemsInCart[position] = { item: item, qy: currentQy + qy }
        // suma la cantidad de items elegida al total del carrito
        setQyInCart(qyInCart + qy)
        setCartTotal(getTotal())
      }
      else {
        addItemWorked = false
      }
    }
    return addItemWorked
  }


  // borra el item seleccionado si lo encuentra
  const removeItem = (itemId) => {
    const position = isInCart(itemId)

    if (position > -1) {
      // resta la cantdad de items del total del cart
      const qy = itemsInCart[position].qy
      setQyInCart(qyInCart - qy)

      itemsInCart.splice(position, 1);
    }
    setCartTotal(getTotal())

  }


  // deja itemsInCart vacio. vacia el cart
  const clear = () => {
    setItemsInCart([])
    setCartTotal(0)
    setQyInCart(0)
  }


  // devuelve la posicion del item en el cart si existe, sino devuelve -1
  const isInCart = (itemId) => {
    let i = 0
    const len = itemsInCart.length
    let position = -1
    while (i < len && position === -1) {
      if (itemsInCart[i].item.id === itemId) {
        position = i
      }
      i++
    }

    return position

  }


  // calcula el valor total del carrito
  const getTotal = () => {
    let total = 0
    const len = itemsInCart.length
    let i = 0

    while (i < len) {
      total += itemsInCart[i].item.price * itemsInCart[i].qy
      i++
    }

    return total
  }


  return (
    <CartContext.Provider
      value={{ itemsInCart, setItemsInCart, addItem, removeItem, clear, isInCart, qyInCart, setQyInCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )

}