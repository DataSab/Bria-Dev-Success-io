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
      paddingTop: '100px', 
      paddingBottom: '20px',
      paddingLeft: '15px',
      paddingRight: '15px'
    }}>
      <ParticlesBackground />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center justify-content-center">
          {/* Colonne Texte */}
          <div className="col-lg-6 text-center mb-3 mb-lg-0">
            <span className="subheading" style={{ 
              color: '#ffbd39', 
              fontSize: 'clamp(0.8rem, 3.5vw, 1.2rem)', 
              fontWeight: '800', 
              letterSpacing: '2px', 
              display: 'block', 
              marginBottom: '0.5rem',
              textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
              textAlign: 'center'
            }}>{t('hero.subtitle')}</span>

            <h1 className="mb-2" style={{
              color: '#fff',
              fontSize: 'clamp(1.2rem, 6vw, 2.8rem)',
              fontWeight: '900',
              textShadow: '0 0 20px rgba(0,0,0,0.8)',
              lineHeight: '1.1',
              textAlign: 'center'
            }}>
              {text}
            </h1>

            <blockquote style={{
              fontSize: 'clamp(0.7rem, 3vw, 0.9rem)',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '1rem',
              lineHeight: '1.3',
              borderLeft: 'none',
              padding: '0',
              textAlign: 'center'
            }}>
              {t('hero.quote')}
            </blockquote>

            <p className="lead text-white mb-3" style={{
              fontSize: 'clamp(0.8rem, 3.5vw, 1rem)',
              lineHeight: '1.4',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 1rem auto',
              textAlign: 'center'
            }}>
              {t('hero.welcome')}
            </p>

            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '0.6rem', 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#about-section" className="btn btn-primary" style={{
                borderRadius: '50px',
                fontWeight: '700',
                padding: '10px 20px',
                fontSize: '0.75rem',
                background: '#fff',
                color: '#000',
                border: '2px solid #fff',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '150px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{t('hero.btn.about')}</a>
              
              <a href="#skills-section" className="btn btn-outline-white" style={{
                borderRadius: '50px',
                fontWeight: '700',
                padding: '10px 20px',
                fontSize: '0.75rem',
                background: '#ffbd39',
                color: '#000',
                border: '2px solid #ffbd39',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '150px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{t('hero.btn.roadmaps')}</a>
            </div>
          </div>

          {/* Colonne Vidéo */}
          <div className="col-lg-6 text-center">
            <div className="hero-video-player" style={{
              maxWidth: '100%',
              width: '100%',
              margin: '0 auto',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
              border: '2px solid #ffbd39',
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
                  display: 'block'
                }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
