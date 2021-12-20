import Aos from 'aos';
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';
// import Project from '../Project/Project';
import './Projects.css';

const Projects = () => {

    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
    const projects = [
        {
            name: 'Shoe Mart',
            description: 'It was a website of Female Shoe Shop.Various kinds of Shoes are collected here. This website is made with React JS, Firebase Authentication, Node JS, MongoDB, Express JS, Private Route, Bootstrap, CSS, HTML',
            live: "https://shoe-mart-website.web.app/",
            client: "https://github.com/sntanju/Shoe_Mart_Website_Client_Site_Assignment12",
            server: "https://github.com/sntanju/Shoe_Mart_Website_Server_Site_Assignment12",
            img: "https://i.ibb.co/XWmkjbw/shoe.png"
        },
        {
            name: 'Travel Ally',
            description: 'It was a website about Travel Service.Various kinds of Travel Services are collected here. This website is made with React JS, Firebase Authentication, Node JS, MongoDB, Express JS, Private Route, Bootstrap, CSS, HTML ',
            live: "https://travelling-website-7f7b5.web.app/",
            client: "https://github.com/sntanju/Travel_Ally_Client_Site_Assignment11",
            server: "https://github.com/sntanju/Travel_Ally_Server_Site_Assignment11",
            img: "https://i.ibb.co/PZ4G5bG/travel.png"
        },
        {
            name: 'HealTouch Lab',
            description: 'It is a website about Lab Service.It was a collection of various types of Lab Tests. This website is made with React Js, Firebase Authentication,Private Route, Bootstrap, CSS, HTML.  ',
            live: "https://healthcare-website-4f0d9.web.app/",
            client: "https://github.com/sntanju/HealTouch_Lab_Assignment10",
            server: "https://github.com/sntanju/HealTouch_Lab_Assignment10",
            img: "https://i.ibb.co/0V6vLDR/lab.png"
        }
    ];

    return (

        <Container fluid id="projects">
             <h2 data-aos="zoom-in" className=" p-4 text-success my-projects"><b>My Recent Projects</b></h2>
            <Row className='projects'>
               
                   {
                        projects.map(project => <Project
                            key={project.name}
                            project={project}
                        ></Project>)
                    }
                
            </Row>
        </Container>
        
    );
};

export default Projects;