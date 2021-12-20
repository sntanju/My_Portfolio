import React, { useState, useEffect, useRef } from 'react';
import Aos from 'aos';
import emailjs from 'emailjs-com';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './ContactMe.css';

// const ContactMe = () => {
//     //copy 
//     const [isLoading, setIsLoading] = useState(true);
//     const [isSend, setIssend] = useState(false);
//     const [successMessage, setSuceeessMessage] = useState(false);
//     //---------
//     useEffect( () => {
//         Aos.init({ duration: 2000 })
//     }, []);

//     const form = useRef();


//     //copy code
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const subjectRef = useRef();
//     const messageRef = useRef();
//     //----------------------------

//     const sendEmail = (e) => {
//         e.preventDefault();
//         setIssend(true);
//         //copy code
//         const name = nameRef.current.value;
//         const email = emailRef.current.value;
//         const subject = subjectRef.current.value;
//         const message = messageRef.current.value;

//         const send = {
//             name,email,subject,message
//         }
//         //-----------------------

//         emailjs.sendForm('service_vhyqwwd', 'contact_form', form.current, 'user_dX2x12uSY1pvFu5zDwkOA')

//         .then((result) => {
//             setIssend(false);
//             setSuceeessMessage(true);
//             setTimeout( () => {
//                 setSuceeessMessage(false);
//             },3000)
//         }, (error) => {
//             console.log(error.text);
//         });
//     e.target.reset();
//     }


//     //     .then((result) => {
//     //         console.log(result.text);
//     //      } , (error) => {
//     //      console.log(error.text);
//     //      }
//     //     );
//     // }
const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_56zw1vn', 'contact_form', form.current, 'user_dX2x12uSY1pvFu5zDwkOA')
        .then((result) => {
            alert("Message Send Successfully");
            console.log(result)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
}
    
    return (

        <Container fluid id="contact">
            <h2 data-aos="zoom-in" className=" p-4 text-success my-projects"><b>Contact Me</b></h2>
        <Row >
            <Col data-aos="zoom-in" className=" p-5 text-light contact w-50 ">
                 <form ref={form} onSubmit={sendEmail}>

                <label data-aos="fade-right" className="my-1 "><b>Name </b></label><br/>
                <input data-aos="fade-left" type="text" placeholder="your name" name="name" /><br/>

                <label data-aos="fade-right" className="my-1 "><b>Email </b></label><br/>
                <input data-aos="fade-left"  type="email" placeholder="your email" name="email" /><br/> 

                <label data-aos="fade-right" className="my-1 "><b>Message </b></label><br/>
                <textarea data-aos="fade-left" class="my-3" placeholder="your message to me" name="message" /><br/>

                <input data-aos="zoom-in" class="submit" type="submit" value="Send Message" placeholder="Send Message" name="Send" /><br/>             
                {/* copy
                {/* {!isSend && <input data-aos="zoom-in" className="submit" type="submit"value="Send Message" placeholder="Send Message" name="Send" />}

                {
                    isSend && <div>
                        <div className="" role="status">
                            <span className="">Loading...</span>
                        </div>
                    </div>
                } */}
                 </form>

                 {/* {
                    
                    successMessage && <div className="" role="alert"><i className=""></i> Message Send Successfully</div>
                }
                 */}
            </Col>
        </Row>
    </Container>
    );
};

export default ContactMe;