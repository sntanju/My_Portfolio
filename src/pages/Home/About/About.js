import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Aos from 'aos';

const About = () => {

    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
 
    return (
        <div id="about">
            
            <Container fluid className="text-light bg-dark p-5">
                <Row >
                <h2 data-aos="zoom-in" className="my-5">About Me</h2>
                    <Col data-aos="fade-right">
                        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaqYVjv9FMRlgjQq8i-Kut6zE9DxfJyvFWgB9IlVr9vvGy1lC6xR4FmcZbn2LDuUECKo&usqp=CAU" alt="" />
                    </Col>
                    <Col data-aos="fade-left" className="mx-5 my-5 text-light my-text">
                        <p>I am Sanjida Nasrin Tanju.I am a Front-end Web Developer.  I am expert in React JS, Firebase, Node JS, MongoDB, Express JS, Bootstrap, Tailwind, CSS3, HTML5 etc. I Have made some Projects with this topics. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;

