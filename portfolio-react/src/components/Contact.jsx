import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

function Contact() {
  const [status, setStatus] = useState({ type: '', message: '' });
  const formRef = useRef();
  const { socialLinks } = portfolioData;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Transmitiendo paquete...' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({ type: 'success', message: '_PAYLOAD_DELIVERED_SUCCESS' });
        formRef.current.reset();
      }, (error) => {
        setStatus({ type: 'error', message: '_CONNECTION_REFUSED_TIMEOUT' });
      });
  };

  return (
    <section id="contact" className="section pb-5 pt-0">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <div className="cyber-card p-5 max-width-800 mx-auto overflow-hidden">
            <div className="mono accent-text mb-2">// comms.handshake()</div>
            <h2 className="mb-5 text-start fs-1">Abrir <span className="accent-text">Canal</span></h2>
            <Row>
              <Col lg={7} className="mb-4 mb-lg-0">
                <Form ref={formRef} onSubmit={sendEmail} className="form-compact">
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>_source_id</Form.Label>
                    <Form.Control name="user_name" type="text" placeholder="Tu nombre..." required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>_return_address</Form.Label>
                    <Form.Control name="user_email" type="email" placeholder="tu@email.com" required />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>_message_payload</Form.Label>
                    <Form.Control name="message" as="textarea" rows={3} placeholder="Escribe tu mensaje..." required />
                  </Form.Group>

                  <button type="submit" className="btn-cyber w-100 py-2 mt-2" disabled={status.type === 'loading'}>
                    {status.type === 'loading' ? 'Transmitiendo...' : 'ENVIAR MENSAJE'}
                  </button>

                  <AnimatePresence>
                    {status.message && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`mt-3 mono small ${status.type === 'success' ? 'text-success' : 'text-danger'}`}>
                        {status.message}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Form>
              </Col>
              <Col lg={5} className="ps-lg-5 d-flex flex-column justify-content-center">
                <div className="mb-5">
                  <h4 className="fw-bold mb-3 mono text-white small">Protocolos Directos</h4>

                  <motion.a
                    href={`https://wa.me/${(import.meta.env.VITE_CONTACT_WHATSAPP || '').replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber w-100 py-2 text-decoration-none d-flex align-items-center justify-content-center mb-4 mono smaller"
                    whileHover={{ scale: 1.02 }}
                  >
                    ESTABLECER_WHATSAPP_SIGNAL
                  </motion.a>

                  <h4 className="fw-bold mb-3 mono text-white small">Nodos Sociales</h4>
                  <div className="d-flex flex-column gap-2">
                    {socialLinks.map(social => (
                      <motion.a
                        key={social.name}
                        whileHover={{ x: 5, color: '#00f2ff' }}
                        href={social.url}
                        className="text-secondary mono text-decoration-none small">
                        <span className="accent-text">{social.icon}</span> {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Contact;
