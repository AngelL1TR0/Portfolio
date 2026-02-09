import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import WorldMap from './WorldMap';

function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="section">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mono accent-text mb-2 text-center">// system.history</div>
                    <h2 className="mb-5">Experiencia Profesional</h2>
                </motion.div>

                <Row className="justify-content-center">
                    <Col lg={8}>
                        <div className="cyber-card p-5">
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    className="exp-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                >
                                    <div className="d-flex justify-content-between align-items-start mb-2 flex-column flex-md-row">
                                        <div>
                                            <h4 className="text-white mono fw-bold mb-0">{exp.role}</h4>
                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                <span className="accent-text mono small">{exp.company}</span>
                                                <span className="text-secondary smaller">•</span>
                                                <WorldMap
                                                    lat={exp.location.lat}
                                                    lon={exp.location.lon}
                                                    label={exp.location.label}
                                                >
                                                    <span className="text-secondary smaller mono" style={{ fontSize: '0.7rem' }}>{exp.location.label}</span>
                                                </WorldMap>
                                            </div>
                                        </div>
                                        <span className="badge bg-secondary bg-opacity-10 text-secondary mono px-3 py-2">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <p className="text-secondary mono small mb-3">
                                        {exp.description}
                                    </p>
                                    <div className="d-flex flex-wrap gap-2">
                                        {exp.secrets.map((skill, j) => (
                                            <span key={j} className="text-info smaller mono" style={{ fontSize: '0.7rem' }}>
                                                #{skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
