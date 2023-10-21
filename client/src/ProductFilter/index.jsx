import React from 'react'
import { Card, Form } from 'react-bootstrap'

function ProductFilter({ filterList, activeFilters, setActiveFilters }) {
    const setFilter = (key) => {
        const activeFiltersCopy = [...activeFilters];
        const index = activeFiltersCopy.indexOf(key);
        // -1 if element doesn't exits
        if (index === -1) {
            // add to active filter
            activeFiltersCopy.push(key)
        } else {
            activeFiltersCopy.splice(index, 1)
        }
        setActiveFilters(activeFiltersCopy);
    }
    return (
        <Card>
            <Card.Title>Categories</Card.Title>
            <Card.Body>
                {filterList.map(filterItem => (
                    <Form.Check type="checkbox" id={filterItem} key={filterItem} label={filterItem} value={filterItem} onChange={() => setFilter(filterItem)} />
                ))}


            </Card.Body>
        </Card>
    )
}

export default ProductFilter