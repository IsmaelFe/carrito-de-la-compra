import { Filters } from './Filters'

export function Header ({ filter, valueFilter }) {
  return (
    <header className='header'>
      <h1>Carrito de la compra</h1>
      <div>
        <Filters filter={filter} valueFilter={valueFilter} />
      </div>
    </header>
  )
}
