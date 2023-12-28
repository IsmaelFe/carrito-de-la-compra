import '../styles/producs.css'

const addCart = './cart-plus-svgrepo-com.svg'

export function Products ({ products, addProductCart }) {
  return (
    <main>
      <ul>
        {
            products.slice(0, 20).map(product => {
              return (
                <li key={product.id}>
                  <img src={product.thumbnail} alt={product.brand} />
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                  <button onClick={() => addProductCart(product)}><img src={addCart} alt='carrito para agregar un producto' /></button>
                </li>
              )
            })
        }
      </ul>
    </main>
  )
}
