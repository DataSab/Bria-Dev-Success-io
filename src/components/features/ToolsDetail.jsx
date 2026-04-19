import React from 'react';

const ToolsDetail = () => {
  const tools = [
    { name: 'VS Code', desc: `L'éditeur de code incontournable.`, link: 'https://code.visualstudio.com/' },
    { name: 'Git', desc: `Pour versionner et sauvegarder votre travail.`, link: 'https://git-scm.com/' },
    { name: 'Terminal', desc: `Apprenez les commandes de base (cd, ls, mkdir).`, link: 'https://www.codecademy.com/articles/command-line-commands' },
    { name: 'Navigateur', desc: `Maîtrisez l'inspecteur d'éléments (F12).`, link: 'https://developer.mozilla.org/fr/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools' }
  ];

  return (
    <div style={{ textAlign: 'left' }}>
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#444' }}>
        Pour bien démarrer, ne vous éparpillez pas. Voici le socle technique indispensable à tout débutant en informatique :
      </p>
      <div style={{ display: 'grid', gap: '15px' }}>
        {tools.map((tool, i) => (
          <a 
            key={i} 
            href={tool.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none', display: 'block' }}
          >
            <div style={{
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '12px',
              borderLeft: '4px solid #FFA500',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#fff';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateX(5px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f8f9fa';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
            >
              <h4 style={{ margin: '0 0 5px 0', fontWeight: '800', color: '#000', display: 'flex', justifyContent: 'space-between' }}>
                {tool.name} <span>↗</span>
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{tool.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ToolsDetail;
