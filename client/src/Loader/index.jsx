import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import './styles.scss';

function Loader() {

    const { loading } = useSelector(({ user }) => user);

    return (
        loading ? <Spinner animation="border" className='loader' /> : null
    )
}

export default Loader
