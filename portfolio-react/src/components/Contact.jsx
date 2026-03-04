import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const formRef = useRef();
  const { socialLinks } = portfolioData;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'TRANSMITI_...' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({ type: 'success', message: 'DELIVERED_OK' });
        formRef.current.reset();
      }, (error) => {
        setStatus({ type: 'error', message: 'ERROR_NET' });
      });
  };

  return (
    <section id="contact" className="section pb-5 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <div className="mono accent-text small mb-1">// nex.uplink</div>
          <h2 className="display-5 fw-bold text-white mb-0" style={{ letterSpacing: '-1px' }}>HUB_CONTACTO</h2>
        </motion.div>

        <Row className="justify-content-center g-4 align-items-stretch">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cyber-card p-4 h-100"
              style={{ borderTop: '3px solid var(--accent-color)' }}
            >
              <h5 className="mono text-white mb-4 d-flex align-items-center gap-2">
                <span className="accent-text">&gt;</span> EMAIL_RELAY
              </h5>

              <Form ref={formRef} onSubmit={sendEmail} className="form-compact">
                <Row className="g-3">
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="mono smaller accent-text d-block mb-1">_id</label>
                      <Form.Control name="user_name" type="text" placeholder="Tu Nombre" required />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3">
                      <label className="mono smaller accent-text d-block mb-1">_path</label>
                      <Form.Control name="user_email" type="email" placeholder="email@red.com" required />
                    </div>
                  </Col>
                </Row>

                <div className="mb-4">
                  <label className="mono smaller accent-text d-block mb-1">_payload</label>
                  <Form.Control name="message" as="textarea" rows={3} placeholder="Mensaje..." required />
                </div>

                <button type="submit" className="btn-cyber w-100 py-3 fw-bold" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? '...' : <><FaPaperPlane className="me-2" /> ENVIAR_DATOS</>}
                </button>

                <AnimatePresence>
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`mt-3 mono shadow-sm text-center p-2 rounded-pill ${status.type === 'success' ? 'bg-success bg-opacity-10 text-success' : 'bg-danger bg-opacity-10 text-danger'}`}
                      style={{ fontSize: '0.7rem', border: '1px solid currentColor' }}
                    >
                      {status.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Form>
            </motion.div>
          </Col>

          <Col lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="d-flex flex-column gap-3 h-100"
            >
              <div className="d-flex align-items-center justify-content-between mb-1 px-1">
                <span className="mono accent-text smaller">// UPLINKS_ACTIVE</span>
                <span className="mono accent-text smaller">V4.8.2</span>
              </div>

              <motion.a
                href={`https://wa.me/${(import.meta.env.VITE_CONTACT_WHATSAPP || '').replace('+', '')}`}
                target="_blank"
                className="social-card card-whatsapp card-sidebar flex-grow-1"
                whileHover={{ x: 5 }}
              >
                <div className="card-icon"><FaWhatsapp /></div>
                <div className="card-label">WhatsApp</div>
                <div className="card-desc">Direct Transmission</div>
              </motion.a>

              <motion.a
                href={import.meta.env.VITE_GITHUB_URL || '#'}
                target="_blank"
                className="social-card card-github card-sidebar flex-grow-1"
                whileHover={{ x: 5 }}
              >
                <div className="card-icon"><FaGithub /></div>
                <div className="card-label">GitHub</div>
                <div className="card-desc">Source Code</div>
              </motion.a>

              <motion.a
                href={import.meta.env.VITE_LINKEDIN_URL || '#'}
                target="_blank"
                className="social-card card-linkedin card-sidebar flex-grow-1"
                whileHover={{ x: 5 }}
              >
                <div className="card-icon"><FaLinkedin /></div>
                <div className="card-label">LinkedIn</div>
                <div className="card-desc">Pro Layer</div>
              </motion.a>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
