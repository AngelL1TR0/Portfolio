import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Proyecto 1',
      description: 'Una descripción breve del Proyecto 1. Fue un proyecto interesante donde aprendí mucho.',
      link: '#',
      img: 'https://via.placeholder.com/300x200'
    },
    {
      id: 2,
      name: 'Proyecto 2',
      description: 'Una descripción breve del Proyecto 2. Este proyecto me permitió aplicar mis habilidades en X y Y.',
      link: '#',
      img: 'https://via.placeholder.com/300x200'
    },
    {
      id: 3,
      name: 'Proyecto 3',
      description: 'Una descripción breve del Proyecto 3. Un desafío divertido que resolví con Z.',
      link: '#',
      img: 'https://via.placeholder.com/300x200'
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section id="projects" className="section bg-light">
      <Container>
        <h2>Mis Proyectos</h2>
        <Row>
          {projects.map((project, i) => (
            <Col key={project.id} xs={12} md={4} className="mb-4">
              <motion.div custom={i} initial="hidden" animate="visible" variants={cardVariants}>
                <Card>
                  <Card.Img variant="top" src={project.img} />
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button variant="primary" href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;

