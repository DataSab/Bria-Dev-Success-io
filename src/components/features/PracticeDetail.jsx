import React from 'react';

const PracticeDetail = () => {
  const platforms = [
    { name: 'GitHub', type: 'Portfolio', desc: 'Hébergez vos projets et montrez votre code au monde.', link: 'https://github.com/' },
    { name: 'TryHackMe', type: 'Cybersécurité', desc: 'Apprenez la sécurité par la pratique ludique.', link: 'https://tryhackme.com/' },
    { name: 'Codewars', type: 'Algorithmique', desc: 'Entraînez votre logique de programmation.', link: 'https://www.codewars.com/' },
    { name: 'Frontend Mentor', type: 'Réalisation', desc: 'Améliorez vos compétences en HTML/CSS/JS avec des défis réels.', link: 'https://www.frontendmentor.io/' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        La théorie ne vaut rien sans la pratique. Voici les meilleures plateformes pour appliquer vos connaissances :
      </p>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {platforms.map((p, i) => (
          <li key={i} style={{ marginBottom: '15px' }}>
            <a 
              href={p.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                textDecoration: 'none',
                padding: '10px',
                borderRadius: '10px',
                transition: 'background 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = '#f8f9fa'}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
            >
              <span style={{ 
                background: '#FFA500', 
                color: '#000', 
                padding: '2px 8px', 
                borderRadius: '5px', 
                fontSize: '0.75rem', 
                fontWeight: '900',
                marginRight: '10px',
                marginTop: '4px',
                whiteSpace: 'nowrap'
              }}>{p.type}</span>
              <div>
                <strong style={{ color: '#000' }}>{p.name} ↗</strong><br/>
                <span style={{ fontSize: '0.9rem', color: '#666' }}>{p.desc}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PracticeDetail;
