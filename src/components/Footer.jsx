import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{
      background: '#1e293b',
      color: '#94a3b8',
      textAlign: 'center',
      padding: '24px 16px',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Bria Dev Success. {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
