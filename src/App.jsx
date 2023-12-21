import { useState } from 'react'
import { Products } from './components/Products'
import { products } from './mocks/products.json'
import './styles/index.css'
import { Header } from './components/Header'

export function App () {
  const [cart, setCart] = useState([])

  return (
    <div>
      <Header />
      <Products products={products} />
    </div>
  )
}
