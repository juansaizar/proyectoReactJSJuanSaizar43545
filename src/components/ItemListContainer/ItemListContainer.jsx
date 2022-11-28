
import './ItemListContainer.css'
import Titulo from '../Titulo/Titulo';
import { useState, useEffect } from 'react'
import Item from '../Item/Item';

const ItemListContainer = ( { greeting } ) => {

  return (
    
    <section className='hero'>
        <h3>{greeting}</h3>
        <Titulo />
        <Item />
    </section>
  )
}

export default ItemListContainer




