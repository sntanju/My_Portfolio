import React, { useEffect } from 'react';
import Aos from 'aos';
import { Container, Row } from 'react-bootstrap';
import './MySkils.css';
import MySkill from '../MySkill/MySkill';

const MySkils = () => {

    useEffect( () => {
        Aos.init({ duration: 2000 })
    }, []);
    const skils = [
        {
            name: "React JS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZShxX58eJu454iY94t1Hjn_VvX58F_nCuCUBSxUenfgB94u9Tq5HVvVT8m0XtvJAf9I&usqp=CAU"
        },
        {
            name: "Firebase Authenticaion",
            img: "https://i.ytimg.com/vi/fgT6r4f9Apc/maxresdefault.jpg"
        },
        {
            name: "Node JS",
            img: "https://hazelcast.com/wp-content/uploads/2020/10/node-400x253.png"
        },
        {
            name: "Express JS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bW6QIpU8Lv2kDK9F6w7gLmplBcqQsUrfOIO4XOCf3jK4261C40c5-gUrHZkZkwQXcQg&usqp=CAU"
        },
        {
            name: "MongoDB",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg30kiqnP5THmdgm1Mq_cYi_N4DrHuodqDBYXXc_SYEZPRPEAybuwtrqmQxzZikKu12fQ&usqp=CAU"
        },
        {
            name: "Bootstrap",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHk_xHqunYwLK4duIHnKiLb7LO2GW96BGkNkmT9fNKc8WM-fn95gp3HW42MSnI95LUj0E&usqp=CAU"
        },
        {
            name: "Tailwind",
            img: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072021/screenshot018.jpg?zyQOzuybUXryQSZk9NuvxtvDBF3l..N1&itok=OZ3Ts8hd"
        },
        {
            name: "Material UI",
            img: "https://v4.mui.com/static/logo.png"
        },
        {
            name: "CSS",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Med7ALAd2SnQnyUBhKLDROcigpmzgz4LP3rCjIoHasNQa1jFIbnoo-13aLw3OIKcC4A&usqp=CAU"
        },
        {
            name: "HTML",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEZwPP-hru7BKXvwJsagcOLNUHVzQoNyfqA&usqp=CAU"
        },
        {
            name: "VSCode",
            img: "https://res.cloudinary.com/dmsxwwfb5/image/upload/v1589267846/visual-studio-code.jpg"
        },
        {
            name: "Github",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrXFxxwWZ4zieycnO00V_3iINeIMYP9zeZ2ibJHM3OIMsVdCcc7s4q7MuJp71snSXE98&usqp=CAU"
        },
        {
            name: "Netlify",
            img: "https://media-exp1.licdn.com/dms/image/C560BAQG8HTJEoqPI4Q/company-logo_200_200/0/1625843974996?e=2159024400&v=beta&t=VruK-Bp_G73A3mknEVm5vhouTo6kqn79zJ8BvQgRvpo"
        },
        {
            name: "Heroku",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrtBRSz3_Rsn_j_jSi9FgKZYmRkElVgvNZwiK7mDoo6KAPI1ZICSoRNDWwUnNvKarzhG4&usqp=CAU"
        },

    ];

    return (
        <Container fluid>
             <h2 data-aos="zoom-in" className=" p-4 text-success my-projects"><b>My Skils</b></h2>
            <Row className='my-skills'>
               
                   {
                        skils.map(skill => <MySkill
                            key={skill.name}
                            skill={skill}
                        ></MySkill>)
                    }
                
            </Row>
        </Container>
    );
};

export default MySkils;