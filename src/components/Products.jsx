import '../styles/producs.css'

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
                  <button onClick={() => addProductCart(product)}>Agregar al carrito</button>
                </li>
              )
            })
        }
      </ul>
    </main>
  )
}
