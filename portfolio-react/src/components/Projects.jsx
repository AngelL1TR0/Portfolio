import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mono accent-text mb-2 text-center">// portfolio.projects</div>
          <h2>Proyectos Destacados</h2>
        </motion.div>

        <Row className="g-4 mt-2">
          {projects.map((project, i) => (
            <Col key={project.id} xs={12} lg={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="cyber-card h-100 border-0 p-4">
                  <Card.Body className="d-flex flex-column p-0">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="accent-text fs-3">0{i + 1}</div>
                      <div className="text-secondary mono small">_stable_v1.0</div>
                    </div>
                    <Card.Title className="fw-bold mb-3 fs-4 text-white mono">{project.name}</Card.Title>
                    <Card.Text className="text-secondary mb-4 flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded bg-secondary bg-opacity-10 text-info smaller mono" style={{ fontSize: '0.75rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-decoration-none">
                      <button className="btn-cyber w-100 py-2" style={{ fontSize: '0.8rem' }}>
                        Explorar Fuente
                      </button>
                    </a>
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
