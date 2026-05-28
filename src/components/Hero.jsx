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
        maxWidth: '800px',
        textAlign: 'center',
        padding: '80px 20px 40px', 
      }}>

        <img
          src="/images/logo-briadev.png"
          alt="Bria Dev Success Logo"
          style={{
            height: 'clamp(40px, 7vw, 60px)', 
            width: 'auto',
            marginBottom: '0.8rem',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            filter: 'drop-shadow(0 0 15px rgba(0,105,148,0.5))',
          }}
        />

        <span className="subheading" style={{
          color: '#FFA500', 
          fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', 
          fontWeight: '600',
          letterSpacing: '4px',
          display: 'block',
          marginBottom: '0.6rem',
          textShadow: '0 0 12px rgba(0,0,0,0.6)',
          textTransform: 'uppercase',
        }}>
          {t('hero.subtitle')}
        </span>

        <h1 style={{
          color: '#fff',
          fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', 
          fontWeight: '900',
          textShadow: '0 4px 25px rgba(0,0,0,0.9)',
          lineHeight: '1.1',
          marginBottom: '1rem',
        }}>
          {text}
        </h1>

        <p className="lead text-white" style={{
          fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', 
          lineHeight: '1.6',
          opacity: 1,
          maxWidth: '700px',
          margin: '0 auto 1.2rem',
          padding: '1rem 1.5rem', 
          background: 'rgba(1, 22, 30, 0.85)',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
          fontWeight: '500',
        }}>
          {t('hero.welcome')}
        </p>

        <blockquote style={{
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)', 
          fontStyle: 'italic',
          color: 'rgba(255, 255, 255, 0.9)',
          lineHeight: '1.5',
          borderLeft: 'none',
          maxWidth: '600px',
          margin: '0 auto 1.8rem',
          padding: '0.8rem 1.5rem', 
          background: 'rgba(1, 22, 30, 0.65)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(0, 212, 255, 0.15)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.15)',
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
            padding: '10px 24px', 
            fontSize: '0.75rem', 
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
            padding: '10px 24px',
            fontSize: '0.75rem',
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
