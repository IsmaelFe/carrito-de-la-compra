import '../styles/cart.css'

export function Cart () {
  return (
    <>
      <label className='icon-cart' htmlFor='buttom-cart'>
        carrito
      </label>
      <input id='buttom-cart' type='checkbox' hidden />
      <aside className='cart'>
        <label className='icon-cart' htmlFor='buttom-cart'>
          carrito
        </label>
        <h2>Cart</h2>
      </aside>
    </>
  )
}
