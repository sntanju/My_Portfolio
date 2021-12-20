import React, { useEffect } from 'react';
import { Col, Button } from 'react-bootstrap';
import Aos from 'aos';
import './Project.css';

const Project = ({project}) => {

    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
 
    const { name, description, img, live, client, server }  = project || {};

    return (        
                <Col data-aos="fade-up" sm={12} md={6} lg={4} id="#projects"   className="project my-2">
                    <img data-aos="zoom-in" src={img} alt="" />
                    <h2 className=" my-4"  data-aos="zoom-in">{name}</h2>
                    <p data-aos="zoom-in">{description}</p>
                    <p><Button data-aos="zoom-in" > <a href={live} rel= "noreferrer" target="_blank"> <b> Show Details</b> </a> </Button></p>
                    <Button data-aos="zoom-in" > <a href={live} rel= "noreferrer" target="_blank"> <b>Live</b> </a> </Button>
                    <Button data-aos="zoom-in" > <a href={client} rel= "noreferrer" target="_blank"> <b>Client</b> </a> </Button>
                    <Button data-aos="zoom-in" > <a href={server} rel= "noreferrer" target="_blank"> <b>Server</b> </a> </Button>
                    
                </Col>          
    );
};

export default Project;