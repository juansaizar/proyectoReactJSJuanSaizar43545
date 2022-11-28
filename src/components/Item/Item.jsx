import React, { useEffect, useState } from 'react'
import { gFetch } from '../../helpers/gFetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = () => {
    const [products, loadProduct] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
    gFetch()
    .then(info => loadProduct(info))
    .catch(falla => console.log(falla))
    .finally(() => setLoading(false))
    }, [])

    return (
        loading 
        ? 
        <h2>LOADING...</h2> 
        :
        products.map(product => 
            <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.picture} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        $ {product.price}
                    </Card.Text>
                    <Button variant="primary">AGREGAR AL CARRITO</Button>
                </Card.Body>
            </Card>
        )
    )
}

export default Item