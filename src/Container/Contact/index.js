import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const  ContactContainer = ()=>{
    
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            
            <Row className="contactInfoRow">
                <Col md={4} className="contactBox">
                    <h5>Contact Number</h5>
                    <p>+94 75 410 5429</p>
                </Col>
                <Col md={4} className="contactBox">
                    <h5>Email</h5>
                    <p>shalinithiruchelvam2001@gmail.com </p>
                </Col>
            </Row>

        </Container>
        </div>
    )
}

export default ContactContainer;