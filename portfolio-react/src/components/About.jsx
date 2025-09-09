import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <Image src="https://via.placeholder.com/300" roundedCircle fluid />
            </motion.div>
          </Col>
          <Col xs={12} md={8}>
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
              <h2>Sobre Mí</h2>
              <p>¡Hola! Soy un desarrollador apasionado por crear soluciones web.</p>
              <p>Me encanta aprender nuevas tecnologías y construir cosas útiles.</p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

