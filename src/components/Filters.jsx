import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const setPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      price: event.target.value
    }))
  }

  const setCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <div>
          <label htmlFor='prace'>Precio: {filters.price}</label>
        </div>
        <input id='prace' type='range' min='0' max='2000' onChange={setPrice} value={filters.price} />
      </div>

      <div className='category'>
        <label htmlFor='category'>Categoria:</label>
        <select id='category' onChange={setCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
