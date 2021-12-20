import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import './TopBanner.css';

const TopBanner = () => {
    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
    
    return (
        
        <Container fluid className="topbanner" id="home">
        <Row >
            <Col className="mx-5 my-5 text-light">
                <p > Hello, I am </p>

                <h2 > Sanjida Nasrin Tanju </h2> 

                <h5 ><Typewriter
                                    options={{
                                        strings: [ 'I am a Jr. Web Developer', 'I am a Front-end Developer', 'I am a React Developer'],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 2000
                                    }}/> </h5>

                <Button data-aos="fade-up" className="mx-3 my-3 bg-info text-danger ps-4 pe-4 pt-2 pb-2"><a href="#contact" ><b>Hire Me</b></a></Button>
                
                <Button data-aos="fade-up" className="mx-3 my-3 bg-info text-danger ps-4 pe-4 pt-2 pb-2"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1EZBCIm9A9umJdXtBauv4PjeRJq3aovZ-/view?usp=sharing" ><b>Download Resume</b></a></Button>
                
            </Col>
        </Row>
    </Container>
    );
};

export default TopBanner;