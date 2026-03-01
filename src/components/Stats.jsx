import React, { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Counter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const StatCard = ({ stat, index }) => {
  const [revealRef, revealStyle] = useScrollReveal({ delay: index * 0.1 });
  
  return (
    <div 
      ref={revealRef}
      style={revealStyle}
      className="col-md-3 col-6 mb-4"
    >
      <div style={{
        padding: '20px',
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 189, 57, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'default'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 189, 57, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
        e.currentTarget.style.borderColor = 'rgba(255, 189, 57, 0.1)';
      }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{stat.icon}</div>
        <h2 style={{ 
          color: '#ffbd39', 
          fontSize: '2.5rem', 
          fontWeight: '900',
          margin: '0 0 5px 0'
        }}>
          <Counter end={stat.value} suffix={stat.suffix} />
        </h2>
        <p style={{ 
          color: 'rgba(255,255,255,0.7)', 
          fontSize: '0.9rem', 
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          margin: 0
        }}>
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Heures de formation', value: 1200, suffix: '+', icon: '⏱️' },
    { label: 'Projets réalisés', value: 15, suffix: '', icon: '📁' },
    { label: 'Technologies', value: 12, suffix: '', icon: '⚙️' },
    { label: 'Articles rédigés', value: 8, suffix: '', icon: '✍️' }
  ];

  return (
    <section style={{
      padding: '60px 0',
      background: '#1a1a2e',
      color: '#fff'
    }}>
      <div className="container">
        <div className="row text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
