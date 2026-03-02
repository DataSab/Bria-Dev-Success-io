import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Events = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('Tous');

  const events = [
    {
      date: '15 Mars 2026',
      endDate: '17 Mars 2026',
      title: 'SALON TECH FOR GOOD - PARIS',
      description: 'Le plus grand salon européen dédié aux technologies et à la reconversion professionnelle dans l\'IT.',
      location: 'Paris Expo Porte de Versailles',
      type: 'Salon',
      category: 'Salon',
      icon: '🎪',
      link: '#',
      isExternal: false
    },
    {
      date: '22 Mars 2026',
      time: '14h00 - 16h00',
      title: 'WEBINAIRE : SE RECONVERTIR EN DÉVELOPPEUR WEB',
      description: 'Session live avec Q&A pour découvrir les étapes clés d\'une reconversion réussie en développement web.',
      location: 'En ligne (Zoom)',
      type: 'Webinaire',
      category: 'Webinaire',
      icon: '💻',
      link: '#',
      isExternal: false
    },
    {
      date: '5 Avril 2026',
      time: '10h00 - 18h00',
      title: 'FORUM EMPLOI IT & DIGITAL',
      description: 'Rencontrez plus de 100 recruteurs et entreprises tech à la recherche de profils juniors et reconversions.',
      location: 'Lyon Convention Center',
      type: 'Emploi',
      category: 'Emploi',
      icon: '💼',
      link: '#',
      isExternal: false
    },
    {
      date: '12 Avril 2026',
      time: '18h30 - 20h30',
      title: 'MEETUP RECONVERSION TECH - BORDEAUX',
      description: 'Rencontre informelle entre personnes en reconversion IT. Partage d\'expériences, networking et conseils.',
      location: 'Le Wagon Bordeaux',
      type: 'Rencontre',
      category: 'Formation',
      icon: '🤝',
      link: '#',
      isExternal: false
    },
    {
      date: '18 Avril 2026',
      time: '14h00 - 15h30',
      title: 'WEBINAIRE : CYBERSÉCURITÉ POUR DÉBUTANTS',
      description: 'Introduction à la cybersécurité : métiers, compétences requises et parcours de formation.',
      location: 'En ligne (Google Meet)',
      type: 'Webinaire',
      category: 'Webinaire',
      icon: '🔒',
      link: '#',
      isExternal: false
    },
    {
      date: '25 Avril 2026',
      endDate: '26 Avril 2026',
      title: 'HACKATHON JUNIOR FRIENDLY',
      description: '48h pour coder un projet en équipe. Ouvert aux débutants et personnes en reconversion !',
      location: 'Station F, Paris',
      type: 'Formation',
      category: 'Formation',
      icon: '🚀',
      link: '#',
      isExternal: false
    }
  ];

  const categories = ['Tous', 'Salon', 'Webinaire', 'Formation', 'Emploi'];
  const filteredEvents = filter === 'Tous' ? events : events.filter(e => e.category === filter);

  return (
    <section id="events-section" style={{
      padding: '100px 0',
      scrollMarginTop: '100px',
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
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
                  border: filter === cat ? 'none' : '2px solid #ffbd39',
                  background: filter === cat ? '#ffbd39' : 'rgba(255, 189, 57, 0.1)',
                  color: filter === cat ? '#000' : '#ffbd39',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseOver={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = 'rgba(255, 189, 57, 0.2)';
                  }
                }}
                onMouseOut={(e) => {
                  if (filter !== cat) {
                    e.currentTarget.style.background = 'rgba(255, 189, 57, 0.1)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
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
                border: '1px solid rgba(255, 189, 57, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(255, 189, 57, 0.3)';
                e.currentTarget.style.borderColor = '#ffbd39';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 189, 57, 0.3)';
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
                  color: '#ffbd39',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'rgba(255, 189, 57, 0.15)',
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
                  e.currentTarget.style.background = '#ffbd39';
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

        {/* Call to action */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
          padding: '40px',
          background: 'rgba(255, 189, 57, 0.1)',
          borderRadius: '20px',
          border: '2px solid rgba(255, 189, 57, 0.3)'
        }}>
          <h3 style={{
            color: '#ffbd39',
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
              background: '#ffbd39',
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
              boxShadow: '0 5px 20px rgba(255, 189, 57, 0.4)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 189, 57, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(255, 189, 57, 0.4)';
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
