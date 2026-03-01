import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const videoRef = useRef(null);
  const fullText = t('hero.title');
  
  useEffect(() => {
    setText(''); // Reset text when language changes
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log("Autoplay prevented or video error:", err);
      });
    }
  }, []);

  return (
    <section id="home-section" className="hero-wrap animated-bg" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '100px 20px 60px'
    }}>
      <ParticlesBackground />

      {/* Logo Responsif */}
      <div className="hero-logo-container" style={{
        position: 'absolute',
        top: '80px',
        left: '20px',
        zIndex: 10
      }}>
        <img
          src="/images/logo-briadev.png"
          alt="BRIA DEV SUCCESS Logo"
          style={{
            maxHeight: '60px',
            width: 'auto',
            filter: 'drop-shadow(0 4px 15px rgba(255,189,57,0.4))'
          }}
          className="hero-logo"
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row slider-text align-items-center justify-content-center">
          <div className="col-md-11 text-center">
            <span className="subheading" style={{ 
              color: '#ffbd39', 
              fontSize: 'clamp(1rem, 4vw, 1.8rem)', 
              fontWeight: '800', 
              letterSpacing: '3px', 
              textShadow: '2px 2px 10px rgba(0,0,0,0.8)', 
              display: 'block', 
              marginBottom: '0.2rem' 
            }}>{t('hero.subtitle')}</span>
            
            <h1 className="mb-3 mt-3 mx-auto" style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 8vw, 4.5rem)',
              fontWeight: '900',
              textShadow: '0 0 30px rgba(0,0,0,1)',
              maxWidth: '1000px',
              lineHeight: '1.1',
              wordWrap: 'break-word'
            }}>
              {text}
            </h1>

            <p className="lead text-white font-weight-bold mb-4 mx-auto" style={{
              fontSize: 'clamp(0.9rem, 3vw, 1.4rem)',
              textShadow: '2px 2px 10px rgba(0,0,0,0.9)',
              maxWidth: '800px',
              margin: '0 auto 1.5rem',
              color: '#fff',
              lineHeight: '1.5'
            }}>
              {t('hero.description')}
            </p>

            {/* Lecteur Vidéo Interactif */}
            <div className="hero-video-player" style={{
              maxWidth: '800px',
              width: '100%',
              margin: '0 auto 1.5rem',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              border: '3px solid #ffbd39',
              background: '#000',
              position: 'relative',
              zIndex: 100, /* Priorité MAXIMALE sur le clic */
              cursor: 'pointer'
            }}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                controls
                poster="/images/photo-style-cartoon-3x.jpeg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxHeight: '60vh'
                }}
              >
                <source src="/images/hero-video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginTop: '1rem'
            }}>
              <a href="#about-section" className="btn btn-primary" style={{
                borderRadius: '50px',
                fontWeight: '700',
                padding: '15px 35px',
                fontSize: '0.9rem',
                background: '#fff',
                color: '#000',
                border: '2px solid #fff',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '200px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{t('hero.btn.about')}</a>
              
              <a href="#skills-section" className="btn btn-outline-white" style={{
                borderRadius: '50px',
                fontWeight: '700',
                padding: '15px 35px',
                fontSize: '0.9rem',
                background: '#ffbd39',
                color: '#000',
                border: '2px solid #ffbd39',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '200px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{t('hero.btn.roadmaps')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;