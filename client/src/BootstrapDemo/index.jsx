import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './styles.scss'

function BootstrapDemo() {
    return (
        <Container fluid>
            <Row>
            <Col className='mb-3 item'
                    xl={{ span: 3 }}
                    lg={{ span: 4, offset:0 }}
                    md={{ span: 5, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                >1</Col>
            <Col className='mb-3 item'
                    xl={{ span: 3 }}
                    lg={{ span: 4, offset:0 }}
                    md={{ span: 5, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                >2</Col>
            <Col className='mb-3 item'
                    xl={{ span: 3 }}
                    lg={{ span: 4, offset:0 }}
                    md={{ span: 5, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                >3</Col>
            <Col className='mb-3 item'
                    xl={{ span: 3 }}
                    lg={{ span: 4, offset:0 }}
                    md={{ span: 5, offset: 1 }}
                    sm={{ span: 10, offset: 1 }}
                >4</Col>
            </Row>
        </Container>
    )
}

export default BootstrapDemo