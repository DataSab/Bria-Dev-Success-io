import React from 'react';

const About = () => {
  return (
    <section
      className="section-modern"
      id="about-section"
      style={{
        background: '#ffffff',
        padding: '100px 0',
        scrollMarginTop: '80px'
      }}
    >
      <div className="container">
        {/* Titre de la section - Gros, Noir et Centré */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center">
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: '#000000',
                marginBottom: '2rem'
              }}
            >
              À Propos
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11">
            <div
              className="about-card text-center"
              style={{
                background: '#fff',
                padding: '2rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Logo officiel - Parfaitement centré sous le titre */}
              <div className="profile-img-container mb-5" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img
                  src="images/logo-briadev.png"
                  alt="BRIA DEV SUCCESS Logo"
                  className="img-fluid shadow-lg"
                  style={{
                    width: '320px',
                    height: 'auto',
                    objectFit: 'contain',
                    border: '4px solid #ffbd39',
                    padding: '20px',
                    background: '#fff',
                    borderRadius: '20px',
                    margin: '0 auto'
                  }}
                />
              </div>

              {/* Infos Profil - Centrées et descendues pour aérer le logo */}
              <div className="row justify-content-center mb-5" style={{ marginTop: '60px' }}>
                <div className="col-md-10 col-lg-8">
                  <blockquote
                    className="blockquote border-0 p-0 m-0 text-muted"
                    style={{
                      fontSize: '1.2rem',
                      fontStyle: 'italic',
                      lineHeight: '1.6'
                    }}
                  >
                    <p className="mb-0">
                      « La programmation est l'outil le plus puissant pour façonner votre avenir. »
                    </p>
                  </blockquote>
                </div>
              </div>

              {/* Texte de présentation - Centré */}
              <div className="about-text-content mx-auto" style={{ width: '100%', maxWidth: '900px' }}>
                <p
                  className="lead font-weight-bold text-dark mb-4 text-center"
                  style={{ fontSize: '1.3rem', lineHeight: '1.6' }}
                >
                  Bonjour et bienvenue ! Je suis Bria, développeuse passionnée par les technologies numériques et la cybersécurité.
                </p>
                
                <div
                  className="text-center"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#444'
                  }}
                >
                  <p className="mb-4">
                    Après avoir complété une formation approfondie en développement full-stack, qui m'a permis de maîtriser le fonctionnement des applications, des architectures et des flux de données, je me spécialise désormais dans le domaine qui m'anime le plus : la cybersécurité.
                  </p>
                  <p className="mb-4">
                    La cybersécurité est aujourd'hui un enjeu stratégique majeur pour protéger et façonner le numérique de demain.
                  </p>
                  <p className="mb-4">
                    Forte de plusieurs années d'expérience dans le secteur commercial, j'apporte une double compétence technique et métier, ce qui me permet d'aborder les enjeux de sécurité avec une vision globale.
                  </p>
                  <p className="mb-0">
                    Mon objectif est de contribuer à la création d'environnements numériques plus sûrs, résilients et responsables, en alliant rigueur technique, sens de l'analyse et compréhension des enjeux opérationnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
