import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { title: t('features.tools.title'), desc: t('features.tools.desc'), icon: '🛠️' },
    { title: t('features.practice.title'), desc: t('features.practice.desc'), icon: '💻' },
    { title: t('features.orientation.title'), desc: t('features.orientation.desc'), icon: '🧭' }
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
            <div key={idx} className="col-md-4 col-sm-6 mb-4">
              <div style={{
                background: '#f8f9fa',
                padding: window.innerWidth < 768 ? '20px' : '30px',
                borderRadius: '20px',
                borderBottom: '5px solid #ffbd39',
                height: '100%',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
