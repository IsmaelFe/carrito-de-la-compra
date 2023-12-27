import '../styles/cart.css'

const cart = './cart-large-minimalistic-svgrepo-com.svg'
const deleteCart = './cart-cross-svgrepo-com.svg'

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
                <button onClick={() => deleteProductCart(product.id)}><img src={deleteCart} /></button>
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
        <img src={cart} />
      </label>
      <input id='buttom-cart' type='checkbox' hidden />
      <aside className='cart'>
        <button onClick={() => deleteCart()}><img src={cart} /></button>
        <label className='icon-cart' htmlFor='buttom-cart'>
          <img src={cart} />
        </label>
        <ProductCart products={stateCart} deleteProductCart={deleteProductCart} />
      </aside>
    </>
  )
}
