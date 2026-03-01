import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CareerPaths = () => {
  const [activeTab, setActiveTab] = useState('web_mobile');
  const [headerRef, headerStyle] = useScrollReveal();
  const [tabsRef, tabsStyle] = useScrollReveal({ delay: 0.2 });
  const [detailsRef, detailsStyle] = useScrollReveal({ delay: 0.4 });

  const careerPaths = {
    web_mobile: {
      title: "Développement Web & Mobile",
      subtitle: "Fullstack • iOS • Android • PWA",
      description: "Concevez des solutions numériques complètes, du site web responsive à l'application mobile native.",
      duration: "8-14 mois",
      salary: "38k-70k€",
      skills: ["React/Next.js", "React Native", "Node.js", "Flutter", "API REST"],
      steps: [
        "Maîtriser JavaScript et TypeScript",
        "Apprendre le développement Frontend (React)",
        "Maîtriser le Backend (Node.js/Express)",
        "Développer pour Mobile (React Native ou Flutter)",
        "Apprendre le déploiement multi-plateforme",
        "Gérer le cycle de vie complet d'une App"
      ],
      icon: "📱",
      color: "#3b82f6"
    },
    ai: {
      title: "Intelligence Artificielle",
      subtitle: "Machine Learning • Data • Deep Learning",
      description: "Développez des systèmes intelligents et automatisez l'analyse de données complexes.",
      duration: "15-24 mois",
      salary: "45k-85k€",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Statistiques"],
      steps: [
        "Maîtriser Python et la manipulation de données",
        "Apprendre les mathématiques appliquées à l'IA",
        "Comprendre les algorithmes de Machine Learning",
        "Explorer les réseaux de neurones profonds",
        "Pratiquer sur des modèles pré-entraînés",
        "Déployer des modèles d'IA en production"
      ],
      icon: "🤖",
      color: "#8b5cf6"
    },
    ui_ux: {
      title: "Design Interface UI/UX",
      subtitle: "Prototypage • User Research • Figma",
      description: "Créez des expériences utilisateurs intuitives et des interfaces visuelles percutantes.",
      duration: "6-10 mois",
      salary: "35k-60k€",
      skills: ["Figma", "Adobe XD", "Design Thinking", "User Persona", "Wireframing"],
      steps: [
        "Comprendre les principes du Design Thinking",
        "Maîtriser les outils de création (Figma/XD)",
        "Apprendre l'architecture de l'information",
        "Réaliser des tests utilisateurs",
        "Créer des prototypes interactifs",
        "Collaborer avec les développeurs"
      ],
      icon: "🎨",
      color: "#ec4899"
    },
    databases: {
      title: "Base de données",
      subtitle: "SGBD • SQL • NoSQL • Data Architect",
      description: "Gérez l'intégrité, la sécurité et la performance des données au cœur des applications.",
      duration: "8-12 mois",
      salary: "40k-75k€",
      skills: ["PostgreSQL", "MongoDB", "Architecture", "Optimization", "Security"],
      steps: [
        "Maîtriser le langage SQL",
        "Comprendre la modélisation de données (Merise/UML)",
        "Administrer des SGBD relationnels et NoSQL",
        "Optimiser les requêtes et les index",
        "Assurer la sécurité et la réplication",
        "Gérer les flux de données (ETL)"
      ],
      icon: "🗄️",
      color: "#10b981"
    },
    devops: {
      title: "DevOps & Cloud",
      subtitle: "Infrastructure • CI/CD • Monitoring",
      description: "Automatisez le déploiement et gérez l'infrastructure cloud des entreprises.",
      duration: "10-18 mois",
      salary: "45k-80k€",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
      steps: [
        "Maîtriser l'administration Linux",
        "Apprendre la containerisation (Docker)",
        "Mettre en place des pipelines CI/CD",
        "Maîtriser un Cloud Provider (AWS/Azure)",
        "Apprendre l'Infrastructure as Code (Terraform)",
        "Implémenter le monitoring et l'observabilité"
      ],
      icon: "☁️",
      color: "#f59e0b"
    },
    cybersecurity: {
      title: "Cybersécurité",
      subtitle: "Ethical Hacking • SOC • Forensic",
      description: "Protégez les systèmes et les données contre les cyberattaques et les vulnérabilités.",
      duration: "12-24 mois",
      salary: "40k-75k€",
      skills: ["Pentesting", "Networking", "SIEM", "Cryptographie", "GRC"],
      steps: [
        "Acquérir des bases solides en réseaux",
        "Apprendre les techniques d'Ethical Hacking",
        "Comprendre les architectures de sécurité",
        "Se former à l'audit de vulnérabilité",
        "Obtenir des certifications reconnues",
        "Gérer la réponse aux incidents"
      ],
      icon: "🛡️",
      color: "#ef4444"
    }
  };

  // Les onglets sont déjà rangés par longueur de titre dans l'objet ci-dessus
  const tabs = Object.keys(careerPaths);
  const currentPath = careerPaths[activeTab];

  return (
    <section id="career-paths-section" style={{
      padding: '100px 0 120px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Header */}
        <div ref={headerRef} style={headerStyle} className="row justify-content-center mb-5">
          <div className="col-md-10 text-center">
            <h2 className="mb-4" style={{
              fontWeight: '800',
              color: '#1e293b',
              fontSize: '2.8rem',
              lineHeight: '1.2',
              letterSpacing: '-0.5px'
            }}>
              Choisissez Votre Voie IT
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#64748b',
              maxWidth: '650px',
              margin: '0 auto',
              lineHeight: '1.7',
              fontWeight: '400',
              marginBottom: '60px' /* Espacement ajouté ici */
            }}>
              Découvrez les métiers IT les plus demandés et leurs parcours de formation
            </p>
          </div>
        </div>

        {/* Career Tabs - Grille 2 colonnes avec espacement supérieur */}
        <div ref={tabsRef} className="row justify-content-center" style={{ ...tabsStyle, marginBottom: '80px', marginTop: '20px' }}>
          <div className="col-md-12">
            <div className="mx-auto" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              justifyContent: 'center',
              gap: '25px',
              padding: '0 20px',
              maxWidth: '800px'
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    height: '80px',
                    padding: '10px 20px',
                    borderRadius: '15px',
                    fontWeight: '800',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    background: activeTab === tab
                      ? careerPaths[tab].color
                      : '#ffffff',
                    color: activeTab === tab ? '#fff' : '#475569',
                    transform: activeTab === tab ? 'translateY(-5px)' : 'translateY(0)',
                    boxShadow: activeTab === tab
                      ? `0 15px 30px ${careerPaths[tab].color}40`
                      : '0 4px 15px rgba(0,0,0,0.05)',
                    border: activeTab === tab ? 'none' : '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <span style={{ fontSize: '1.4rem', marginBottom: '4px' }}>
                    {careerPaths[tab].icon}
                  </span>
                  <div style={{ lineHeight: '1.1' }}>
                    {careerPaths[tab].title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Career Details - Espacement ajouté avec marginTop */}
        <div ref={detailsRef} className="row justify-content-center" style={{ ...detailsStyle, marginTop: '40px' }}>
          <div className="col-lg-11 col-xl-10">
            <div key={activeTab} className="mx-auto" style={{
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
              borderRadius: '20px',
              padding: '40px 35px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '1px solid rgba(255,255,255,0.3)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
              animation: 'fadeInUp 0.5s ease-out'
            }}>
              {/* Header Card */}
              <div className="row mb-4">
                <div className="col-12">
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'center' }}>
                    <div style={{
                      width: '55px',
                      height: '55px',
                      background: `linear-gradient(135deg, ${currentPath.color} 0%, ${currentPath.color}cc 100%)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.6rem',
                      marginRight: '16px',
                      boxShadow: `0 6px 20px ${currentPath.color}40`
                    }}>
                      {currentPath.icon}
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h3 style={{
                        fontWeight: '800',
                        color: '#1e293b',
                        fontSize: '1.7rem',
                        marginBottom: '4px',
                        letterSpacing: '-0.3px'
                      }}>
                        {currentPath.title}
                      </h3>
                      <p style={{
                        color: currentPath.color,
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        margin: 0
                      }}>
                        {currentPath.subtitle}
                      </p>
                    </div>
                  </div>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '20px',
                    textAlign: 'center',
                    fontWeight: '400'
                  }}>
                    {currentPath.description}
                  </p>

                  {/* Duration and Salary inline */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '30px' }}>
                    <div style={{
                      background: `${currentPath.color}15`,
                      borderRadius: '12px',
                      padding: '12px 20px',
                      textAlign: 'center',
                      minWidth: '120px',
                      border: `1px solid ${currentPath.color}20`
                    }}>
                      <div style={{
                        fontSize: '1.3rem',
                        fontWeight: '800',
                        color: currentPath.color
                      }}>
                        {currentPath.duration}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        fontWeight: '600',
                        marginTop: '2px'
                      }}>
                        Formation
                      </div>
                    </div>
                    <div style={{
                      background: `${currentPath.color}15`,
                      borderRadius: '12px',
                      padding: '12px 20px',
                      textAlign: 'center',
                      minWidth: '120px',
                      border: `1px solid ${currentPath.color}20`
                    }}>
                      <div style={{
                        fontSize: '1.3rem',
                        fontWeight: '800',
                        color: currentPath.color
                      }}>
                        {currentPath.salary}
                      </div>
                      <div style={{
                        fontSize: '0.75rem',
                        color: '#64748b',
                        fontWeight: '600',
                        marginTop: '2px'
                      }}>
                        Salaire
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Steps */}
              <div className="row">
                <div className="col-md-6 mb-4 mb-md-0">
                  <h4 style={{
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '16px',
                    fontSize: '1.15rem'
                  }}>
                    🎯 Compétences Clés
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {currentPath.skills.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          background: `${currentPath.color}20`,
                          color: currentPath.color,
                          padding: '6px 14px',
                          borderRadius: '18px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          border: `1px solid ${currentPath.color}40`,
                          lineHeight: '1.4'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <h4 style={{
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '16px',
                    fontSize: '1.15rem'
                  }}>
                    📋 Étapes de Formation
                  </h4>
                  <div>
                    {currentPath.steps.map((step, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        marginBottom: '10px'
                      }}>
                        <div style={{
                          width: '24px',
                          height: '24px',
                          background: `linear-gradient(135deg, ${currentPath.color} 0%, ${currentPath.color}cc 100%)`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: '700',
                          fontSize: '0.7rem',
                          marginRight: '10px',
                          minWidth: '24px',
                          marginTop: '2px',
                          boxShadow: `0 2px 8px ${currentPath.color}30`
                        }}>
                          {index + 1}
                        </div>
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.9rem',
                          lineHeight: '1.5'
                        }}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPaths;