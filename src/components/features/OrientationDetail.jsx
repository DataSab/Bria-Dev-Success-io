import React from 'react';

const OrientationDetail = () => {
  const sectors = [
    { title: 'Web & Mobile', focus: 'Visuel et Interaction', icons: '📱💻' },
    { title: 'Cybersécurité', focus: 'Protection et Analyse', icons: '🛡️🕵️' },
    { title: 'Data / IA', focus: 'Statistiques et Algorithmes', icons: '📊🤖' },
    { title: 'Cloud / DevOps', focus: 'Infrastructure et Automatisation', icons: '☁️⚙️' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        Ne cherchez pas à tout apprendre d'un coup. Identifiez ce qui vous anime le plus parmi ces grands domaines :
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        {sectors.map((s, i) => (
          <div key={i} style={{
            padding: '15px',
            background: '#f1f3f5',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{s.icons}</div>
            <div style={{ fontWeight: '800', color: '#000', fontSize: '0.9rem' }}>{s.title}</div>
            <div style={{ fontSize: '0.75rem', color: '#666' }}>{s.focus}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '20px', fontSize: '0.9rem', fontStyle: 'italic', color: '#888' }}>
        Astuce : Consultez la section "Roadmaps" plus bas pour voir le chemin détaillé de chaque métier.
      </p>
    </div>
  );
};

export default OrientationDetail;
