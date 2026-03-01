import React from 'react';

const PracticeDetail = () => {
  const platforms = [
    { name: 'GitHub', type: 'Portfolio', desc: 'Hébergez vos projets et montrez votre code au monde.' },
    { name: 'TryHackMe', type: 'Cybersécurité', desc: 'Apprenez la sécurité par la pratique ludique.' },
    { name: 'Codewars', type: 'Algorithmique', desc: 'Entraînez votre logique de programmation.' },
    { name: 'Projects', type: 'Réalisation', desc: 'Créez des clones de sites connus pour apprendre.' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        La théorie ne vaut rien sans la pratique. Voici comment vous pouvez appliquer concrètement vos connaissances :
      </p>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {platforms.map((p, i) => (
          <li key={i} style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
            <span style={{ 
              background: '#ffbd39', 
              color: '#000', 
              padding: '2px 8px', 
              borderRadius: '5px', 
              fontSize: '0.75rem', 
              fontWeight: '900',
              marginRight: '10px',
              marginTop: '4px'
            }}>{p.type}</span>
            <div>
              <strong style={{ color: '#000' }}>{p.name}</strong>: <span style={{ fontSize: '0.9rem', color: '#666' }}>{p.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeDetail;
