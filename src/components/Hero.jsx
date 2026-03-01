import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
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

  return (
    <section id="home-section" className="hero-wrap" style={{
      background: 'url("images/photo-style-cartoon-3x.jpeg") no-repeat center center fixed',
      backgroundSize: 'cover',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      paddingTop: '20px',
      paddingBottom: '8vh',
      position: 'relative'
    }}>
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2, marginBottom: '5vh' }}>
        <div className="row slider-text align-items-center justify-content-center">
          <div className="col-md-10 text-center">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '1rem' }}>
              <span className="subheading" style={{ color: '#ffbd39', fontSize: '1.8rem', fontWeight: '800', letterSpacing: '5px', textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>{t('hero.subtitle')}</span>
              <img 
                src="images/logo-briadev.png" 
                alt="BRIA DEV SUCCESS Logo" 
                style={{ 
                  maxHeight: '60px', 
                  filter: 'drop-shadow(0 4px 15px rgba(255,189,57,0.4))' 
                }} 
              />
            </div>
            <h1 className="mb-4 mt-3 mx-auto" style={{ 
              color: '#fff', 
              fontSize: '4.5rem', 
              fontWeight: '900', 
              textShadow: '0 0 40px rgba(0,0,0,1), 0 0 20px rgba(255,189,57,0.3)',
              maxWidth: '1000px',
              lineHeight: '1.1'
            }}>
              {text}
            </h1>
            <p className="lead text-white font-weight-bold mb-5 mx-auto" style={{ 
              fontSize: '1.6rem', 
              textShadow: '2px 2px 10px rgba(0,0,0,0.9)', 
              maxWidth: '850px', 
              margin: '0 auto 4rem', 
              color: '#fff',
              lineHeight: '1.5'
            }}>
              {t('hero.description')}
            </p>
            <div className="hero-buttons" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#about-section" className="btn btn-primary py-4 px-5 shadow-lg" style={{
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.9rem',
                background: '#fff',
                color: '#000',
                border: '2px solid #fff',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '220px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>{t('hero.btn.about')}</a>
              <a href="#skills-section" className="btn btn-outline-white py-4 px-5 shadow-lg" style={{
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '0.9rem',
                background: '#ffbd39',
                color: '#000',
                border: '2px solid #ffbd39',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                minWidth: '220px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
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