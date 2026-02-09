import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecurityGate = ({ children, passcode, label = "RESTRICT_ENCRYPTED_DATA" }) => {
    const [input, setInput] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    const handleUnlock = (e) => {
        e.preventDefault();
        if (input.toUpperCase() === passcode.toUpperCase()) {
            setIsUnlocked(true);
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
            setInput("");
        }
    };

    return (
        <div className="security-gate-container">
            <AnimatePresence mode='wait'>
                {!isUnlocked ? (
                    <motion.div
                        key="locked"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="locked-overlay cyber-card p-4 text-center d-flex flex-column align-items-center justify-content-center"
                        style={{ borderStyle: 'dashed', borderColor: error ? '#ff2a6d' : 'var(--accent-color)' }}
                    >
                        <div className="mono smaller mb-2 text-warning">
                            <span className="accent-text">!</span> {label}
                        </div>

                        <form onSubmit={handleUnlock} className="d-flex flex-column align-items-center w-100">
                            <input
                                type="password"
                                placeholder="_enter_passphrase"
                                className="security-input mono mb-3"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                autoFocus
                            />
                            <button type="submit" className="btn-cyber py-1 px-3 fs-6" style={{ fontSize: '0.7rem' }}>
                                DECRYPT_ACCESS
                            </button>
                        </form>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-danger mono smaller mt-2"
                            >
                                _INVALID_SECURITY_TOKEN
                            </motion.div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        key="unlocked"
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        className="unlocked-content w-100"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SecurityGate;
