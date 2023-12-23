import { useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import './styles/index.css'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

export function App () {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const productFilters = () => {
    return products.filter(product => {
      return product.price >= filters.price && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  const filterProducts = productFilters()

  return (
    <div>
      <Header filter={setFilters} valueFilter={filters} />
      <Cart />
      <Products products={filterProducts} />
    </div>
  )
}
