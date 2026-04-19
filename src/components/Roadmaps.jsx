import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const RoadmapCard = ({ item, index }) => {
  const [revealRef, revealStyle] = useScrollReveal({ delay: index * 0.1 });
  return (
    <div 
      ref={revealRef} 
      style={revealStyle} 
      className="col-md-6 col-lg-5 mb-5 d-flex justify-content-center"
    >
      <div className="card-modern shadow-lg border-0 h-100 w-100" style={{ 
        padding: '2.5rem', borderRadius: '30px', background: '#fff', borderLeft: `8px solid ${item.color}`,
        maxWidth: '520px',
        transition: 'transform 0.3s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div className="d-flex align-items-center mb-4">
          <div style={{ 
            background: item.color, color: '#fff', width: '45px', height: '45px', borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', marginRight: '1.2rem',
            boxShadow: `0 4px 10px ${item.color}40`
          }}>
            {item.id}
          </div>
          <h3 className="h5 font-weight-bold mb-0" style={{ fontWeight: '900', fontSize: '1.2rem' }}>{item.title}</h3>
        </div>
        <p className="text-muted mb-4" style={{ fontSize: '1rem', lineHeight: '1.6' }}>{item.description}</p>
        <div className="advice-badge p-3 px-4" style={{ background: '#f8f9fa', borderRadius: '15px', border: '1px dashed #ccc' }}>
           <span className="small font-weight-bold" style={{ color: item.color, fontSize: '0.9rem' }}>{item.advice}</span>
        </div>
      </div>
    </div>
  );
};

const ConseilCard = ({ conseil, index }) => {
  const [revealRef, revealStyle] = useScrollReveal({ delay: index * 0.1 });
  return (
    <div ref={revealRef} style={revealStyle} className="col-lg-2 col-md-5 mb-5 d-flex">
      <div className="conseil-card p-4 shadow-lg w-100" style={{ 
        background: '#fff', 
        borderRadius: '35px', 
        borderBottom: '8px solid #FFA500',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '320px',
        textAlign: 'left'
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-15px)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div className="icon-wrap mb-4" style={{ 
          fontSize: '40px',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #006994 0%, #012a4a 100%)',
          width: '85px',
          height: '85px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 0 20px 0',
          boxShadow: '0 5px 15px rgba(0, 105, 148, 0.4)'
        }}>
          <span className={conseil.icon}></span>
        </div>
        <h4 className="h5 font-weight-bold mb-3" style={{ color: '#000', fontWeight: '900', fontSize: '1.2rem', textAlign: 'left' }}>{conseil.title}</h4>
        <div className="text-muted mb-0" style={{ fontSize: '0.95rem', lineHeight: '1.6', fontWeight: '600', textAlign: 'left' }}>
          {conseil.desc}
        </div>
      </div>
    </div>
  );
};

const Roadmaps = () => {
  const [activeTab, setActiveTab] = useState('dev');
  const [headerRef, headerStyle] = useScrollReveal();

  const roadmapData = {
    dev: [
      { id: 1, title: 'LES FONDAMENTAUX', description: 'HTML5, CSS3, JavaScript (ES6+), Git & GitHub, Logique, SQL.', advice: 'Conseil : Commencez par HTML/CSS', color: '#FFA500' },
      { id: 2, title: 'FRONTEND OU BACKEND', description: 'React/Vue/Angular, Node.js, Python (Django), API REST, Auth.', advice: 'Conseil : Choisissez selon vos préférences visuel vs logique', color: '#4CAF50' },
      { id: 3, title: 'PROJETS PORTFOLIO', description: '3-5 projets GitHub, Site portfolio, App CRUD, Open source.', advice: 'Conseil : Qualité > Quantité', color: '#2196F3' },
      { id: 4, title: 'RECHERCHE D\'EMPLOI', description: 'LinkedIn, Candidatures ciblées, Entretiens techniques, Réseau.', advice: 'Conseil : Les stages sont d\'excellents tremplins', color: '#9C27B0' },
    ],
    cyber: [
      { id: 1, title: 'FONDATIONS & PROTOCOLES', description: 'TCP/IP, HTTP/S, SSL/TLS, modèle OSI', advice: 'Conseil : Apprenez le réseau avant tout', color: '#00ced1' },
      { id: 2, title: 'SÉCURITÉ RÉSEAUX', description: 'Pare-feu, IDS/IPS, VPN, protocoles sécurisés', advice: 'Conseil : Pratiquez sur des labs', color: '#e74c3c' },
      { id: 3, title: 'PENTESTING & AUDIT', description: 'Analyse de vulnérabilités, OWASP Top 10', advice: 'Conseil : Faites des CTF (TryHackMe/HackTheBox)', color: '#3498db' },
      { id: 4, title: 'GESTION DES RISQUES', description: 'Gouvernance, conformité et réponse aux incidents', advice: 'Conseil : Formez-vous aux normes ISO', color: '#9b59b6' },
    ],
    ia: [
      { id: 1, title: 'BASES MATHS & PYTHON', description: 'Algèbre linéaire, statistiques, Python (Pandas, Numpy)', advice: 'Conseil : Soyez à l\'aise avec les données', color: '#f39c12' },
      { id: 2, title: 'MACHINE LEARNING', description: 'Scikit-learn, algorithmes de régression, classification', advice: 'Comprenez l\'algorithme avant le code', color: '#e67e22' },
      { id: 3, title: 'DEEP LEARNING & NLP', description: 'TensorFlow, PyTorch, réseaux de neurones, Transformers', advice: 'Conseil : Explorez les modèles pré-entraînés', color: '#d35400' },
      { id: 4, title: 'IA GÉNÉRATIVE', description: 'LLMs, Prompt Engineering, intégration d\'APIs IA', advice: 'Conseil : Suivez la veille technologique quotidienne', color: '#c0392b' },
    ],
    devops: [
      { id: 1, title: 'LINUX & RÉSEAU', description: 'Administration Linux, Bash scripting, SSH, Networking.', advice: 'Conseil : Soyez à l\'aise avec la ligne de commande', color: '#f59e0b' },
      { id: 2, title: 'CONTAINERISATION', description: 'Docker, Docker Compose, orchestration de base.', advice: 'Conseil : Apprenez à isoler vos applications', color: '#3b82f6' },
      { id: 3, title: 'CI/CD & CLOUD', description: 'GitHub Actions, Jenkins, AWS ou Azure.', advice: 'Conseil : Automatisez tout ce qui est répétitif', color: '#10b981' },
      { id: 4, title: 'INFRASTRUCTURE AS CODE', description: 'Terraform, Ansible, Kubernetes (K8s).', advice: 'Conseil : Gérez vos serveurs comme du code', color: '#6366f1' },
    ]
  };

  useEffect(() => {
    const handleSetRoadmap = (e) => {
      if (e.detail && roadmapData[e.detail]) {
        setActiveTab(e.detail);
      }
    };
    window.addEventListener('setRoadmap', handleSetRoadmap);
    return () => window.removeEventListener('setRoadmap', handleSetRoadmap);
  }, []);

  const conseils = [
    { title: 'Bases Solides', desc: <>Ne brûlez pas les étapes.<br />Maîtrisez les fondamentaux avant les frameworks.</>, icon: 'icon-layers' },
    { title: 'Pratique Réelle', desc: <>Réalisez des projets concrets.<br />Un code sur GitHub vaut mieux que 100 tutos.</>, icon: 'icon-code' },
    { title: 'Réseautage', desc: <>Allez aux meetups et sur LinkedIn.<br />Le marché caché est dans les relations humaines.</>, icon: 'icon-people' },
    { title: 'Veille Tech', desc: <>Le domaine change très vite.<br />Lisez des articles 30 min chaque jour.</>, icon: 'icon-search' }
  ];

  return (
    <section className="ftco-section bg-light" id="skills-section" style={{
      padding: '120px 0 100px',
      scrollMarginTop: '100px'
    }}>
      <div className="container">
        <div ref={headerRef} style={headerStyle} className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4" style={{ fontWeight: '900', color: '#000', letterSpacing: '1px' }}>ROADMAPS PAR MÉTIER IT</h2>
            <p className="text-muted font-weight-bold mb-5">Choisissez votre domaine et découvrez le parcours étape par étape pour réussir votre reconversion.</p>
            <div className="roadmap-tabs d-flex justify-content-center flex-wrap" style={{ gap: '15px', marginBottom: '60px' }}>
              {[
                { id: 'dev', label: 'Développement' },
                { id: 'cyber', label: 'Cybersécurité' },
                { id: 'ia', label: 'IA & DATA' },
                { id: 'devops', label: 'Cloud / DevOps' }
              ].map((tab) => {
                const colors = {
                  dev: '#FFA500',
                  cyber: '#00ced1',
                  ia: '#f39c12',
                  devops: '#f59e0b'
                };
                return (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="btn"
                    style={{ 
                      borderRadius: '30px', 
                      padding: '15px 35px', 
                      fontWeight: '900', 
                      textTransform: 'uppercase',
                      background: activeTab === tab.id ? colors[tab.id] : 'transparent',
                      color: activeTab === tab.id ? '#000' : colors[tab.id],
                      border: `3px solid ${colors[tab.id]}`,
                      transition: 'all 0.3s ease',
                      minWidth: '200px',
                      boxShadow: activeTab === tab.id ? `0 12px 25px ${colors[tab.id]}50` : 'none',
                      letterSpacing: '1px',
                      marginBottom: '10px'
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5 justify-content-center" style={{ gap: '10px' }}>
          {roadmapData[activeTab].map((item, index) => (
            <RoadmapCard key={`${activeTab}-${index}`} item={item} index={index} />
          ))}
        </div>

        <div className="row justify-content-center" style={{ 
          paddingTop: '100px', 
          marginTop: '100px', 
          borderTop: '2px solid rgba(0,0,0,0.08)' 
        }}>
          <div className="col-md-12 text-center mb-5">
            <h3 className="h4 font-weight-bold" style={{ 
              color: '#000', 
              fontSize: '2.2rem', 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              marginBottom: '60px',
              fontWeight: '900'
            }}>
              CONSEILS POUR RÉUSSIR
            </h3>
          </div>
          <div className="row justify-content-center" style={{ gap: '30px', width: '100%', padding: '0 20px' }}>
            {conseils.map((conseil, index) => (
              <ConseilCard key={index} conseil={conseil} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmaps;
