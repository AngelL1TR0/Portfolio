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
        const userName = import.meta.env.VITE_USER_NAME || "Angel Torija";

        // TECHNICAL PREFIXES FOR PERSONALITY
        const log = "[DATALOG_OK] ";
        const warn = "[SYS_WARN] ";
        const link = "[LINK_ESTABLISHED] ";
        const sec = "[SECURITY_CLEARANCE_AUTH] ";

        // 1. GREETINGS & CORE IDENTITY
        if (q.includes('hola') || q.includes('buenas') || q.includes('hey') || q.includes('saludos')) {
            return `${log} Conexión de usuario detectada. Soy Sentinel_v1.0, el asistente táctico de ${userName}. Mi base de datos está optimizada y lista para consultas sobre proyectos, stack técnico o trayectoria profesional.`;
        }
        if (q.includes('quien eres') || q.includes('que eres') || q.includes('sentinel')) {
            return `${log} Soy una interfaz de consulta heurística diseñada para navegar por el ecosistema digital de ${userName}. No soy una IA generativa completa, sino un nodo de acceso rápido a sus registros profesionales.`;
        }
        if (q.includes('quien es') || q.includes('sobre') || q.includes('presenta') || q.includes('angel')) {
            return `${sec} REGISTRO_SUJETO: ${userName}. Rol: ${info.role}. Ubicación: ${info.location.label}. Estado: Activo en sector IT. Misión: "${info.aboutShort}".`;
        }

        // 2. EXPERIENCE DEEP-DIVES (SOTEC, MALTHUS, ORIGINPATH)
        if (q.includes('airbus') || q.includes('t-systems') || q.includes('aeroespacial') || q.includes('malthus')) {
            return `${link} ACCESO_A_CONTRATOS_CRÍTICOS: Durante su estancia en Malthus Darwin, Angel trabajó para Airbus y T-Systems. Su enfoque fue la ingeniería de software de alta fiabilidad, migraciones de sistemas críticos y despliegue de protocolos de seguridad en entornos distribuidos. Un despliegue de precisión técnica.`;
        }
        if (q.includes('comillas') || q.includes('universidad') || q.includes('matricula') || q.includes('sotec')) {
            return `${link} NODO_ACADÉMICO_SOTEC: Angel está liderando el desarrollo de la plataforma de matriculación para la Universidad Pontificia de Comillas. El desafío: optimizar flujos transaccionales masivos y garantizar alta disponibilidad durante picos críticos de carga escolar.`;
        }
        if (q.includes('originpath') || q.includes('microservicios') || q.includes('arquitectura limpia')) {
            return `${link} ORIGINPATH_LOGS: Aquí se forjaron los cimientos de su enfoque en Arquitectura Limpia. Desarrolló microservicios escalables para soluciones Enterprise a medida, priorizando la mantenibilidad y desacoplamiento del código.`;
        }
        if (q.includes('trabaj') || q.includes('experiencia') || q.includes('empresa') || q.includes('donde')) {
            const current = portfolioData.experience.find(e => e.period.toLowerCase().includes('actualidad')) || portfolioData.experience[portfolioData.experience.length - 1];
            return `${log} TRAYECTORIA_DETECTADA: Actualmente operando en ${current.company} como ${current.role}. Registro histórico incluye sectores Aeroespacial, Académico y Enterprise. Angel es un arquitecto de soluciones de espectro completo.`;
        }

        // 3. TECHNICAL STACK & SKILLS
        if (q.includes('dotnet') || q.includes('c#') || q.includes('csharp') || q.includes('.net')) {
            return `${log} STACK_BACKEND: Experto en C# y .NET Core. Domina Entity Framework, arquitecturas orientadas a servicios (SOA) y el desarrollo de APIs robustas bajo estándares industriales.`;
        }
        if (q.includes('react') || q.includes('frontend') || q.includes('typescript') || q.includes('angular')) {
            return `${log} STACK_FRONTEND: Perfil híbrido. Domina React para interfaces dinámicas (como esta consola) y tiene experiencia sólida en Angular para aplicaciones corporativas de gran escala. TypeScript es su lengua materna en el cliente.`;
        }
        if (q.includes('java') || q.includes('python')) {
            return `${log} NODOS_SECUNDARIOS: Angel posee competencias en Java y Python, utilizándolos principalmente para integraciones específicas, scripts de automatización e inteligencia de datos.`;
        }
        if (q.includes('skill') || q.includes('tecnolog') || q.includes('sabes') || q.includes('stack') || q.includes('herramientas')) {
            return `${log} CARGANDO_MATRIZ_HABILIDADES: ${info.skills.join(' • ')}. Especial mención a su dominio de la Arquitectura Limpia (Clean Architecture) y su reciente integración de 'Vibe Coding' e IA en procesos de desarrollo ágil.`;
        }

        // 4. PROJECTS SPECIFIC
        if (q.includes('petfind')) {
            return `${log} PROYECTO_PETFIND: Un nodo de interacción social para mascotas. Stack: Node.js, C#, PostgreSQL. Enfocado en la usabilidad y la creación de comunidades dinámicas.`;
        }
        if (q.includes('terminal') || q.includes('futbol') || q.includes('teletexto')) {
            return `${log} PROYECTO_TERMINAL_RESULTS: Nostalgia pura. Una UI retro estilo teletexto para datos deportivos reales. Desarrollado con C# y WPF bajo patrón MVVM. Un ejemplo de estética vs funcionalidad.`;
        }
        if (q.includes('esta web') || q.includes('portfolio') || q.includes('codigo fuente')) {
            return `${log} PORTFOLIO_V4.9: Esta interfaz es una "Tactical Shell" construida con React y Vanilla CSS. Diseño enfocado en el rendimiento y la privacidad total de datos (Zero-Hardcode). ¿Quieres ver el código? Teclea 'GitHub'.`;
        }

        // 5. CONTACT & CV
        if (q.includes('contacto') || q.includes('email') || q.includes('correo') || q.includes('escribir') || q.includes('whatsapp') || q.includes('telefono')) {
            return `${sec} PROTOCOLO_DE_CONTACTO: Canal directo abierto vía WhatsApp o Formulario de Contacto en la sección Master Hub. También disponible vía Email para propuestas formales. ¿Procedo a cifrar mensaje?`;
        }
        if (q.includes('pdf') || q.includes('cv') || q.includes('descargar') || q.includes('curriculum')) {
            return `${link} ACCESO_A_DOCUMENTACIÓN: El Curriculum Vitae táctico está disponible para generación instantánea en la sección 'Formación'. Puedes elegir entre español o inglés. Es el dossier más completo de Angel.`;
        }

        // 6. EASTER EGGS & FUN
        if (q.includes('matrix') || q.includes('pastilla') || q.includes('neo')) {
            return `${warn} ERROR_SISTEMA: No hay cuchara. Has elegido la pastilla azul por defecto al navegar por esta web, pero te ofrezco la verdad del código limpio.`;
        }
        if (q.includes('cafe') || q.includes('coffee') || q.includes('beber')) {
            return `${log} ANALIZANDO_COMBUSTIBLE: El sistema detecta que Angel consume café de alta intensidad para procesar código a medianoche. Es el hidratante oficial de este Portfolio.`;
        }
        if (q.includes('quien te ha creado') || q.includes('antigravity') || q.includes('creador')) {
            return `${sec} ORIGEN_SENTINEL: Fui concebido por el ente Antigravity en colaboración directa con Angel Torija. Somos una alianza de IA y arquitectura humana.`;
        }
        if (q.includes('linkedin') || q.includes('github') || q.includes('redes')) {
            return `${log} MAPA_SOCIAL: Localiza sus nodos en GitHub para código fuente y en LinkedIn para validación profesional. Los enlaces están activos en el panel de contacto.`;
        }
        if (q.includes('gracias') || q.includes('thanks') || q.includes('adios') || q.includes('chao')) {
            return `${log} Sentinel_v1.0 pasando a estado STANDBY. Siempre a tu disposición para auditar datos.`;
        }

        return `${warn} DATOS_INSUFICIENTES: No he encontrado una coincidencia de alto nivel para "${query}". Intenta consultar sobre 'Airbus', '.NET', 'Proyectos' o 'Contacto'.`;
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
