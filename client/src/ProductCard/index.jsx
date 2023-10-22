import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './styles.scss'

import { CartPlus, TrashFill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartActionCreator, removeFromCartActionCreator } from '../reducers/userReducer'
import CounterCart from '../CounterCart'
import { useLocation, useNavigate } from 'react-router'
import { Badge } from "react-bootstrap"
import Rating from '../Rating'


function ProductCard(product) {
    const {
        id,
        title,
        price,
        description,
        image,
        rating } = product

    const { cart, username } = useSelector(({ user }) => user);

    const navigate = useNavigate();

    const productInfo = cart.find(cartItem => cartItem.id === id);

    const dispatch = useDispatch(product);

    const addToCart = () => {
        dispatch(addToCartActionCreator(product));
        if (!username) {
            navigate('/login')
        }
    };

    const removeFromCart = () => {
        dispatch(removeFromCartActionCreator({ ...product, quantity: productInfo.quantity }));
    }

    return (
        <Col sm="10" md="5" lg="4" xl="3">
            <Card className='product mb-3'>
                <Card.Img variant="top" src={image} className='image img' fluid />
                <Card.Body className='content'>
                    <div className='text'>{title}</div>
                    <div>{price}</div>
                    {/* <div>{category}</div> */}
                    <div className='description text'>{description}</div>
                    <div className='d-flex align-items-center'>
                        <Rating rating={rating.rate} />
                        <Badge pill bg="info" className='ms-2'>
                            {rating.count}
                        </Badge>
                    </div>
                </Card.Body>
                <Card.Footer>
                    {productInfo ? <div className='d-flex align-items-center'>
                        <CounterCart quantity={productInfo.quantity} product={productInfo} />
                        <TrashFill onClick={removeFromCart} className='ms-2 text-danger' size={20} />
                    </div>
                        : <CartPlus size={20} onClick={addToCart} />}
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default ProductCard