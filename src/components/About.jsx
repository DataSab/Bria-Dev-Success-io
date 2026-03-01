import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section
      className="section-modern"
      id="about-section"
      style={{
        background: '#ffffff',
        padding: '40px 0',
        scrollMarginTop: '80px'
      }}
    >
      <div className="container">
        {/* Titre de la section */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-12 text-center">
            <h2 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#000',
              marginBottom: '0.8rem'
            }}>
              {t('about.title')}
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#ffbd39', margin: '0 auto' }}></div>
          </div>
        </div>

        <div className="row align-items-start justify-content-center">
          <div className="col-lg-5 text-center mb-5 mb-lg-0">
            {/* Logo officiel - Compact */}
            <div className="profile-img-container" style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src="images/logo-briadev.png"
                alt="BRIA DEV SUCCESS Logo"
                className="img-fluid shadow-lg"
                style={{
                  maxWidth: '280px',
                  height: 'auto',
                  border: '3px solid #ffbd39',
                  padding: '15px',
                  background: '#fff',
                  borderRadius: '20px'
                }}
              />
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-text-content" style={{ paddingLeft: '20px' }}>
              <p className="lead font-weight-bold text-dark mb-4" style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
                {t('about.intro')}
              </p>
              
              <p className="text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                {t('about.specialization')}
              </p>

              {/* Objectifs - Liste à puces moderne */}
              <div style={{
                background: '#f8f9fa',
                padding: '25px',
                borderRadius: '15px',
                borderLeft: '5px solid #ffbd39'
              }}>
                <h4 style={{ fontWeight: '800', marginBottom: '15px', fontSize: '1.1rem' }}>{t('about.goal.title')}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[1, 2, 3].map((num) => (
                    <li key={num} style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '10px',
                      fontSize: '0.95rem',
                      color: '#444'
                    }}>
                      <span style={{ color: '#ffbd39', marginRight: '10px', fontWeight: '900' }}>✓</span>
                      {t(`about.goal.${num}`)}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 font-weight-bold text-center text-lg-left" style={{ color: '#000', fontSize: '1.1rem' }}>
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

