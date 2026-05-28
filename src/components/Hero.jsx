import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const videoRef = useRef(null);
  const fullText = t('hero.title');

  useEffect(() => {
    setText('');
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.70;
    video.play().catch(err => {
      console.log("Autoplay prevented or video error:", err);
    });

    const handleTimeUpdate = () => {
      if (video.currentTime >= 28) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section id="home-section" className="hero-wrap" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#01161e', /* fallback si vidéo non chargée */
    }}>

      {/* ── Vidéo fond plein écran ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay bleu profond ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, rgba(1,22,30,0.92) 0%, rgba(1,42,74,0.85) 40%, rgba(0,105,148,0.70) 70%, rgba(1,22,30,0.95) 100%)',
        zIndex: 1,
      }} />

      {/* ── Particules code flottant ── */}
      <ParticlesBackground />

      {/* ── Contenu centré ── */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 3,
        maxWidth: '860px',
        textAlign: 'center',
        padding: '120px 20px 60px',
      }}>

        <img
          src="/images/logo-briadev.png"
          alt="Bria Dev Success Logo"
          style={{
            height: 'clamp(60px, 10vw, 90px)',
            width: 'auto',
            marginBottom: '1rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            filter: 'drop-shadow(0 0 18px rgba(0,105,148,0.6))',
          }}
        />

        <span className="subheading" style={{
          color: '#FFA500', 
          fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', 
          fontWeight: '600',
          letterSpacing: '5px',
          display: 'block',
          marginBottom: '1rem',
          textShadow: '0 0 15px rgba(0,0,0,0.6)',
          textTransform: 'uppercase',
        }}>
          {t('hero.subtitle')}
        </span>

        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(1.6rem, 5vw, 3.2rem)',
          fontWeight: '900',
          textShadow: '0 4px 30px rgba(0,0,0,0.9)',
          lineHeight: '1.15',
          marginBottom: '1.2rem',
        }}>
          {text}
        </h1>

        <p className="lead text-white" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', 
          lineHeight: '1.7',
          opacity: 1,
          maxWidth: '800px',
          margin: '0 auto 1.5rem',
          padding: '1.5rem 2rem',
          /* Bleu foncé profond et élégant */
          background: 'rgba(1, 22, 30, 0.85)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          fontWeight: '500',
        }}>
          {t('hero.welcome')}
        </p>

        <blockquote style={{
          fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)',
          fontStyle: 'italic',
          color: '#fff',
          lineHeight: '1.7',
          borderLeft: 'none',
          maxWidth: '700px',
          margin: '0 auto 2.5rem',
          padding: '1.2rem 2rem',
          /* Même bleu foncé élégant pour l'harmonie */
          background: 'rgba(1, 22, 30, 0.75)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(0, 212, 255, 0.25)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.25)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        }}>
          {t('hero.quote')}
        </blockquote>

        <div className="hero-buttons" style={{
          display: 'flex',
          gap: '0.8rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <a href="#about-section" style={{
            borderRadius: '50px',
            fontWeight: '700',
            padding: '12px 28px',
            fontSize: '0.8rem',
            background: '#fff',
            color: '#000',
            border: '2px solid #fff',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '1px',
          }}>
            {t('hero.btn.about')}
          </a>

          <a href="#skills-section" style={{
            borderRadius: '50px',
            fontWeight: '700',
            padding: '12px 28px',
            fontSize: '0.8rem',
            background: '#FFA500',
            color: '#000',
            border: '2px solid #FFA500',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            letterSpacing: '1px',
          }}>
            {t('hero.btn.roadmaps')}
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;
