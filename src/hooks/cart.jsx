import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext({})

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(0)
  const [cartDishes, setCartDishes] = useState([])

  function addDishInCart(dish, quantity) {
    const addNewDish = { ...dish, quantity }

    setCartDishes(prevState => [...prevState, addNewDish])
    setCartItems(prevState => (prevState += quantity))
    toast.success(`Adicionado: ${quantity} ${dish.title}`, {
      position: 'bottom-center',
      autoClose: 2000,
      closeButton: false,
      progress: false,
      icon: false,
      bodyStyle: { background: '#04D361' },
      style: { background: '#04D361' }
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartDishes,
        addDishInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  return context
}

export { CartProvider, useCart }
