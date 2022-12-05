import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { gFetch } from '../../helpers/gFetch';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})

  const { productId } = useParams()
  console.log(productId)

  useEffect(()=>{
    gFetch()
    .then(resprod => setProduct(resprod.find(prod => prod.id === productId)))
    .catch(err => console.log(err))
  })

  return (
    <Card className="bg-dark text-white">
    <Card.Img src={product.foto} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
      </Card.Text>
      <Card.Text>
        $ {product.price}
      </Card.Text>
      <ItemCount />
      </Card.ImgOverlay>
  </Card>
  )
}

export default ItemDetailContainer