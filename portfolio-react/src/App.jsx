import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import DynamicNav from './components/DynamicNav';
import About from './components/About';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import CyberSentinel from './components/CyberSentinel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main>
        <DynamicNav />
        <About />
        <Experience />
        <Credentials />
        <Projects />
        <Contact />
      </main>
      <CyberSentinel />

      <footer className="py-4 text-center mono smaller text-secondary" style={{ background: '#050a15', borderTop: '1px solid rgba(0, 242, 255, 0.05)' }}>
        <div className="container">
          &copy; {new Date().getFullYear()} Angel Torija | Built with <span className="accent-text">React & Passion</span>
        </div>
      </footer>
    </div>
  );
}

export default App;