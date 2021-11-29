import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        
        <Container fluid className="topbanner">
        <Row >
            <Col className="mx-5 my-5 text-light">
                <p>Hello, I am</p>
                <h2>Sanjida Nasrin Tanju</h2>
                <h5>A Front-end Web Developer</h5>
            </Col>
        </Row>
    </Container>
    );
};

export default TopBanner;