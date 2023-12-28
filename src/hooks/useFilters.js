import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const productFilters = (products) => {
    return products.filter(product => {
      return product.price <= filters.price && (
        filters.category === 'all' ||
        product.category === filters.category
      )
    })
  }

  return { productFilters, setFilters, filters }
}
