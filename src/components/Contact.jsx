import React from 'react';

const Contact = () => {
  return (
    <section id="contact-section" style={{
      position: 'relative',
      padding: '140px 0 140px',
      scrollMarginTop: '100px',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      {/* Transition gradient */}
      <div style={{
        content: '',
        position: 'absolute',
        top: '-80px',
        left: 0,
        width: '100%',
        height: '80px',
        background: 'linear-gradient(to bottom, rgba(248, 250, 252, 0.8), transparent)',
        opacity: '0.5'
      }}></div>
      
      <div className="contact-inner" style={{
        maxWidth: '700px',
        margin: '0 auto',
        textAlign: 'center',
        background: 'transparent'
      }}>
        <h2 style={{ 
          marginBottom: '40px',
          fontWeight: '800', 
          color: '#2c3e50',
          fontSize: '2.5rem'
        }}>
          Contactez-moi
        </h2>
        
        {/* Main content */}
        <div className="icon" style={{ 
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #ffbd39 0%, #ffd662 100%)',
          borderRadius: '50%',
          fontSize: '30px', 
          color: '#fff',
          boxShadow: '0 8px 25px rgba(255, 189, 57, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 40px auto'
        }}>
          <span className="icon-paper-plane"></span>
        </div>
        
        <div className="d-flex justify-content-center">
          <a 
            href="mailto:vitoranda@outlook.com" 
            className="btn shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #ffbd39 0%, #ffd662 100%)',
              border: 'none',
              borderRadius: '25px', 
              fontWeight: '700', 
              fontSize: '1.1rem',
              color: '#1e293b',
              padding: '16px 35px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              minWidth: '250px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 25px rgba(255, 189, 57, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 189, 57, 0.3)';
            }}
          >
            <span className="me-2" style={{ fontSize: '1.3rem' }}>✉️</span>
            Ecrivez-moi ici
          </a>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '2px',
        height: '60px',
        background: 'linear-gradient(to bottom, #ffbd39, transparent)',
        opacity: '0.3'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '2px',
        height: '40px',
        background: 'linear-gradient(to bottom, #17a2b8, transparent)',
        opacity: '0.3'
      }}></div>
    </section>
  );
};

export default Contact;