import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const { t } = useLanguage();
  const [titleRef, titleStyle] = useScrollReveal();
  const [imgRef, imgStyle] = useScrollReveal({ delay: 0.2, distance: '50px' });
  const [textRef, textStyle] = useScrollReveal({ delay: 0.4 });

  // Gestion dynamique de la largeur (Optionnel si pas de CSS externe)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="section-modern"
      id="about-section"
      style={{
        background: '#ffffff',
        padding: isMobile ? '30px 15px' : '40px 0',
        scrollMarginTop: '80px'
      }}
    >
      <div className="container">
        {/* Titre */}
        <div ref={titleRef} style={titleStyle} className="row justify-content-center mb-4">
          <div className="col-md-12 text-center">
            <h2 style={{
              fontSize: 'clamp(1.6rem, 6vw, 2.5rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#000',
              marginBottom: '0.8rem'
            }}>
              {t('about.title')}
            </h2>
            <div style={{ width: '50px', height: '4px', background: '#FFEE8C', margin: '0 auto' }}></div>
          </div>
        </div>

        <div className="row align-items-start justify-content-center">
          <div ref={imgRef} style={imgStyle} className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="profile-img-container" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="images/logo-briadev.png"
                alt="BRIA DEV SUCCESS Logo"
                className="img-fluid shadow-lg"
                style={{
                  maxWidth: isMobile ? '200px' : '280px', // Utilise l'état isMobile
                  height: 'auto',
                  border: '3px solid #FFEE8C',
                  padding: '12px',
                  background: '#fff',
                  borderRadius: '20px'
                }}
              />
            </div>
          </div>

          <div ref={textRef} style={textStyle} className="col-lg-7">
            <div className="about-text-content" style={{ 
              paddingLeft: isMobile ? '0' : '20px',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              <p className="lead font-weight-bold text-dark mb-3" style={{ 
                fontSize: 'clamp(1rem, 4vw, 1.2rem)', 
                lineHeight: '1.5' 
              }}>
                {t('about.intro')}
              </p>
              
              <p className="text-muted mb-4" style={{ 
                fontSize: 'clamp(0.9rem, 3.5vw, 1.05rem)', 
                lineHeight: '1.6' 
              }}>
                {t('about.specialization')}
              </p>

              <div style={{
                background: '#f8f9fa',
                padding: '20px',
                borderRadius: '15px',
                borderLeft: '5px solid #FFEE8C',
                textAlign: 'left'
              }}>
                <h4 style={{ fontWeight: '800', marginBottom: '12px', fontSize: '1rem', color: '#000' }}>
                    {t('about.goal.title')}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[1, 2, 3].map((num) => (
                    <li key={num} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '8px',
                      fontSize: '0.9rem',
                      color: '#444'
                    }}>
                      <span aria-hidden="true" style={{ color: '#FFEE8C', marginRight: '10px', fontWeight: '900', marginTop: '2px' }}>✓</span>
                      {t(`about.goal.${num}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 font-weight-bold" style={{ color: '#000', fontSize: '1.05rem' }}>
                {t('about.footer')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
