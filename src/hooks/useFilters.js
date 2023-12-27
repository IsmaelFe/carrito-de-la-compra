import { useState } from 'react'

export function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const productFilters = (products) => {
    return products.filter(product => {
      return product.price >= filters.price && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  return { productFilters, setFilters, filters }
}
