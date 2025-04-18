import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './style.css'
import rushaImg from './rusha.jpg';


import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaPhp,
    FaJava,
  } from 'react-icons/fa';
  import { SiXampp, SiCsharp } from 'react-icons/si';
  
  const technologies = [
    { name: 'HTML', icon: <FaHtml5 color="#e34c26" size={40} /> },
    { name: 'CSS', icon: <FaCss3Alt color="#264de4" size={40} /> },
    { name: 'JavaScript', icon: <FaJs color="#f0db4f" size={40} /> },
    { name: 'React', icon: <FaReact color="#61dbfb" size={40} /> },
    { name: 'PHP', icon: <FaPhp color="#8892be" size={40} /> },
    { name: 'XAMPP', icon: <SiXampp color="#fb7a24" size={40} /> },
    { name: 'Java', icon: <FaJava color="#007396" size={40} /> },
    { name: 'C#', icon: <SiCsharp color="#9b4f96" size={40} /> },
  ];
  

const AboutContainer = ()=>{

    return (
        <>
            <Container className="py-5">
                {/* First Row */}
                <Row className="align-items-center mb-5">
                    <Col md={6}>
                        <Image src={rushaImg} style={{ height:'500px', marginLeft:'12rem' }} fluid rounded />
                    </Col>
                    <Col md={6}>
                        <h2>About Me</h2>
                        <p>
                            I am a passionate developer with a love for creating modern, responsive web applications.A collaborative and creative Full-Stack Developer with 1+ years of experience in developing scalable,
                            efficient applications using technologies such as PHP, Python, C++, Java, and MySQL. Skilled in delivering
                            client-focused solutions that exceed expectations, with a focus on high-quality software engineering
                        </p>
                        <ul>
                            <li>Strong problem-solving skills</li>
                            <li>Team collaboration and communication</li>
                            <li>Focused on clean, maintainable code</li>
                        </ul>
                    </Col>
                </Row>

                {/* Second Row */}
                <Row>
                    <Col>
                        <h3 className="mb-4 text-center">Technologies</h3>
                        <div className="d-flex flex-wrap justify-content-center gap-4">
                            {technologies.map((tech, index) => (
                                <div className="tech-icon text-center" key={index}>
                                {tech.icon}
                                <div style={{ marginTop: '8px', fontSize: '14px' }}>{tech.name}</div>
                                </div>
                            ))}
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutContainer;