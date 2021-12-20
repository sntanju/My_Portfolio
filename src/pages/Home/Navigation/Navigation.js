import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation">
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container>

                    <Navbar.Brand href="#home"><img className="nav-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaqYVjv9FMRlgjQq8i-Kut6zE9DxfJyvFWgB9IlVr9vvGy1lC6xR4FmcZbn2LDuUECKo&usqp=CAU" alt="" /></Navbar.Brand>
                    <Navbar.Brand href="#home"><b className="text-warning">Sanjida Nasrin Tanju</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">  </Nav>

                        <Nav className="nav-link">
                        <a href="#home"> <b>Home</b> </a>
                        <a href="#about"> <b>About</b> </a>
                        <a href="#projects"> <b>Projects</b> </a>
                        <a href="#contact"> <b>Contact</b> </a>
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;