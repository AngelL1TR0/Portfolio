import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Credentials = () => {
    const { education, languages, certifications } = portfolioData;

    return (
        <section id="credentials" className="section">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-5"
                >
                    <div className="mono accent-text mb-2">// system.credentials</div>
                    <h2 className="mb-0">Formación y Certificados</h2>
                </motion.div>

                <Row className="g-4">
                    <Col lg={4}>
                        <motion.div
                            className="cyber-card h-100 p-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="text-white mono mb-4 d-flex align-items-center gap-2">
                                <span className="accent-text">01.</span> Educación
                            </h4>
                            {education.map((edu, i) => (
                                <div key={i} className="mb-4">
                                    <div className="accent-text mono small mb-1">{edu.period}</div>
                                    <div className="text-white fw-bold mb-1">{edu.degree}</div>
                                    <div className="text-secondary smaller mono">{edu.institution}</div>
                                    <p className="text-secondary smaller mt-2 mb-0">{edu.details}</p>
                                </div>
                            ))}
                        </motion.div>
                    </Col>

                    <Col lg={4}>
                        <motion.div
                            className="cyber-card h-100 p-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white mono mb-4 d-flex align-items-center gap-2">
                                <span className="accent-text">02.</span> Certificados
                            </h4>
                            {certifications.map((cert, i) => (
                                <div key={i} className="mb-4">
                                    <div className="accent-text mono small mb-1">{cert.year}</div>
                                    <div className="text-white fw-bold mb-1">{cert.name}</div>
                                    <div className="text-secondary smaller mono">{cert.issuer}</div>
                                </div>
                            ))}
                        </motion.div>
                    </Col>

                    <Col lg={4}>
                        <motion.div
                            className="cyber-card h-100 p-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4 className="text-white mono mb-4 d-flex align-items-center gap-2">
                                <span className="accent-text">03.</span> Idiomas
                            </h4>
                            {languages.map((lang, i) => (
                                <div key={i} className="mb-4">
                                    <div className="text-white fw-bold mb-1">{lang.name}</div>
                                    <div className="text-secondary smaller mono d-flex justify-content-between align-items-center">
                                        <span>Nivel: {lang.level}</span>
                                        <div className="d-flex gap-1">
                                            {[1, 2, 3, 4, 5].map(dot => (
                                                <div
                                                    key={dot}
                                                    style={{
                                                        width: '6px',
                                                        height: '6px',
                                                        borderRadius: '50%',
                                                        background: dot <= (lang.level === 'Nativo' ? 5 : 4) ? 'var(--accent-color)' : 'rgba(0, 242, 255, 0.1)'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Credentials;
