import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Events = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('Tous');

  const events = [
    {
      date: '15 Avril 2026',
      endDate: '16 Avril 2026',
      title: 'PARIS BLOCKCHAIN WEEK',
      description: 'Le rendez-vous incontournable pour le Web3, les NFT et la convergence IA/Blockchain au Carrousel du Louvre.',
      location: 'Carrousel du Louvre, Paris',
      type: 'Salon',
      category: 'Salon',
      icon: '⛓️',
      link: 'https://www.parisblockchainweek.com',
      isExternal: true
    },
    {
      date: '15 Avril 2026',
      endDate: '16 Avril 2026',
      title: 'GO ENTREPRENEURS',
      description: 'Idéal pour les créateurs d\'entreprise et les freelances tech à Paris La Défense Arena.',
      location: 'Paris La Défense Arena',
      type: 'Salon',
      category: 'Salon',
      icon: '💼',
      link: 'https://www.go-entrepreneurs.com',
      isExternal: true
    },
    {
      date: '16 Avril 2026',
      endDate: '17 Avril 2026',
      title: 'MIXIT — CONF TECH & ÉTHIQUE',
      description: 'Une conférence à Lyon qui allie technique pure, éthique et diversité.',
      location: 'Lyon',
      type: 'Conférence',
      category: 'Formation',
      icon: '💡',
      link: 'https://mixitconf.org',
      isExternal: true
    },
    {
      date: '16 Avril 2026',
      title: 'WEBINAIRE "DONNÉES ET CONFORMITÉ"',
      description: 'Un événement en ligne pour décoder le RGPD, organisé par Cyber for Good.',
      location: 'En ligne',
      type: 'Webinaire',
      category: 'Webinaire',
      icon: '🔐',
      link: 'https://www.cyberforgood.fr',
      isExternal: true
    },
    {
      date: '13 Mai 2026',
      endDate: '15 Mai 2026',
      title: 'IOT SOLUTIONS WORLD CONGRESS',
      description: 'L\'événement de référence pour l\'Internet des Objets en Europe, basé à Barcelone.',
      location: 'Barcelone, Espagne',
      type: 'Salon',
      category: 'Salon',
      icon: '📡',
      link: 'https://www.iotsworldcongress.com',
      isExternal: true
    },
    {
      date: '19 Mai 2026',
      endDate: '20 Mai 2026',
      title: 'SEANERGY',
      description: 'Salon à Nantes concentré sur les technologies liées aux énergies marines renouvelables.',
      location: 'Nantes',
      type: 'Salon',
      category: 'Salon',
      icon: '⚡',
      link: 'https://www.seanergy-forum.com',
      isExternal: true
    },
    {
      date: '21 Mai 2026',
      title: 'WEBINAIRE "L\'ÉTAT DE LA MENACE CYBER"',
      description: 'Un point sur les risques informatiques actuels, accessible à un public non averti.',
      location: 'En ligne',
      type: 'Webinaire',
      category: 'Webinaire',
      icon: '🛡️',
      link: 'https://www.francegenerosites.org',
      isExternal: true
    },
    {
      date: '2 Juin 2026',
      endDate: '4 Juin 2026',
      title: '3D PRINT CONGRESS & EXHIBITION',
      description: 'L\'événement de référence sur la fabrication additive à Lyon.',
      location: 'Lyon',
      type: 'Salon',
      category: 'Salon',
      icon: '🖨️',
      link: 'https://www.3dprint-exhibition-lyon.com',
      isExternal: true
    },
    {
      date: '17 Juin 2026',
      endDate: '20 Juin 2026',
      title: 'VIVATECH',
      description: 'La plus grande messe de la tech européenne à Paris Expo Porte de Versailles. Incontournable pour l\'innovation et les startups.',
      location: 'Paris Expo Porte de Versailles',
      type: 'Salon',
      category: 'Salon',
      icon: '🌍',
      link: 'https://vivatechnology.com',
      isExternal: true
    },
  ];

  const jobBoards = [
    {
      title: 'FRANCE TRAVAIL',
      description: 'Le service public de l\'emploi. Offres CDI, CDD, alternance dans le digital partout en France.',
      icon: '🇫🇷',
      link: 'https://www.francetravail.fr/accueil/',
      tag: 'Offres en continu'
    },
    {
      title: 'INDEED',
      description: 'Le moteur de recherche d\'emploi mondial. Filtre par "développeur", "data", "cybersécurité"...',
      icon: '🔍',
      link: 'https://fr.indeed.com',
      tag: 'Offres en continu'
    },
    {
      title: 'WELCOME TO THE JUNGLE',
      description: 'La référence pour les profils tech. Culture d\'entreprise, salaires et offres IT en transparence.',
      icon: '🌿',
      link: 'https://www.welcometothejungle.com/fr/jobs?refinementList%5Bjob.contract_type_names.fr%5D%5B%5D=CDI&query=digital',
      tag: 'Tech & startups'
    },
    {
      title: 'LINKEDIN JOBS',
      description: 'Le réseau professionnel numéro 1 pour décrocher un poste dans la tech et se faire repérer par les recruteurs.',
      icon: '💼',
      link: 'https://www.linkedin.com/jobs/search/?keywords=digital%20IT',
      tag: 'Réseau pro'
    },
    {
      title: 'TALENT.IO',
      description: 'Plateforme tech-only : développeurs, data scientists, DevOps. Les entreprises viennent à vous.',
      icon: '🎯',
      link: 'https://www.talent.io/p/fr-fr/jobs',
      tag: 'Tech uniquement'
    },
    {
      title: 'APEC',
      description: 'Pour les profils cadres et reconversions IT. Offres qualifiées et accompagnement personnalisé.',
      icon: '📋',
      link: 'https://www.apec.fr/candidat/recherche-emploi.html/emploi?motsCles=informatique',
      tag: 'Cadres & experts'
    },
    {
      title: 'MALT',
      description: 'La plateforme freelance numéro 1 en France. Idéal pour les développeurs, designers et consultants IT indépendants.',
      icon: '🚀',
      link: 'https://www.malt.fr',
      tag: 'Freelance'
    },
    {
      title: 'COMET',
      description: 'Missions freelance pour profils tech séniors : développeurs, data, cloud, cybersécurité.',
      icon: '☄️',
      link: 'https://www.comet.co',
      tag: 'Freelance IT'
    },
    {
      title: 'GLASSDOOR',
      description: 'Offres d\'emploi + avis salariés + salaires réels. Comparez les entreprises avant de postuler.',
      icon: '🔎',
      link: 'https://www.glassdoor.fr/Emploi/informatique-offres-emploi-SRCH_KO0,12.htm',
      tag: 'Avis & salaires'
    },
    {
      title: 'JOBTEASER',
      description: 'Orienté étudiants et jeunes diplômés. Stages, alternances et premiers emplois en tech.',
      icon: '🎓',
      link: 'https://www.jobteaser.com/fr/job-offers?keywords=informatique',
      tag: 'Juniors & alternance'
    },
    {
      title: 'CADREMPLOI',
      description: 'Offres cadres dans l\'IT, la data et le digital. Fiches salaires et conseils carrière inclus.',
      icon: '📊',
      link: 'https://www.cadremploi.fr/emploi/liste_offres.html?kw=informatique',
      tag: 'Cadres'
    },
    {
      title: 'REGIONSJOB / HELLOWORK',
      description: 'Offres d\'emploi IT par région. Parfait pour trouver des postes tech près de chez vous.',
      icon: '📍',
      link: 'https://www.hellowork.com/fr-fr/emploi/recherche.html?k=informatique',
      tag: 'Par région'
    },
  ];

  const categories = ['Tous', 'Salon', 'Webinaire', 'Formation', 'Emploi'];
  const filteredEvents = filter === 'Tous' ? events : events.filter(e => e.category === filter);

  return (
    <section id="events-section" style={{
      padding: '100px 0',
      scrollMarginTop: '100px',
      background: 'linear-gradient(-45deg, #01161e, #012a4a, #006994, #01497c, #013a63, #01161e)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontWeight: '800',
            color: '#fff',
            fontSize: '2.5rem',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            {t('events.title')}
          </h2>
          <p style={{
            color: '#cbd5e1',
            fontWeight: '500',
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '0 auto 30px',
            lineHeight: '1.6'
          }}>
            {t('events.description')}
          </p>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: filter === cat ? 'none' : '2px solid #FFEE8C',
                  background: filter === cat ? '#FFEE8C' : 'rgba(255, 238, 140, 0.1)',
                  color: filter === cat ? '#000' : '#FFEE8C',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = 'rgba(255, 238, 140, 0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = 'rgba(255, 238, 140, 0.1)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Job Boards Grid — affiché uniquement si filtre Emploi */}
        {filter === 'Emploi' && (
          <>
            <p style={{ textAlign: 'center', color: '#cbd5e1', marginBottom: '30px', fontSize: '1rem' }}>
              Toutes les plateformes pour trouver un emploi ou une mission dans le digital 🎯
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {jobBoards.map((board, index) => (
                <a
                  key={index}
                  href={board.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
                    borderRadius: '18px',
                    padding: '24px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,189,57,0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,189,57,0.3)';
                    e.currentTarget.style.borderColor = '#FFEE8C';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(255,189,57,0.3)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '2rem' }}>{board.icon}</span>
                    <span style={{ fontWeight: '800', fontSize: '1rem', color: '#1e293b' }}>{board.title}</span>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    color: '#FFEE8C',
                    background: 'rgba(255,189,57,0.12)',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    alignSelf: 'flex-start'
                  }}>{board.tag}</span>
                  <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>
                    {board.description}
                  </p>
                  <span style={{
                    marginTop: '6px',
                    display: 'inline-block',
                    background: '#1e293b',
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    padding: '8px 20px',
                    borderRadius: '20px',
                    alignSelf: 'flex-start',
                    letterSpacing: '0.5px'
                  }}>
                    Accéder →
                  </span>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Events Grid */}
        {filter !== 'Emploi' && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                border: '1px solid rgba(255, 238, 140, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 238, 140, 0.3)';
                e.currentTarget.style.borderColor = '#FFEE8C';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 238, 140, 0.3)';
              }}
            >
              {/* Icon Badge */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                fontSize: '2rem'
              }}>
                {event.icon}
              </div>

              {/* Date */}
              <div style={{ marginBottom: '15px' }}>
                <span style={{
                  fontSize: '0.85rem',
                  fontWeight: '800',
                  color: '#FFEE8C',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'rgba(255, 238, 140, 0.15)',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  display: 'inline-block'
                }}>
                  {event.date}
                  {event.endDate && ` - ${event.endDate}`}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontWeight: '800',
                fontSize: '1.3rem',
                color: '#1e293b',
                marginBottom: '15px',
                lineHeight: '1.3',
                paddingRight: '40px'
              }}>
                {event.title}
              </h3>

              {/* Description */}
              <p style={{
                color: '#64748b',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {event.description}
              </p>

              {/* Time & Location */}
              <div style={{ marginBottom: '20px' }}>
                {event.time && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                    color: '#475569',
                    fontSize: '0.85rem'
                  }}>
                    <span>🕐</span>
                    <span style={{ fontWeight: '600' }}>{event.time}</span>
                  </div>
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#475569',
                  fontSize: '0.85rem'
                }}>
                  <span>📍</span>
                  <span style={{ fontWeight: '600' }}>{event.location}</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href={event.link || "#"}
                target={event.isExternal ? "_blank" : "_self"}
                rel={event.isExternal ? "noopener noreferrer" : ""}
                style={{
                  background: '#1e293b',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  padding: '12px 28px',
                  borderRadius: '25px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#FFEE8C';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#1e293b';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                En savoir plus
              </a>
            </div>
          ))}
        </div>
        )}

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(255, 238, 140, 0.1)',
          borderRadius: '20px',
          border: '2px solid rgba(255, 238, 140, 0.3)'
        }}>
          <h3 style={{
            color: '#FFEE8C',
            fontSize: '1.5rem',
            fontWeight: '800',
            marginBottom: '15px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Vous organisez un événement IT ?
          </h3>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1rem',
            marginBottom: '20px',
            maxWidth: '600px',
            margin: '0 auto 20px'
          }}>
            Contactez-moi pour ajouter votre salon, webinaire ou rencontre à l'agenda !
          </p>
          <a
            href="#contact-section"
            style={{
              background: '#FFEE8C',
              color: '#000',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.9rem',
              padding: '14px 32px',
              borderRadius: '30px',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 5px 20px rgba(255, 238, 140, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 238, 140, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(255, 238, 140, 0.4)';
            }}
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
