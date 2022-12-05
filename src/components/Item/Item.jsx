import React, { useEffect, useState } from 'react'
import { gFetch } from '../../helpers/gFetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

const Item = () => {
    const [products, loadProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()
    console.log(id)

    useEffect(()=>{
    if (id){
        gFetch()
        .then(info => loadProduct(info.filter(prod => prod.category === id)))
        .catch(falla => console.log(falla))
        .finally(() => setLoading(false))

    } else {
        gFetch()
        .then(info => loadProduct(info))
        .catch(falla => console.log(falla))
        .finally(() => setLoading(false))

    }
    }, [id])

    return (
        loading 
        ? 
        <h2>LOADING...</h2> 
        :
        products.map(product => 
            <Card style={{ width: '18rem' }} key={product.id}>
            <Card.Img variant="top" src={product.foto} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Card.Text>
                        $ {product.price}
                    </Card.Text>
                    <Link to={`/detail/${product.id}`}>
                        <Button variant="primary">DETALLE</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    )
}

export default Item