import React from 'react';

const OrientationDetail = () => {
  const sectors = [
    { title: 'Web & Mobile', focus: 'Visuel et Interaction', icons: '📱💻', link: '#skills-section' },
    { title: 'Cybersécurité', focus: 'Protection et Analyse', icons: '🛡️🕵️', link: '#skills-section' },
    { title: 'Data / IA', focus: 'Statistiques et Algorithmes', icons: '📊🤖', link: '#skills-section' },
    { title: 'Cloud / DevOps', focus: 'Infrastructure et Automatisation', icons: '☁️⚙️', link: '#skills-section' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        Ne cherchez pas à tout apprendre d'un coup. Identifiez ce qui vous anime le plus parmi ces grands domaines :
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {sectors.map((s, i) => (
          <a 
            key={i} 
            href={s.link} 
            style={{ textDecoration: 'none' }}
            onClick={(e) => {
              // Si c'est un lien interne, on peut fermer la modal (géré par le parent via event bubbling ou callback)
              // Pour l'instant on laisse le comportement par défaut
            }}
          >
            <div style={{
              padding: '15px',
              background: '#f1f3f5',
              borderRadius: '15px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              border: '2px solid transparent',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.borderColor = '#ffbd39';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f1f3f5';
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{s.icons}</div>
              <div style={{ fontWeight: '800', color: '#000', fontSize: '0.9rem' }}>{s.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#666' }}>{s.focus}</div>
            </div>
          </a>
        ))}
      </div>
      <p style={{ marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic', color: '#888', textAlign: 'center' }}>
        Cliquez sur un domaine pour voir sa Roadmap dédiée.
      </p>
    </div>
  );
};

export default OrientationDetail;
