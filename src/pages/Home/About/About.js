import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div>
            
            <Container fluid className="text-light bg-dark p-5">
                <Row >
                <h2 className="my-5">About Me</h2>
                    <Col>
                        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaqYVjv9FMRlgjQq8i-Kut6zE9DxfJyvFWgB9IlVr9vvGy1lC6xR4FmcZbn2LDuUECKo&usqp=CAU" alt="" />
                    </Col>
                    <Col className="mx-5 my-5 text-light my-text">
                        <p>I am Sanjida Nasrin Tanju.I am a Front-end Web Developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate, aliquam voluptatum possimus eaque, quisquam sapiente cum delectus consectetur recusandae nostrum? Dolore labore atque ipsa ut. Blanditiis, quo nam! Doloremque temporibus alias fuga sint laborum dolores reprehenderit nostrum dolorem perspiciatis?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;