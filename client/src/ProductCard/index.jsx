import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './styles.scss'

import { CartPlus } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartActionCreator } from '../reducers/userReducer'

function ProductCard(product) {
    const {
        title,
        price,
        description,
        category,
        image,
        rating } = product

    const { cart, totalValue } = useSelector(({ user }) => user);

    const dispatch = useDispatch(product);
    
    const addToCart = () => {
        dispatch(addToCartActionCreator(product))
    }

    return (
        <Col sm="10" md="5" lg="4" xl="3">
            <Card className='product mb-3'>
                <Card.Img variant="top" src={image} className='image img' fluid />
                <Card.Body className='content'>
                    <div>{title}</div>
                    <div>{price}</div>
                    <div>{category}</div>
                    <div className='description'>{description}</div>
                    <div>
                        <span className='me-2'>{rating.rate}</span>
                        <span>{rating.count}</span>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <CartPlus size={20} onClick={addToCart} />
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default ProductCard