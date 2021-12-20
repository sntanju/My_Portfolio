import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <Container fluid>
        <Row >
            <Col data-aos="zoom-in" className="text-danger">
                <p><b>Copyright Warning &copy; 2021 Sanjida Nasrin Tanju</b></p>
            </Col>
        </Row>
    </Container>
    );
};

export default Footer;