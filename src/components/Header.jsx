import { Filters } from './Filters'

export function Header () {
  return (
    <header className='header'>
      <h1>Carrito de la compra</h1>
      <div>
        <Filters />
      </div>
    </header>
  )
}
