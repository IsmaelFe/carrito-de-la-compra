import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import './styles/index.css'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { useFilters } from './hooks/useFilters'

export function App () {
  const { productFilters } = useFilters()
  const [products] = useState(initialProducts)
  const [cart, setCart] = useState([])

  const filterProducts = productFilters(products)

  const addProductCart = (products) => {
    const findIndex = [...cart]
    const index = findIndex.findIndex(product => product.id === products.id)

    if (index >= 0) {
      const newState = [...cart]
      newState[index].quantity += 1
      setCart(newState)
      return
    }

    const newCart = [...cart, { ...products, quantity: 1 }]
    setCart(newCart)
  }

  const empyCart = () => {
    setCart([])
  }

  const deleteProductCart = (index) => {
    let newCart = [...cart]
    newCart = newCart.filter(product => product.id !== index)
    setCart(newCart)
  }

  return (
    <div>
      <Header />
      <Cart stateCart={cart} deleteCart={empyCart} deleteProductCart={deleteProductCart} />
      <Products products={filterProducts} addProductCart={addProductCart} />
    </div>
  )
}
