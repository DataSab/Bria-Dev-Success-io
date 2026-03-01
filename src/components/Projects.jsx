import React from 'react';

const Projects = () => {
  const articles = [
    {
      date: '20 Février 2026',
      title: 'IL N\'EST JAMAIS TROP TARD POUR TOUT RECOMMENCER',
      excerpt: 'Se reconvertir dans l\'informatique après 35 ans : témoignage et conseils pratiques pour réussir sa transition professionnelle.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      link: 'https://medium.com/@BriaDev/il-nest-jamais-trop-tard-pour-tout-recommencer-se-reconvertir-dans-l-informatique-apr%C3%A8s-35-ans-42c34b4cf7e7',
      isExternal: true
    },
    {
      date: '15 Février 2026',
      title: 'LES TENDANCES DU DÉVELOPPEMENT WEB EN 2026',
      excerpt: 'Explorez les nouvelles technologies et frameworks qui façonnent l\'avenir du développement web moderne.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
    },
    {
      date: '10 Février 2026',
      title: 'GUIDE COMPLET POUR APPRENDRE PYTHON',
      excerpt: 'De débutant à expert : tout ce que vous devez savoir pour maîtriser Python et ses applications.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=600&fit=crop'
    },
    {
      date: '5 Février 2026',
      title: 'REACT VS VUE : QUEL FRAMEWORK CHOISIR ?',
      excerpt: 'Comparaison détaillée entre React et Vue.js pour vous aider à choisir le meilleur outil pour votre projet.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="projects-section" style={{
      padding: '80px 0 100px',
      scrollMarginTop: '100px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '50px' 
        }}>
          <h2 style={{ 
            fontWeight: '800', 
            color: '#1e293b',
            fontSize: '2.5rem',
            marginBottom: '15px'
          }}>
            BLOG & ARTICLES
          </h2>
          <p style={{ 
            color: '#64748b', 
            fontWeight: '600',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez mes articles sur le développement web, la programmation et les technologies.
          </p>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 10px'
        }}>
          {articles.map((article, index) => (
            <div 
              key={index} 
              style={{ 
                background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
                borderRadius: '20px', 
                padding: '25px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                maxWidth: '450px',
                margin: '0 auto',
                width: '100%'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
              }}
            >
              {/* Image */}
              <div style={{ 
                overflow: 'hidden', 
                borderRadius: '12px',
                marginBottom: '20px'
              }}>
                <img 
                  src={article.image} 
                  alt={article.title}
                  style={{ 
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }} 
                />
              </div>

              {/* Date */}
              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ 
                fontWeight: '700',
                fontSize: '1.1rem',
                color: '#1e293b',
                lineHeight: '1.4',
                marginBottom: '12px',
                minHeight: '50px'
              }}>
                {article.title}
              </h3>

              {/* Excerpt */}
              <p style={{ 
                color: '#64748b',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '20px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {article.excerpt}
              </p>

              {/* Button */}
              <a 
                href={article.link || "#"} 
                target={article.isExternal ? "_blank" : "_self"}
                rel={article.isExternal ? "noopener noreferrer" : ""}
                style={{
                  background: 'linear-gradient(135deg, #ffbd39 0%, #ffd662 100%)',
                  color: '#1e293b',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  padding: '8px 20px',
                  borderRadius: '15px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  border: 'none'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(255, 189, 57, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Lire l'article {article.isExternal && "↗"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;