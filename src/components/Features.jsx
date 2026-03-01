import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ToolsDetail from './features/ToolsDetail';
import PracticeDetail from './features/PracticeDetail';
import OrientationDetail from './features/OrientationDetail';

const FeatureCard = ({ feat, idx }) => {
  const [revealRef, revealStyle] = useScrollReveal({ delay: idx * 0.1 });
  return (
    <div 
      ref={revealRef}
      style={{
        ...revealStyle,
        height: '100%'
      }}
      className="col-md-4 col-sm-6 mb-4"
    >
      <div 
        onClick={feat.onClick}
        style={{
          background: '#f8f9fa',
          padding: window.innerWidth < 768 ? '20px' : '30px',
          borderRadius: '20px',
          borderBottom: '5px solid #ffbd39',
          height: '100%',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 189, 57, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.background = '#f8f9fa';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        }}
      >
        <div style={{ fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', marginBottom: '10px' }}>{feat.icon}</div>
        <h3 style={{ 
          color: '#000', 
          fontWeight: '800', 
          fontSize: window.innerWidth < 768 ? '1.1rem' : '1.2rem',
          marginBottom: '8px'
        }}>
          {feat.title}
        </h3>
        <p style={{ 
          color: '#666', 
          fontSize: window.innerWidth < 768 ? '0.85rem' : '0.95rem',
          lineHeight: '1.5',
          margin: 0
        }}>
          {feat.desc}
        </p>
        <div style={{ 
          marginTop: '15px', 
          color: '#ffbd39', 
          fontSize: '0.8rem', 
          fontWeight: '700',
          textTransform: 'uppercase'
        }}>
          En savoir plus +
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { 
      id: 'tools',
      title: t('features.tools.title'), 
      desc: t('features.tools.desc'), 
      component: <ToolsDetail />,
      icon: '🛠️' 
    },
    { 
      id: 'practice',
      title: t('features.practice.title'), 
      desc: t('features.practice.desc'), 
      component: <PracticeDetail />,
      icon: '💻' 
    },
    { 
      id: 'orientation',
      title: t('features.orientation.title'), 
      desc: t('features.orientation.desc'), 
      component: <OrientationDetail />,
      icon: '🧭' 
    }
  ];

  return (
    <section id="features-section" style={{
      background: '#ffffff',
      padding: window.innerWidth < 768 ? '40px 15px 10px' : '60px 0 20px',
      position: 'relative',
      zIndex: 5
    }}>
      <div className="container">
        <div className="row justify-content-center">
          {features.map((feat, idx) => (
            <FeatureCard key={idx} feat={{...feat, onClick: () => setActiveFeature(feat)}} idx={idx} />
          ))}
        </div>
      </div>

      {/* Modal / Fiche Explicative */}
      {activeFeature && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '20px',
          backdropFilter: 'blur(5px)'
        }} onClick={() => setActiveFeature(null)}>
          <div style={{
            background: '#fff',
            padding: window.innerWidth < 768 ? '30px 20px' : '40px',
            borderRadius: '25px',
            maxWidth: '600px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            animation: 'fadeInUp 0.4s ease-out'
          }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveFeature(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#ccc'
              }}
            >✕</button>
            
            <div style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>{activeFeature.icon}</div>
            <h3 style={{ 
              color: '#000', 
              fontWeight: '900', 
              fontSize: '1.8rem', 
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              {activeFeature.title}
            </h3>
            
            <div style={{ marginBottom: '30px' }}>
              {activeFeature.component}
            </div>

            <div style={{ textAlign: 'center' }}>
              <button 
                onClick={() => setActiveFeature(null)}
                style={{
                  background: '#ffbd39',
                  color: '#000',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '50px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  boxShadow: '0 5px 15px rgba(255, 189, 57, 0.3)'
                }}
              >
                {t('features.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Features;
