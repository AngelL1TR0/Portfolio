import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { lazy, Suspense } from 'react';
import WorldMapSkeleton from './WorldMapSkeleton';

const ResumePDF = lazy(() => import('./ResumePDF'));
const WorldMap = lazy(() => import('./WorldMap'));

function About() {
  const { personalInfo, stats } = portfolioData;
  const [cvLang, setCvLang] = useState('es');

  return (
    <section id="about" className="section overflow-hidden">
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mono accent-text mb-3">System.start()</div>
              <h1 className="display-2 fw-bold mb-4 hero-title">
                {personalInfo.name.split(' ')[0]} <span className="accent-text">_</span>
              </h1>
              <p className="lead fs-4 text-secondary mb-5 mono">
                {personalInfo.aboutShort}
              </p>

              <Row className="g-3 mb-5">
                {stats.map((stat, i) => (
                  <Col key={i} xs={6} md={3}>
                    <motion.div
                      className="stat-box"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (i * 0.1) }}
                    >
                      <h3 className="accent-text fw-bold mb-0">{stat.value}</h3>
                      <div className="text-secondary smaller mono" style={{ fontSize: '0.65rem' }}>{stat.label}</div>
                    </motion.div>
                  </Col>
                ))}
              </Row>

              <div className="d-flex flex-column flex-lg-row gap-4 align-items-center justify-content-center justify-content-lg-start">
                <div className="d-flex align-items-center gap-3">
                  <div className="lang-selector p-1 bg-dark-soft border border-secondary rounded-pill d-flex gap-1" style={{ background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(5px)' }}>
                    {['es', 'en'].map(l => (
                      <button
                        key={l}
                        onClick={() => setCvLang(l)}
                        style={{
                          background: cvLang === l ? '#00f2ff' : 'transparent',
                          color: cvLang === l ? '#050a15' : '#8892b0',
                          border: 'none',
                          padding: '2px 8px',
                          borderRadius: '15px',
                          fontSize: '0.7rem',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s'
                        }}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  <Suspense fallback={<button className="btn-cyber">Cargando...</button>}>
                    <PDFDownloadLink
                      document={<ResumePDF lang={cvLang} />}
                      fileName={`CV_Angel_Torija_${cvLang.toUpperCase()}.pdf`}
                      className="text-decoration-none"
                    >
                      {({ loading }) => (
                        <button className="btn-cyber" disabled={loading}>
                          {loading ? '...' : `Descargar CV [${cvLang.toUpperCase()}]`}
                        </button>
                      )}
                    </PDFDownloadLink>
                  </Suspense>
                </div>
                <div className="d-flex align-items-center gap-2 text-secondary mono">
                  <span className="accent-text">•</span>
                  <Suspense fallback={<WorldMapSkeleton />}>
                    <WorldMap
                      lat={personalInfo.location.lat}
                      lon={personalInfo.location.lon}
                      label={personalInfo.location.label}
                    />
                  </Suspense>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="terminal-window"
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-danger" />
                <div className="terminal-dot bg-warning" />
                <div className="terminal-dot bg-success" />
                <div className="ms-2 text-secondary small mono">portfolio_v2.log</div>
              </div>
              <div className="terminal-body mono">
                <div className="mb-2"><span className="text-info">const</span> <span className="text-warning">developer</span> = {'{'}</div>
                <div className="ms-3 mb-1">
                  name: <span className="text-success">'{personalInfo.name}'</span>,
                </div>
                <div className="ms-3 mb-1">role: <span className="text-success">'{personalInfo.role}'</span>,</div>
                <div className="ms-3 mb-1 d-flex flex-wrap gap-1">
                  skills: [
                  {personalInfo.skills.map((skill, i) => (
                    <span key={i} className="text-success">
                      '{skill}'{i < personalInfo.skills.length - 1 ? ',' : ''}
                    </span>
                  ))}
                  ],
                </div>
                <div className="ms-3 mb-1">location: <span className="text-success">'{personalInfo.location.label}'</span></div>
                <div className="mb-2">{'}'};</div>
                <div className="mb-2 text-secondary mono smaller animate-pulse">// ACCESS_GRANTED_Bypassing_Firewall...</div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="d-inline-block bg-info"
                  style={{ width: '10px', height: '18px' }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
