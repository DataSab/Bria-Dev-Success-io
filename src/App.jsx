import React from 'react';
import { LanguageProvider } from './context/LanguageContext';

// Layout & UI Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import TechStack from './components/TechStack';
import CareerPaths from './components/CareerPaths';
import Roadmaps from './components/Roadmaps';
import Events from './components/Events';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Styles
import './index.css';
import './components/components.css';
import './styles/responsive.css'; 

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        {/* Navigation fixée en haut */}
        <Navbar />

        {/* Contenu principal encapsulé */}
        <main>
          <Hero />
          <Features />
          <About />
          <TechStack />
          <CareerPaths />
          <Roadmaps />
          <Events />
          <Projects />
          <Contact />
        </main>

        {/* Pied de page */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;