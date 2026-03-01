import React, { createContext, useContext } from 'react';

const translations = {
  // Navigation
  'nav.home': 'Accueil',
  'nav.about': 'À propos',
  'nav.technologies': 'Technologies',
  'nav.careers': 'Métiers IT',
  'nav.roadmaps': 'Roadmaps',
  'nav.projects': 'Blog & Articles',
  'nav.contact': 'Contact',

  // Hero Section
  'hero.title': "Reconversion Professionnelle dans l'IT",
  'hero.subtitle': 'BRIA DEV SUCCESS (BDS)',
  'hero.description': 'Ressources, retours d\'expérience et outils pour réussir sa reconversion numérique.',
  'hero.btn.about': 'À Propos',
  'hero.btn.roadmaps': 'Roadmaps IT',

  // About Section
  'about.title': 'Mon Parcours',
  'about.paragraph1': 'Après plusieurs années dans le secteur tertiaire, j\'ai entrepris une reconversion professionnelle vers les métiers du numérique. Cette transition, bien que challengeante, s\'est révélée être une des meilleures décisions de ma vie.',
  'about.paragraph2': 'BRIA DEV SUCCESS est né de cette expérience. C\'est une plateforme dédiée à celles et ceux qui, comme moi, souhaitent donner un nouveau souffle à leur carrière en se tournant vers l\'IT.',
  'about.paragraph3': 'Mon objectif ? Partager des ressources, des retours d\'expérience et des conseils pratiques pour vous accompagner dans cette aventure passionnante qu\'est la reconversion numérique.',

  // Tech Stack
  'tech.title': 'Technologies Maîtrisées',
  'tech.description': 'Découvrez les outils et technologies que j\'utilise au quotidien',

  // Career Paths
  'careers.title': 'Choisissez Votre Voie IT',
  'careers.description': 'Découvrez les métiers IT les plus demandés et leurs parcours de formation',
  'careers.web_mobile.title': 'Développement Web & Mobile',
  'careers.web_mobile.subtitle': 'Fullstack • iOS • Android • PWA',
  'careers.databases.title': 'Base de données',
  'careers.databases.subtitle': 'SGBD • SQL • NoSQL • Data Architect',
  'careers.ui_ux.title': 'Design Interface UI/UX',
  'careers.ui_ux.subtitle': 'Prototypage • User Research • Figma',
  'careers.devops.title': 'DevOps & Cloud',
  'careers.devops.subtitle': 'Infrastructure • Automation • Monitoring',
  'careers.cybersecurity.title': 'Cybersécurité',
  'careers.cybersecurity.subtitle': 'Ethical Hacking • SOC • GRC',
  'careers.ai.title': 'Intelligence Artificielle',
  'careers.ai.subtitle': 'Machine Learning • Data Science • Deep Learning',
  'careers.skills': 'Compétences Clés',
  'careers.steps': 'Étapes de Formation',
  'careers.duration': 'Formation',
  'careers.salary': 'Salaire',

  // Roadmaps
  'roadmaps.title': 'Roadmaps par Métier IT',
  'roadmaps.description': 'Parcours structurés pour maîtriser les compétences essentielles',
  'roadmaps.frontend': 'Frontend',
  'roadmaps.backend': 'Backend',
  'roadmaps.fullstack': 'Fullstack',
  'roadmaps.mobile': 'Mobile',

  // Projects
  'projects.title': 'Blog & Articles',
  'projects.description': 'Retrouvez mes derniers articles et projets',

  // Contact
  'contact.title': 'Contactez-moi',
  'contact.btn': 'Me Contacter',

  // Footer
  'footer.rights': 'Tous droits réservés.',
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      t: (key) => translations[key] || key
    };
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const value = {
    t: (key) => translations[key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
