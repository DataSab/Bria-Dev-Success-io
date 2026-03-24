import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;

    const symbols = [
      '</>', '{ }', '01', '#!/', '=>', '&&', '||',
      'npm', 'git', 'ssh', 'API', 'CLI', 'def',
      '0x1F', '[ ]', '//', '##', 'var', '>>',
      'sudo', 'curl', 'bash', 'chmod', 'root',
    ];

    const mouse = { x: null, y: null, radius: 130 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor() {
        this.reset();
        // Disperse initalement sur tout le canvas
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() - 0.5) * 0.5;
        this.directionY = (Math.random() - 0.5) * 0.5;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.fontSize = Math.random() * 5 + 9; // 9–14px
        this.baseOpacity = Math.random() * 0.4 + 0.35;
        this.opacity = this.baseOpacity;
        this.pulseSpeed = Math.random() * 0.008 + 0.003;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      draw() {
        ctx.font = `${this.fontSize}px 'Courier New', Courier, monospace`;
        ctx.fillStyle = `rgba(0, 255, 200, ${this.opacity})`;
        ctx.fillText(this.symbol, this.x, this.y);
      }

      update(time) {
        // Pulsation douce de l'opacité
        this.opacity = this.baseOpacity + Math.sin(time * this.pulseSpeed + this.pulsePhase) * 0.08;

        // Rebond sur les bords
        if (this.x > canvas.width + 40 || this.x < -40) this.directionX = -this.directionX;
        if (this.y > canvas.height + 40 || this.y < -40) this.directionY = -this.directionY;

        // Répulsion souris
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= Math.cos(angle) * force * 4;
            this.y -= Math.sin(angle) * force * 4;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 16000), 60);
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      const maxDist = 140;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * 0.25;
            ctx.strokeStyle = `rgba(0, 255, 200, ${op})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    let time = 0;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;
      particlesArray.forEach(p => p.update(time));
      connect();
    }

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.75
      }}
    />
  );
};

export default ParticlesBackground;
