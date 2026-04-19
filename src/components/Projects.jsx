import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('Tous');

  const articles = [
    {
      date: '20 Février 2026',
      title: 'IL N\'EST JAMAIS TROP TARD POUR TOUT RECOMMENCER',
      excerpt: 'Se reconvertir dans l\'informatique après 35 ans : témoignage et conseils pratiques pour réussir sa transition professionnelle.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      link: 'https://medium.com/@BriaDev/il-nest-jamais-trop-tard-pour-tout-recommencer-se-reconvertir-dans-l-informatique-apr%C3%A8s-35-ans-42c34b4cf7e7',
      isExternal: true,
      category: 'Carrière'
    },
    {
      date: '15 Février 2026',
      title: 'LES TENDANCES DU DÉVELOPPEMENT WEB EN 2026',
      excerpt: 'Explorez les nouvelles technologies et frameworks qui façonnent l\'avenir du développement web moderne.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      category: 'Web'
    },
    {
      date: '10 Février 2026',
      title: 'GUIDE COMPLET POUR APPRENDRE PYTHON',
      excerpt: 'De débutant à expert : tout ce que vous devez savoir pour maîtriser Python et ses applications.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop',
      category: 'Programmation'
    },
    {
      date: '5 Février 2026',
      title: 'REACT VS VUE : QUEL FRAMEWORK CHOISIR ?',
      excerpt: 'Comparaison détaillée entre React et Vue.js pour vous aider à choisir le meilleur outil pour votre projet.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
      category: 'Web'
    }
  ];

  const categories = ['Tous', 'Web', 'Programmation', 'Carrière'];
  const filteredArticles = filter === 'Tous' ? articles : articles.filter(a => a.category === filter);

  return (
    <section id="projects-section" style={{
      padding: '100px 0',
      scrollMarginTop: '100px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontWeight: '800', color: '#1e293b', fontSize: '2.5rem', marginBottom: '15px' }}>
            BLOG & ARTICLES
          </h2>
          <p style={{ color: '#64748b', fontWeight: '600', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 30px' }}>
            Découvrez mes articles sur le développement web, la programmation et les technologies.
          </p>

          {/* Category Filter - Dynamique ! */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '25px',
                  border: filter === cat ? 'none' : '2px solid #FFA500',
                  background: filter === cat ? '#FFA500' : 'transparent',
                  color: filter === cat ? '#000' : '#1e293b',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {filteredArticles.map((article, index) => (
            <div 
              key={index} 
              style={{ 
                background: '#fff',
                borderRadius: '25px', 
                padding: '25px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                overflow: 'hidden',
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 165, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '20px' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#FFA500' }}>{article.category}</span>
                <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{article.date}</span>
              </div>
              <h3 style={{ fontWeight: '800', fontSize: '1.2rem', color: '#1e293b', marginBottom: '15px', lineHeight: '1.3' }}>
                {article.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
                {article.excerpt}
              </p>
              <a 
                href={article.link || "#"} 
                target={article.isExternal ? "_blank" : "_self"}
                style={{
                  background: '#1e293b',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  padding: '10px 25px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
              >
                Lire l'article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;