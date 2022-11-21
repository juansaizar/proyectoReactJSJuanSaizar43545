import './ItemListContainer.css'

const ItemListContainer = ( { greeting } ) => {
  return (
    <div className='hero'>
        <h3>{greeting}</h3>
    </div>
  )
}

export default ItemListContainer