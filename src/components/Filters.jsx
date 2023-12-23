export function Filters ({ filter, valueFilter }) {
  const setPrice = (event) => {
    filter(prevState => ({
      ...prevState,
      price: event.target.value
    }))
  }

  const setCategory = (event) => {
    filter(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section>
      <div>
        <div>
          <label htmlFor='prace'>Precio:</label>
          <span>{valueFilter.price}</span>
        </div>
        <input id='prace' type='range' min='0' max='1000' onChange={setPrice} value={valueFilter.price} />
      </div>

      <div>
        <label htmlFor='category'>Categoria</label>
        <select id='category' onChange={setCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
