import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import TechStack from './components/TechStack';
import CareerPaths from './components/CareerPaths';
import Roadmaps from './components/Roadmaps';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import './components/components.css';
import './styles/responsive.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <TechStack />
        <CareerPaths />
        <Roadmaps />
        <Projects />
        <Contact />

        <footer className="ftco-footer ftco-section" style={{ 
          background: '#1a1a1a', 
          padding: '40px 0', 
          color: '#fff',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="container text-center">
            <p className="mb-0" style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '1px'
            }}>
              © {new Date().getFullYear()} BRIA DEV SUCCESS - Tous droits réservés.
            </p>
          </div>
        </footer>
        
      </div>
    </LanguageProvider>
  );
}

export default App;