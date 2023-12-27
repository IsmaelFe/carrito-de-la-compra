import '../styles/cart.css'

function ProductCart ({ products, deleteProductCart }) {
  return (
    <div>
      <ul>
        {
          products.map(product => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.brand} />
                <p>{product.description}</p>
                <p>Cantidad: {product.quantity}</p>
                <button onClick={() => deleteProductCart(product.id)}>Eliminar</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export function Cart ({ stateCart, deleteCart, deleteProductCart }) {
  return (
    <>
      <label className='icon-cart' htmlFor='buttom-cart'>
        carrito
      </label>
      <input id='buttom-cart' type='checkbox' hidden />
      <aside className='cart'>
        <button onClick={() => deleteCart()}>Vaciar Carrito</button>
        <label className='icon-cart' htmlFor='buttom-cart'>
          carrito
        </label>
        <ProductCart products={stateCart} deleteProductCart={deleteProductCart} />
      </aside>
    </>
  )
}
