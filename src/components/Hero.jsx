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
      padding: '120px 20px 60px'
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
            maxHeight: '50px',
            width: 'auto',
            filter: 'drop-shadow(0 4px 15px rgba(255,189,57,0.4))'
          }}
          className="hero-logo"
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row slider-text align-items-center justify-content-center">
          <div className="col-md-11 text-center">
            <h1 className="mb-2" style={{
              color: '#fff',
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontWeight: '900',
              textShadow: '0 0 20px rgba(0,0,0,0.8)',
              maxWidth: '1000px',
              margin: '0 auto',
              lineHeight: '1.2'
            }}>
              {t('hero.title')}
            </h1>

            <span className="subheading" style={{ 
              color: '#ffbd39', 
              fontSize: 'clamp(0.9rem, 3vw, 1.4rem)', 
              fontWeight: '800', 
              letterSpacing: '2px', 
              display: 'block', 
              marginBottom: '1rem' 
            }}>{t('hero.subtitle')}</span>

            <blockquote style={{
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '700px',
              margin: '0 auto 1rem',
              lineHeight: '1.4',
              borderLeft: 'none',
              padding: '0 20px'
            }}>
              {t('hero.quote')}
            </blockquote>

            <p className="lead text-white mb-4 mx-auto" style={{
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              maxWidth: '850px',
              margin: '0 auto 2rem',
              lineHeight: '1.5',
              opacity: 0.9
            }}>
              {t('hero.welcome')}
            </p>

            {/* Section "Ce que vous trouverez ici" - Compacte */}
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              {[
                { title: t('features.tools.title'), desc: t('features.tools.desc'), icon: '🛠️' },
                { title: t('features.practice.title'), desc: t('features.practice.desc'), icon: '💻' },
                { title: t('features.orientation.title'), desc: t('features.orientation.desc'), icon: '🧭' }
              ].map((feat, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '12px',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 189, 57, 0.2)',
                  width: '180px',
                  backdropFilter: 'blur(5px)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{feat.icon}</div>
                  <div style={{ color: '#ffbd39', fontWeight: '800', fontSize: '0.85rem' }}>{feat.title}</div>
                  <div style={{ color: '#fff', fontSize: '0.7rem', opacity: 0.8 }}>{feat.desc}</div>
                </div>
              ))}
            </div>

            {/* Lecteur Vidéo Interactif */}
            <div className="hero-video-player" style={{
              maxWidth: '700px',
              width: '100%',
              margin: '0 auto 1.5rem',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              border: '3px solid #ffbd39',
              background: '#000',
              position: 'relative',
              zIndex: 100,
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
                  maxHeight: '45vh'
                }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginTop: '0.5rem'
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