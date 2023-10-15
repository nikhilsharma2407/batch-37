import React, { useState } from 'react'
import { Badge, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { decrementActionCreator, incrementActionCreator } from '../reducers/countReducer';
import './styles.scss'

function Counter() {
    const {count} = useSelector((store) => store.countReducer);
    const dispatch = useDispatch();

    const clickHandler = (action) => {
        dispatch(action());
    }

    // const [count, setCount] = useState(0);


    return (
        <div className='counter'>
            <Button variant='outline-secondary' size="sm"
                onClick={() => clickHandler(decrementActionCreator)} >-</Button>
            <Badge pill bg="secondary mx-1 mt-5">
                {count}
            </Badge>
            <Button variant="outline-secondary" size="sm"
                onClick={() => clickHandler(incrementActionCreator)}
            >+</Button>
        </div>
    )
}

export default Counter
