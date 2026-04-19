import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CategoryBox = ({ cat, index }) => {
  const [revealRef, revealStyle] = useScrollReveal({ delay: index * 0.1 });
  
  return (
    <div 
      ref={revealRef}
      style={revealStyle}
      className="col-md-6 col-lg-5 mb-4"
    >
      <div className="category-box mx-auto" style={{ 
        background: 'rgba(255,255,255,0.05)', 
        padding: '2.5rem', 
        borderRadius: '25px', 
        border: '1px solid rgba(255,189,57,0.2)',
        height: '100%',
        transition: 'all 0.3s ease'
      }}>
        <h3 className="h5 font-weight-bold mb-4" style={{ color: '#FFEE8C' }}>{cat.title}</h3>
        <div className="d-flex flex-wrap" style={{ gap: '12px' }}>
          {cat.skills.map((skill, i) => (
            <a 
              key={i} 
              href={skill.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <span className="skill-badge" style={{ 
                display: 'inline-block',
                background: 'rgba(255,189,57,0.1)', 
                color: '#fff', 
                padding: '10px 20px', 
                borderRadius: '50px', 
                fontSize: '0.9rem',
                border: '1px solid rgba(255,189,57,0.3)',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#FFEE8C';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,189,57,0.1)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              >
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = [
    { 
      id: 'Web',
      title: '🌐 DÉVELOPPEMENT WEB', 
      skills: [
        { name: 'HTML5', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { name: 'CSS3', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
        { name: 'React', url: 'https://react.dev/' },
        { name: 'Vite', url: 'https://vitejs.dev/' },
        { name: 'Bootstrap', url: 'https://getbootstrap.com/' },
        { name: 'Node.js', url: 'https://nodejs.org/' }
      ]
    },
    { 
      id: 'Data',
      title: '🗄️ BACKEND & BASES DE DONNÉES', 
      skills: [
        { name: 'Python', url: 'https://www.python.org/' },
        { name: 'C', url: 'https://en.cppreference.com/w/c' },
        { name: 'Django', url: 'https://www.djangoproject.com/' },
        { name: 'Flask', url: 'https://flask.palletsprojects.com/' },
        { name: 'MySQL', url: 'https://www.mysql.com/' },
        { name: 'SQLite', url: 'https://www.sqlite.org/' }
      ]
    },
    { 
      id: 'Mobile',
      title: '📱 DÉVELOPPEMENT MOBILE', 
      skills: [
        { name: 'Dart', url: 'https://dart.dev/' },
        { name: 'Flutter', url: 'https://flutter.dev/' },
        { name: 'Firebase', url: 'https://firebase.google.com/' }
      ]
    },
    { 
      id: 'Tools',
      title: '🛠️ OUTILS DE DÉVELOPPEMENT', 
      skills: [
        { name: 'Git', url: 'https://git-scm.com/' },
        { name: 'GitHub', url: 'https://github.com/' },
        { name: 'VS Code', url: 'https://code.visualstudio.com/' },
        { name: 'npm', url: 'https://www.npmjs.com/' },
        { name: 'Postman', url: 'https://www.postman.com/' }
      ]
    }
  ];

  const filteredCategories = activeTab === 'All' ? categories : categories.filter(c => c.id === activeTab);

  return (
    <section className="ftco-section" id="bases-section" style={{
      background: '#111',
      padding: '100px 0',
      color: '#fff',
      scrollMarginTop: '100px'
    }}>
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4" style={{ color: '#FFEE8C', fontWeight: '800', letterSpacing: '2px' }}>TECHNOLOGIES & OUTILS</h2>
            
            {/* dynamic tabs */}
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
              {['All', 'Web', 'Data', 'Mobile', 'Tools'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: activeTab === tab ? '#FFEE8C' : 'transparent',
                    color: activeTab === tab ? '#000' : '#FFEE8C',
                    border: '2px solid #FFEE8C',
                    padding: '8px 20px',
                    borderRadius: '25px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {filteredCategories.map((cat, index) => (
            <CategoryBox key={cat.id} cat={cat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;