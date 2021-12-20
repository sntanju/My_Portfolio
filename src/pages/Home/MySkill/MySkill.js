import Aos from 'aos';
import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './MySkill.css';

const MySkill = ({skill}) => {

    const { name, img }  = skill || {};
    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);

    return (

        <Col data-aos="zoom-in" xs={12} sm={12} md={4} lg={4}   className="skill">
            <img data-aos="zoom-in" className="skill-image" src={img} alt="" />
        </Col>   
    );
};

export default MySkill;