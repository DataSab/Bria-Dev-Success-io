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
  'hero.title': 'Envisager sa reconversion dans l’informatique',
  'hero.subtitle': 'BRIA DEV SUCCESS (BDS) 👋',
  'hero.quote': '« Votre temps est limité, ne le gâchez pas en menant une existence qui n’est pas la vôtre. » — Steve Jobs',
  'hero.welcome': "Se reconvertir dans l’IT est un défi passionnant, mais il est facile de se perdre. J'ai créé cet espace pour vous aider à y voir plus clair et à avancer sereinement.",
  'hero.btn.about': 'Découvrir mon parcours',
  'hero.btn.roadmaps': 'Voir les Roadmaps',

  // What you will find here
  'features.title': 'Ce que vous trouverez ici',
  'features.tools.title': 'Outils clés',
  'features.tools.desc': 'Pour bien démarrer et progresser.',
  'features.practice.title': 'La pratique',
  'features.practice.desc': 'Conseils pour appliquer concrètement.',
  'features.orientation.title': 'L’orientation',
  'features.orientation.desc': 'Choisir votre voie sans vous éparpiller.',
  'features.close': 'Fermer la fiche',

  // Features Details (Modals)
  'features.tools.detail': 'Pour bien démarrer, vous avez besoin d\'un environnement solide. Je vous recommande VS Code comme éditeur, Git pour sauvegarder votre code, et de vous familiariser avec le terminal. Ne collectionnez pas les outils, apprenez à maîtriser les essentiels.',
  'features.practice.detail': 'La théorie ne suffit pas. Créez des petits projets dès la première semaine. Utilisez GitHub pour montrer votre progression. Si vous visez la cybersécurité, pratiquez sur des plateformes comme TryHackMe ou HackTheBox pour manipuler de vrais outils.',
  'features.orientation.detail': 'Le domaine est vaste : Web, Data, Cyber, Cloud... Testez un peu de tout au début pour voir ce qui vous passionne. L\'important est de choisir une direction claire pour éviter l\'épuisement et rester focalisé sur un objectif atteignable.',

  // About Section
  'about.title': 'Qui suis-je ?',
  'about.intro': "Je m’appelle Bria. Passionnée par le code et la sécurité numérique, j'ai suivi un parcours de développeuse full-stack pour comprendre comment naissent les applications.",
  'about.specialization': "Aujourd'hui, je me spécialise en cybersécurité. Mon but est de partager mon expérience de terrain pour vous faire gagner du temps.",
  'about.goal.title': 'Mon objectif : Vous guider',
  'about.goal.1': 'Savoir par où commencer concrètement.',
  'about.goal.2': 'Éviter les erreurs classiques de débutant.',
  'about.goal.3': 'Structurer votre apprentissage pour rester motivé.',
  'about.footer': 'Alors, prêt à construire votre projet dans la tech ?',

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

  // Events
  'nav.events': 'Agenda Events',
  'events.title': 'Agenda Events',
  'events.description': 'Salons, webinaires, rencontres de formation et opportunités d\'emploi pour réussir votre reconversion IT',

  // Contact
  'contact.title': 'Pour me contacter',
  'contact.btn': 'Email',

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
