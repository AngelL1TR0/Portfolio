import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const CyberSentinel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'sentinel', text: 'SISTEMA_OPERATIVO: Sentinel_v1.0. Estado: ONLINE. ¿Buscando información sobre Angel Torija?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const findResponse = (query) => {
        const q = query.toLowerCase();
        const info = portfolioData.personalInfo;

        // 1. PROJECT SPECIFIC QUERIES
        if (q.includes('petfind')) {
            const p = portfolioData.projects.find(proj => proj.name === 'PetFind');
            return `PETFIND_DETECTADO: ${p.description} Stack: ${p.tags.join(', ')}. Un nodo vital para la interacción social entre dueños de mascotas.`;
        }
        if (q.includes('terminalresults') || q.includes('futbol') || q.includes('teletexto')) {
            const p = portfolioData.projects.find(proj => proj.name === 'TerminalResults');
            return `TERMINAL_RESULTS: ${p.description} Utiliza ${p.tags.join(', ')}. Es pura nostalgia digital aplicada a datos deportivos.`;
        }
        if (q.includes('portfolio') || q.includes('esta web')) {
            const p = portfolioData.projects.find(proj => proj.name === 'Portfolio React');
            return `PORTFOLIO_CORE: ${p.description} Construido con ${p.tags.join(', ')}. Es la interfaz que estás usando ahora mismo.`;
        }

        // 2. EXPERIENCE & COMPANIES
        if (q.includes('trabaj') || q.includes('experiencia') || q.includes('empresa') || q.includes('donde')) {
            const current = portfolioData.experience.find(e => e.period.toLowerCase().includes('actualidad')) || portfolioData.experience[portfolioData.experience.length - 1];
            const others = portfolioData.experience.filter(e => e !== current).map(e => e.company);
            return `HISTORIAL_LABORAL_CARGADO: Angel trabaja actualmente en ${current.company} como ${current.role}. Previamente ha aportado su talento en ${others.join(', ')}. Especialista en .NET Core y Angular.`;
        }

        // 3. SKILLS & TECH
        if (q.includes('skill') || q.includes('tecnolog') || q.includes('sabes') || q.includes('stack') || q.includes('herramientas')) {
            return `MODULO_HABILIDADES: Angel domina ${info.skills.join(', ')}. Recientemente ha integrado 'Vibe Coding' e 'IA' en su flujo de trabajo. También maneja ${info.softSkills.join(', ')}.`;
        }

        // 4. EDUCATION & CERTIFICATIONS
        if (q.includes('estudi') || q.includes('universidad') || q.includes('educacion') || q.includes('formacion') || q.includes('grado')) {
            const edu = portfolioData.education[0];
            return `REGISTROS_ACADEMICOS: Se formó en ${edu.institution} obteniendo el título de ${edu.degree} (${edu.period}).`;
        }
        if (q.includes('certifica') || q.includes('titulo') || q.includes('az-900') || q.includes('ccna')) {
            const certs = portfolioData.certifications.map(c => `${c.name} (${c.issuer})`).join(', ');
            return `CERTIFICACIONES_VALIDADAS: Posee ${certs}. Seguridad y Cloud son sus pilares.`;
        }

        // 5. LANGUAGES
        if (q.includes('idioma') || q.includes('ingles') || q.includes('english') || q.includes('hablas')) {
            const langs = portfolioData.languages.map(l => `${l.name} (${l.level})`).join(' y ');
            return `MODULO_LINGUISTICO: El sistema soporta ${langs}.`;
        }

        // 6. CONTACT & SOCIAL
        if (q.includes('contacto') || q.includes('email') || q.includes('correo') || q.includes('escribir') || q.includes('whatsapp') || q.includes('linkedin')) {
            return `PROTOCOLO_CONTACTO: Usa el formulario de la web o el botón de WhatsApp. También puedes localizar su nodo en LinkedIn o GitHub. ¿Procedo a abrir canal?`;
        }

        // 7. WHO IS
        if (q.includes('quien') || q.includes('sobre') || q.includes('angel') || q.includes('present')) {
            return `DETALLES_SUJETO: Angel Torija es un ${info.role} basado en ${info.location.label}. Su misión: "${info.aboutShort}"`;
        }

        // 8. GREETINGS & DEFAULT
        if (q.includes('hola') || q.includes('buenas') || q.includes('hey') || q.includes('sentinel')) {
            return `SALUDOS_USUARIO: Soy Sentinel_v1.0. Mi base de datos sobre Angel Torija está optimizada. Pregúntame sobre sus proyectos, experiencia o habilidades.`;
        }

        return "DATOS_INSUFICIENTES: No he encontrado una coincidencia de alto nivel en la base de datos de Angel. ¿Podrías reformular la consulta usando términos como 'proyectos', 'experiencia' o 'stack'?";
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInputValue('');
        setIsTyping(true);

        // Simulated thinking time
        setTimeout(() => {
            const response = findResponse(userMsg);
            setMessages(prev => [...prev, { role: 'sentinel', text: response }]);
            setIsTyping(false);
        }, 1000);
    };

    const styles = {
        container: {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 100000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '15px'
        },
        window: {
            width: '350px',
            height: '500px',
            background: 'rgba(5, 10, 21, 0.95)',
            border: '1px solid #00f2ff',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 0 40px rgba(0, 242, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            marginBottom: '10px'
        },
        header: {
            padding: '12px 15px',
            background: 'rgba(0, 242, 255, 0.05)',
            borderBottom: '1px solid rgba(0, 242, 255, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        trigger: {
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#0a1128',
            border: '2px solid #00f2ff',
            color: '#00f2ff',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
            fontFamily: 'monospace'
        }
    };

    return (
        <div className="sentinel-container" style={styles.container}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        style={styles.window}
                    >
                        <div style={styles.header}>
                            <div className="d-flex align-items-center gap-2">
                                <div className="terminal-dot bg-info" style={{ width: '8px', height: '8px' }} />
                                <span className="mono accent-text" style={{ fontSize: '11px' }}>SENTINEL_AI_v1.0</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#8892b0', fontSize: '18px', cursor: 'pointer' }}>×</button>
                        </div>

                        <div
                            ref={scrollRef}
                            style={{
                                flexGrow: 1,
                                overflowY: 'auto',
                                padding: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}
                        >
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    style={{
                                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '85%'
                                    }}
                                >
                                    <div style={{
                                        padding: '10px 14px',
                                        borderRadius: '8px',
                                        background: msg.role === 'user' ? '#003366' : 'rgba(0, 242, 255, 0.05)',
                                        border: msg.role === 'user' ? '1px solid #00f2ff' : '1px solid rgba(0, 242, 255, 0.1)',
                                        color: msg.role === 'user' ? 'white' : '#e6f1ff',
                                        fontSize: '13px',
                                        fontFamily: 'monospace',
                                        position: 'relative'
                                    }}>
                                        <span style={{ color: '#00f2ff', marginRight: '6px' }}>{msg.role === 'sentinel' ? '>' : 'U:'}</span>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ color: '#00f2ff', fontSize: '12px', fontFamily: 'monospace', paddingLeft: '5px' }}>
                                    _procesando_consulta...
                                </div>
                            )}
                        </div>

                        <form
                            onSubmit={handleSend}
                            style={{
                                padding: '15px',
                                borderTop: '1px solid rgba(0, 242, 255, 0.1)',
                                display: 'flex',
                                gap: '8px'
                            }}
                        >
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Escribe comando..."
                                style={{
                                    flexGrow: 1,
                                    background: '#0a1128',
                                    border: '1px solid #003366',
                                    color: 'white',
                                    padding: '8px 12px',
                                    borderRadius: '4px',
                                    outline: 'none',
                                    fontSize: '13px',
                                    fontFamily: 'monospace'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: '#00f2ff',
                                    border: 'none',
                                    color: '#050a15',
                                    padding: '0 15px',
                                    borderRadius: '4px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer'
                                }}
                            >
                                ↵
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="sentinel-trigger"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={styles.trigger}
            >
                AI
            </motion.button>
        </div>
    );
};

export default CyberSentinel;
