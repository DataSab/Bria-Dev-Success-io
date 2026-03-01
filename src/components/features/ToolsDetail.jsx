import React from 'react';

const ToolsDetail = () => {
  const tools = [
    { name: 'VS Code', desc: `L'éditeur de code incontournable.`, link: 'https://code.visualstudio.com/' },
    { name: 'Git', desc: `Pour versionner et sauvegarder votre travail.`, link: 'https://git-scm.com/' },
    { name: 'Terminal', desc: `Apprenez les commandes de base (cd, ls, mkdir).`, link: '#' },
    { name: 'Navigateur', desc: `Maîtrisez l'inspecteur d'éléments (F12).`, link: '#' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        Pour bien démarrer, ne vous éparpillez pas. Voici le socle technique indispensable à tout débutant en informatique :
      </p>
      <div style={{ display: 'grid', gap: '15px' }}>
        {tools.map((tool, i) => (
          <div key={i} style={{
            padding: '15px',
            background: '#f8f9fa',
            borderRadius: '12px',
            borderLeft: '4px solid #ffbd39'
          }}>
            <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', color: '#000' }}>{tool.name}</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{tool.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsDetail;
