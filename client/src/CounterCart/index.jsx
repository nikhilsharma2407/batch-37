import React, { useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQtyActionCreator, incrementQtyActionCreator } from '../reducers/userReducer';
import './styles.scss'

function CounterCart({ quantity, product }) {
    const dispatch = useDispatch();

    const clickHandler = (action) => {
        dispatch(action(product));
    }

    // const [count, setCount] = useState(0);


    return (
        <div className='counter'>
            <Button variant='outline-secondary' size="sm"
                onClick={() => clickHandler(decrementQtyActionCreator)} >-</Button>
            <Badge pill bg="secondary mx-1">
                {quantity}
            </Badge>
            <Button variant="outline-secondary" size="sm"
                onClick={() => clickHandler(incrementQtyActionCreator)}
            >+</Button>
        </div>
    )
}

export default CounterCart
